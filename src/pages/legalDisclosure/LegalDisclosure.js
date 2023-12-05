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
                        <h2>Information in accordance with section 5 TMG</h2>
                        <p>Oliver Seiler<br />
                        [REDACTED FOR PRIVACY]<br />
                        [REDACTED FOR PRIVACY]<br />
                        Germany
                        </p>

                        <h2>Contact</h2>
                        <p>E-Mail: dertoaster@cq-repoured.net</p>

                        <h2>Disclaimer</h2>
                        <h3>Accountability for content</h3>                        
                        <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of thirdparties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
                        <h3>Accountability for links</h3>
                        <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
                        <h3>Copyright</h3>
                        <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for privateuse, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).</p>

                        <br/>
                        <p>Source: <a href="http://www.twigg.de/haftungsausschlussimpressumenglisch.htm">twigg.de</a></p>
                    </article>
                </div>
            </div>
        );
    }
}