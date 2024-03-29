import React, { Component } from "react";

import Banner from "../../components/banner/Banner";
import LoadingSymbol from "../../components/loadingSymbol/LoadingSymbol";

import './changelog.css';

import { GITHUB_API_URL_CQR, markedGHIssueLinkExtension } from "../../Constants";

//import MDEditor from '@uiw/react-md-editor';
import { marked } from 'marked';

import Parser from 'html-react-parser';

export default class Changelog extends Component {

    constructor(props) {
        super(props);

        var version = "latest";

        try {
            version = this.props.match.params.changelogID;
        } catch(e) {
            //Ignore
            version = "latest";
        }
        if(version === "" || typeof version === 'undefined') {
            version = "latest";
        }

        this.state = {
            errorText: "",
            versionNameGH : version,
            loadingDataFromGit : true,
            releaseDownloadURI : '',
            releaseObject : {}
        };
    }

    async componentDidMount() {
        const query = GITHUB_API_URL_CQR + "/releases/" + (this.state.versionNameGH === 'latest' ? 'latest' : ('tags/' + this.state.versionNameGH));
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const apiResponse = await fetch(query, requestOptions);
        if(apiResponse.status !== 200) {
            if(apiResponse.status === 403) {
                this.setState(
                    {
                        errorText : "Rate limit for requests to the github API has exceeded! Please try again in a few hours...",
                        loadingDataFromGit : false
                    }
                );
            } else {
                this.setState(
                    {
                        errorText: "An error occurred whilst requesting information from github! Please try again later!",
                        loadingDataFromGit : false
                    }
                );
            }
            return;
        }
        const jsonResponse = await apiResponse.json();

        if(this.state.versionNameGH === 'latest') {
            this.setState({releaseDownloadURI : 'https://www.curseforge.com/minecraft/mc-mods/cqrepoured/download'});
        }
        else {
            const releaseAssets = jsonResponse.assets;
            if(releaseAssets) {
                const releaseArtefact = releaseAssets[0];
                const releaseDownloadURI = releaseArtefact.browser_download_url;
                this.setState({releaseDownloadURI : releaseDownloadURI});
            }
        }
        this.setState(
            {
                loadingDataFromGit : false,
                releaseObject : jsonResponse
            }
        );
    }

    render() {
        var md = this.state.releaseObject.body;
        if (typeof md !== 'undefined') {

        } else {
            md = ''
        }

        //Init marked with extensions
        marked.use(
            {
                extensions: [
                    markedGHIssueLinkExtension
                ]
            }
        );

        const pageContent = this.state.loadingDataFromGit ? null : 
        <div className="page-content">
            {this.state.errorText !== "" ?
            <h3>{this.state.errorText}</h3>
            :
            <article>
                <div className="heading-box">
                    <div className="heading-title-box">
                        <span className="version-name-cl">
                        {this.state.releaseObject.name}
                        </span>
                        <span className="release-data">
                            {"Published on: " + new Date(this.state.releaseObject.published_at).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="heading-download-button">
                        <a href={this.state.releaseDownloadURI} target="blank">
                            <button className="btn-styled-cqr">
                                Download
                            </button>
                        </a>
                    </div>
                </div>
                <br></br>
                <hr className="line-solid"></hr>
                <div className="changelog-text-md">
                    {Parser(marked.parse(md))}
                </div>
            </article>
            }
            <hr className="line-solid"></hr>
        </div>;
        //TODO: Add in next/previous version entry here
        return (
            <div>
                <Banner displayText="Changelog"></Banner>
                {this.state.loadingDataFromGit ? <LoadingSymbol/> : pageContent}
            </div>
        );
    }
}