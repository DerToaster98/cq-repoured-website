import React, { Component } from "react";

import Banner from "../../components/banner/Banner";
import LoadingSymbol from "../../components/loadingSymbol/LoadingSymbol";

import './changelog.css';

import { CQR_GITHUB_REPOSITORY_URL, GITHUB_API_URL_CQR, markedGHIssueLinkExtension } from "../../Constants";

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
            <article>
                <span className="version-name-cl">
                    {this.state.releaseObject.name}
                </span>
                <br></br>
                <hr className="line-solid"></hr>
                <div className="changelog-text-md">
                    {Parser(marked.parse(md))}
                </div>
            </article>
            <hr className="line-solid"></hr>
        </div>;

        return (
            <div>
                <Banner displayText="Changelog"></Banner>
                {this.state.loadingDataFromGit ? <LoadingSymbol/> : pageContent}
            </div>
        );
    }
}