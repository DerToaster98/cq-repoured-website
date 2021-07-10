import { Component } from "react";

import Banner from "../../components/banner/Banner";

import "./team.css";

export default class Team extends Component {
    render() {
        return (
            <div>
                <Banner displayText="The Team"></Banner>
                <div className="page-content">
                    <article>
                        <span>
                            Welcome to our team page! Here you can see who works on cq-repoured and who is responsible for what.
                        </span>
                        <br></br>
                    </article>
                    <hr className="line-solid"></hr>
                </div>
            </div>
        );
    }
}