import { Component } from "react";

import Banner from "../../components/banner/Banner";
import UserContainer from "./UserContainer";

import "./team.css";

const IMAGE_PATH_PREFIX = 'team/';

const DESCRIPTION_ARLO_THE_EPIC = <span>Arlo is our Project Leader and also America's future president. He is responsible for bringing the original mod's dungeons into the new version, as well as various odd jobs around the project.</span>
const DESCRIPTION_CHOCOLATIN = <span>Chocolatin is the former author of BetterDungeons/ChocolateQuest/CQC, he built the entire Chocolate Quest mod himself, and, outside of a small fraction of the textures and dungeon structures, single-handedly did every single thing in the mod's 1.7.10 version, as well as every older version. His current whereabouts are unknown.</span>
const DESCRIPTION_DERTOASTER = <span>DerToaster is one of our developers, you can even say he is the main developer. He is responsible for Bosses, dungeon generation and parts of the Mob AI, also he is responsible for solving a lot of bugs and creating some of the mob and armor models.</span>

const DESCRIPTION_KALGOGSMASH = <span>Kalgogsmash is another one of our developers. He created the randomized castle generator and items including the spears and hookshots. Kalgog did not play the original CQC, but he is a huge fantasy nerd so he is also working on the game lore and future content ideas.</span>
const DESCRIPTION_MELDEXUN = <span>Meldexun is a developer since Aug 2019. Since his first experience with CQC he loved the mod and also built some dungeons. When he discovered CQR he wanted to be a part of it to bring back the mod in it’s old glory. He started working on mobs and their AI and continued with working on the dungeon system, various items and other stuff.</span>
const DESCRIPTION_TIVIACZ1337 = <span>Tiviacz1337 is one of the earliest developers working on the mod. He coded most of the weapons and armor items along with blocks. That includes bonus abilities for full armor sets and special actions of swords and guns.</span>
const DESCRIPTION_XYRON = <span>Xyron was a Frontend developer and UI engineer working on the looks and feels of the dungeon share project in collaboration with Der Toaster.</span>

const DESCRIPTION_PION_STEAM = <span>Pion Steam started playing Minecraft at the start of the BETA days. \n'I remember a time before rain existed ...' \nA few years later after getting familiar with the game, he got into modding Minecraft and discovered the classic 'Better Dungeons' mod as it was previously named. \n'This mod has always been in the back of my mind when it came to making any modded session of Minecraft.' \n'Back in those days I would always include it in a mod-pack if there was a stable version available.' \nSometime in 2020, he immediately joined the Chocolate Quest Repoured discord after discovering the mod was alive once again. \n'It brought a smile to my face to see the mod was back with a new home and active community.' \n'I did not get directly involved until I 'chilled' in the community for some amount of time before asking if they needed help in any area of the mod that was lacking.  Simply put, they needed sounds for things.' \nHe is currently the sound designer for the new sounds CQR has to offer. \n(Also dubbed the 'Noise Maker,' for noise he does make.) \n\nIf he were to describe himself in a way that does not give too much away ... \n'I am a caring, curious, cautious, human being.' \n'Technical to the limits of my own knowledge.' \n'Enjoys learning about things in all the scientific fields.' \n'Laughs at a lot of things.' \n'Likes cheese ... and chocolate.'</span>
const DESCRIPTION_SILENTINE = <span>Makes low poly, pixel art models and textures. Worked mainly on remaking the item models/textures and mob textures of the mod. He also made a mod called Grimoire of Gaia.</span>
const DESCRIPTION_SIR_SQUIDLY = <span>Sir Squidly is one of the earliest artists to join the team, creating pixel art textures and models. Primarily did most of the Block textures, some entity models and textures, and various misc graphics. Is also a modder of various other video games.</span>

const DESCRIPTION_SCOOPTWOO = <span>Scooptwoo was a moderator on our discord and helped out answering questions.</span>
const DESCRIPTION_TURBULATION = <span>Turbulation is a person that has collected information about old chocolate quest versions and has set up an archive for those.</span>

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
                    <h1 className="heading">Leadership</h1>    
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
                    <h1 className="heading">Developers</h1>    
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
                    <h1 className="heading">Artists</h1>    
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
                    <h1 className="heading">Notable helping hands</h1>    
                    <div className="member-section">
                        <div className="member-card">
                            <UserContainer username='Scooptwoo' imageSrc={IMAGE_PATH_PREFIX + "scooptwoo.png"} userinfo={DESCRIPTION_SCOOPTWOO} userlinks={null}></UserContainer>
                        </div>
                        <div className="member-card">
                            <UserContainer username='Turbulation' imageSrc={IMAGE_PATH_PREFIX + "turbulation.png"} userinfo={DESCRIPTION_TURBULATION} userlinks={null}></UserContainer>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}