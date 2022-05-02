import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="footer-navbar">
                    <ul className="list-ul">
                        <a class="content" href="https://www.curseforge.com/minecraft/mc-mods/cqrepoured">
                            <span class="navigation-item-f">Curseforge</span>
                        </a>
                        <a class="content" href="https://discordapp.com/invite/StWzzFw">
                            <span class="navigation-item-f">Discord</span>
                        </a>
                        <a class="content" href="https://github.com/TeamChocoQuest/ChocolateQuestRepoured">
                            <span class="navigation-item-f">GitHub</span>
                        </a>
                        <a class="content" href="https://cq-repoured.net/legal-disclosure/">
                            <span class="navigation-item-f">Legal Disclosure</span>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Footer;



