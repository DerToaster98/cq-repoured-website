import React, { Component } from "react";

import background from "../../assets/img/background.jpg";

import "./banner.css";

export default class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayText: this.props.displayText
        }
    }

    render() {
        return(
            <div className="banner-container" style={{backgroundImage: `url(${background})`}}>
                <div className="banner-text">
                    <span>{this.state.displayText}</span>
                </div>
            </div>
        );
    }
}