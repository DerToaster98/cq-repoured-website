import { Component } from "react";
import { Link } from 'react-router-dom'
import "./logo.css";
import logo from './logo.png'

export default class Logo extends Component {

    render() {
       return (
            <div class="logo-container">
                <Link href="/">
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