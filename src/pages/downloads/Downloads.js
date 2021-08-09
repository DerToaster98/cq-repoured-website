import { Component } from "react";

import { Link } from "react-router-dom";

import Banner from "../../components/banner/Banner";
import LoadingSymbol from "../../components/loadingSymbol/LoadingSymbol";

import './downloads.css';

import { GITHUB_API_URL_BASE, GITHUB_REPOSITORY, GITHUB_REPOSITORY_OWNER } from "../../Constants";

export default class Downloads extends Component {

    ENTRIES_PER_PAGE = 10;
    RELEASE_BASE_URL = GITHUB_API_URL_BASE + "/repos/" + GITHUB_REPOSITORY_OWNER + "/" + GITHUB_REPOSITORY

    constructor(props) {
        super(props);

        this.state = {
            areThereAnyMorePagesToRequest : true,
            requestingData : true,
            page : 1,
            versions : []
        }

        this.handleLoadMoreButtonClick = this.handleLoadMoreButtonClick.bind(this);
    }

    handleLoadMoreButtonClick() {
        this.fetchGitHubReleases();
    }

    fetchGitHubReleases() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        var requestURL = this.RELEASE_BASE_URL + "/releases";
        requestURL += "?per_page=" + this.ENTRIES_PER_PAGE + "&page=" + this.state.page;

        fetch(requestURL, requestOptions).then(
            response => {
                //response = "{\"entries\": " + response + "}";
                response.json().then(
                    responseJSON => {
                        if(Object.keys(responseJSON).length === 0) {
                            this.setState({areThereAnyMorePagesToRequest: false });

                            return;
                        }
                        //There is data to query...
                        for(var entry in responseJSON) {
                            let data = responseJSON[entry];
                            this.state.versions.push(this.createVersionEntryItem(data));
                        }
                        var pages = this.state.page + 1;
                        this.setState({
                            page : pages,
                            requestingData : false
                        });
                    }
                );
            }
        ).catch(
            error => {
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
            <div className="version-list-item">
                <span className="version-name">{versionJSON.name}</span>
                <span className="version-tag">{versionJSON.tag_name}</span>
                <Link to={"/changelog/" + versionJSON.tag_name}>Changelog</Link>
                <a className="navbarItem" href={versionJSON.assets[0].browser_download_url} target="_blank" rel="noreferrer"><div>Download</div></a>
            </div>
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
                        <div className="version-list">
                            {
                                Object.keys(this.state.versions).map((key) => {
                                    return (
                                        <div key={key}>
                                            {this.state.versions[key]}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="load-more-section">
                        {this.state.requestingData ? 
                            <LoadingSymbol></LoadingSymbol> 
                            : 
                            this.state.areThereAnyMorePagesToRequest ? <button className="btn-load-more" onClick={this.handleLoadMoreButtonClick}>Load more...</button> : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}