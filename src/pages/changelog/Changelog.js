import { Component } from "react";

import Banner from "../../components/banner/Banner";

import './changelog.css';

import { CQR_GITHUB_REPOSITORY_URL } from "../../Constants";

export default class Changelog extends Component {
    render() {
        return (
            <div>
                <Banner displayText="Changelog"></Banner>
                <div className="page-content">
                    <article>
                        <span>
                            TBD
                        </span>
                        <br></br>
                    </article>
                    <hr className="line-solid"></hr>
                </div>
            </div>
        );
    }
}