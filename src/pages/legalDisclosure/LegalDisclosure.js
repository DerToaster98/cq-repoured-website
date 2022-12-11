import React, { Component } from "react";

import Banner from "../../components/banner/Banner";

import './legalDisclosure.css';

export default class LegalDisclosure extends Component {

    render() {
        return (
            <div>
                <Banner displayText="Legal Disclosure"></Banner>
                <div className="page-content">
                    <article>
                        To be written...
                    </article>
                </div>
            </div>
        );
    }
}