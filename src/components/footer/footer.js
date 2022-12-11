import React from 'react';
import { Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="footer-navbar">
                    <ul className="list-ul">
                        <a className="navigation-item-f" target="_blank" rel="noreferrer" href="https://www.curseforge.com/minecraft/mc-mods/cqrepoured">
                            <div>Curseforge</div>
                        </a>
                        <a className="navigation-item-f" target="_blank" rel="noreferrer" href="https://discordapp.com/invite/StWzzFw">
                            <div>Discord</div>
                        </a>
                        <a className="navigation-item-f" target="_blank" rel="noreferrer" href="https://github.com/TeamChocoQuest/ChocolateQuestRepoured">
                            <div>GitHub</div>
                        </a>
                        <Link className="navigation-item-f" to="/legal-disclosure/">
                            <div>Legal Disclosure</div>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Footer;



