import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./logo.css";
import logo from './logo.png'

export default class Logo extends Component {

    render() {
       return (
            <div className="logo-container">
                <Link to="/">
                    <img alt="CQR-Logo" src={logo} className="logo"></img>
                    <div className="logo-text">
                        <h1>CQR</h1>
                        <h2>Chocolate Quest Repoured</h2>
                    </div>
                </Link>
            </div>
        );
    }
}