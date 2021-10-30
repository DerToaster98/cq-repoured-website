import React, { Component } from "react";

import Banner from "../../components/banner/Banner";
import LoadingSymbol from "../../components/loadingSymbol/LoadingSymbol";

import './changelog.css';

import { CQR_GITHUB_REPOSITORY_URL, GITHUB_API_URL_CQR } from "../../Constants";

export default class Changelog extends Component {

    constructor(props) {
        super(props);

        let version = "latest";

        try {
            version = this.props.match.params.changelogID;
        } catch(e) {
            //Ignore
            version = "latest";
        }
        if(version === '' ) {
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

        if(this.state.versionNameGH = 'latest') {
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
        const pageContent = 
        <div className="page-content">
            <article>
                <span>
                    TBD (Version: {this.state.versionNameGH})
                </span>
                <br></br>
                <div className="changelog-text-md">
                    {
                    //TODO: Find something that can render github-flavored markdown, then render the body of the json object here
                    }
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