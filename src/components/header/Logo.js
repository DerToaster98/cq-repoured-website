import { Component } from "react";
import "./logo.css";
import logo from './logo.png'

export default class Logo extends Component {

    render() {
       return (
            <div class="logo-container">
                <a href="/home">
                    <img alt="CQR-Logo" src={logo} className="logo"></img>
                    <div className="logo-text">
                        <h1>CQR</h1>
                        <h2>Chocolate Quest Repoured</h2>
                    </div>
                </a>
            </div>
        );
    }

}