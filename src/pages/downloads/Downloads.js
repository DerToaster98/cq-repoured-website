import React, { Component } from "react";

import { Link } from "react-router-dom";

import Banner from "../../components/banner/Banner";
import LoadingSymbol from "../../components/loadingSymbol/LoadingSymbol";

import './downloads.css';

import { GITHUB_API_URL_BASE, GITHUB_REPOSITORY, GITHUB_REPOSITORY_OWNER } from "../../Constants";

export default class Downloads extends Component {

    ENTRIES_PER_PAGE = 20;
    RELEASE_BASE_URL = GITHUB_API_URL_BASE + "/repos/" + GITHUB_REPOSITORY_OWNER + "/" + GITHUB_REPOSITORY

    constructor(props) {
        super(props);

        this.state = {
            requestingData : true,
            page : 1,
            versions : [],
            errorText : ""
        }
    }

    fetchGitHubReleases() {
        this.setState({
            requestingData : true
        });

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        var requestURL = this.RELEASE_BASE_URL + "/releases";
        requestURL += "?per_page=" + this.ENTRIES_PER_PAGE + "&page=" + this.state.page;

        fetch(requestURL, requestOptions).then(
            response => {
                //response = "{\"entries\": " + response + "}";
                if(response.status != 200) {
                    if(response.status == 403) {
                        this.setState({errorText : "Rate limit for requests to the github API has exceeded! Please try again in a few hours..."});
                    }
                    this.setState({
                        requestingData : false
                    });
                    return
                }
                response.json().then(
                    responseJSON => {
                        if(Object.keys(responseJSON).length === 0) {
                            this.setState({
                                requestingData : false 
                            });

                            return;
                        }
                        //There is data to query...
                        for(var entry in responseJSON) {
                            let data = responseJSON[entry];
                            this.state.versions.push(this.createVersionEntryItem(data));
                        }
                        var pages = this.state.page + 1;
                        this.setState({
                            page : pages             
                        });
                        if(responseJSON.length >= this.ENTRIES_PER_PAGE) {
                            setTimeout(() => {this.fetchGitHubReleases()}, 125);
                        } else {
                            this.setState({
                                requestingData : false 
                            });
                        }
                    }
                );
            }
        ).catch(
            error => {
                this.setState({
                    areThereAnyMorePagesToRequest: false ,
                    requestingData : false
                });
                console.log(error);
                console.log("An error occured :(");
            }
        );
    }

    componentDidMount() {
        this.fetchGitHubReleases();
    }

    createVersionEntryItem(versionJSON) {
        return(
            <tr className="version-table-row">
                <td><span className="version-name">{versionJSON.name}</span></td>
                <td><span className="version-release-date">{new Date(versionJSON.published_at).toLocaleDateString()}</span></td>
                <td><Link to={"/changelog/" + versionJSON.tag_name}>Changelog</Link></td>
                <td><a className="navbarItem" href={versionJSON.assets[0].browser_download_url} target="_blank" rel="noreferrer"><div>Download</div></a></td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <Banner displayText="Downloads"></Banner>
                <div className="page-content">
                    <article>
                        <span>
                            Here you can download every published version of CQR.
                        </span>
                        <br></br>
                    </article>
                    <hr className="line-solid"></hr>
                    <div className="list-content">
                        {this.state.errorText != "" ?
                        <h3>{this.state.errorText}</h3>
                        :
                        <table className="version-table">
                            <tbody>
                                <tr>
                                    <th>Version Name</th>
                                    <th>Release Date</th>
                                    <th>Download Link</th>
                                    <th>Download Link</th>
                                </tr>
                                {
                                    Object.keys(this.state.versions).map((key) => {
                                        return (
                                            /*<tr className="version-table-row" key={key}>
                                                {this.state.versions[key]}
                                            </tr>*/
                                            this.state.versions[key]
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        }
                    </div>
                    <hr className="line-solid"></hr>
                    <br></br>
                    <div className="load-more-section">
                        {this.state.requestingData ? 
                            <LoadingSymbol></LoadingSymbol> 
                            : 
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}