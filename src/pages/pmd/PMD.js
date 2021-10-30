import React, { Component } from "react";

import Banner from "../../components/banner/Banner";

import './pmd.css';

export default class PMD extends Component {
    render() {
        return (
            <div>
                <Banner displayText="Player Made Dungeons"></Banner>
                <div className="page-content">
                    <article>
                        <h1>There's nothing to see here...</h1>
                    </article>
                    <hr className="line-solid"></hr>
                    <article>
                        <span>
                            Sorry, this place is currently in development!
                        </span>
                        <br></br>
                        <br></br>
                        <span>It will be a platform where people can upload their dungeons and share them with others.</span>
                        <br></br>
                        <br></br>
                        <span>It will also be possible to rate dungeons and give comments on them.</span>
                        <br></br>
                        <br></br>
                        <span>However, it is in active development. For now please share your dungeons over the discord (to be linked)</span>
                    </article>
                    
                </div>
            </div>
        );
    }
}