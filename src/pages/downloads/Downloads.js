import { Component } from "react";

import Banner from "../../components/banner/Banner";

import './downloads.css';

import { CQR_GITHUB_REPOSITORY_URL } from "../../Constants";

export default class Downloads extends Component {
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
                </div>
            </div>
        );
    }
}