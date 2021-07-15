import { Component } from "react";

import Banner from "../../components/banner/Banner";
import UserContainer from "./UserContainer";

import "./team.css";

const IMAGE_PATH_PREFIX = 'team/';

const DESCRIPTION_ARLO_THE_EPIC = "";
const DESCRIPTION_CHOCOLATIN = "Chocolatin is the former author of BetterDungeons/ChocolateQuest/CQC, he built the entire Chocolate Quest mod himself, and, outside of a small fraction of the textures and dungeon structures, single-handedly did every single thing in the mod's 1.7.10 version, as well as every older version. His current whereabouts are unknown";
const DESCRIPTION_DERTOASTER = "";

const DESCRIPTION_KALGOGSMASH = ""
const DESCRIPTION_MELDEXUN = ""
const DESCRIPTION_TIVIACZ1337 = ""
const DESCRIPTION_XYRON = ""

const DESCRIPTION_PION_STEAM = ""
const DESCRIPTION_SILENTINE = ""
const DESCRIPTION_SIR_SQUIDLY = ""

const DESCRIPTION_SCOOPTWOO = ""
const DESCRIPTION_TURBULATION = ""

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
                <div className="page-content">
                    <h1>Leadership</h1>    
                    <div className="member-section">
                        <div className="member-card">
                            <UserContainer username='Chocolatin' imageSrc={IMAGE_PATH_PREFIX + "chocolatin.png"} userinfo={DESCRIPTION_CHOCOLATIN} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='ArloTheEpic' imageSrc={IMAGE_PATH_PREFIX + "arlo_the_epic.png"} userinfo={DESCRIPTION_ARLO_THE_EPIC} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='DerToaster' imageSrc={IMAGE_PATH_PREFIX + "dertoaster.png"} userinfo={DESCRIPTION_DERTOASTER} userlinks={null}></UserContainer>
                        </div>
                    </div>
                    <h1>Developers</h1>    
                    <div className="member-section">
                        <div className="member-card">
                            <UserContainer username='KalgogSmash' imageSrc={IMAGE_PATH_PREFIX + "kalgog_smash.png"} userinfo={DESCRIPTION_KALGOGSMASH} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Meldexun' imageSrc={IMAGE_PATH_PREFIX + "meldexun.png"} userinfo={DESCRIPTION_MELDEXUN} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Tiviacz1337' imageSrc={IMAGE_PATH_PREFIX + "tiviacz1337.png"} userinfo={DESCRIPTION_TIVIACZ1337} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Xyron' imageSrc={IMAGE_PATH_PREFIX + "xyron.png"} userinfo={DESCRIPTION_XYRON} userlinks={null}></UserContainer>
                        </div>
                    </div>
                    <h1>Artists</h1>    
                    <div className="member-section">
                        <div className="member-card">
                            <UserContainer username='Pion Steam' imageSrc={IMAGE_PATH_PREFIX + "pion_steam.png"} userinfo={DESCRIPTION_PION_STEAM} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Silentine' imageSrc={IMAGE_PATH_PREFIX + "silentine.png"} userinfo={DESCRIPTION_SILENTINE} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Sir Squidly' imageSrc={IMAGE_PATH_PREFIX + "sir_squidly.png"} userinfo={DESCRIPTION_SIR_SQUIDLY} userlinks={null}></UserContainer>
                        </div>
                    </div>
                    <h1>Notable helping hands</h1>    
                    <div className="member-section">
                        <div className="member-card">
                            <UserContainer username='Scooptwoo' imageSrc={null} userinfo={DESCRIPTION_SCOOPTWOO} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Turbulation' imageSrc={null} userinfo={DESCRIPTION_TURBULATION} userlinks={null}></UserContainer>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}