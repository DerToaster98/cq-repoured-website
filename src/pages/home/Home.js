import './home.css'

import { Component } from 'react'
import Banner from '../../components/banner/Banner';

/* Slideshow stuff */
import 'react-slideshow-image/dist/styles.css'
import { createSlideShowObject } from './Slideshows';

import { SLIDES_CASTLES } from './Slideshows';
import { SLIDES_CASTLES_SNOW } from './Slideshows';
import { SLIDES_VOLCANO } from './Slideshows';
import { SLIDES_STRONGHOLDS } from './Slideshows';
import { SLIDES_OUTPOSTS } from './Slideshows';
import { SLIDES_TAVERNS } from './Slideshows';
import { SLIDES_NETHER } from './Slideshows';
import { SLIDES_SHIPS } from './Slideshows';
import { SLIDES_CAVES } from './Slideshows';
import { SLIDES_WALL } from './Slideshows';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner displayText="Welcome"></Banner>
                <div className="page-content">
                    <article>
                        <span>
                            Chocolate Quest Repoured is the reawakening of the famous BetterDungeons / ChocolateQuest Mod made by Chocolatin!
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            To accomplish this task we had to start from the ground up meaning that this is a completely different mod, however it still is heavily inspired by it.
                        </span>
                        <br></br>
                        <span>
                            We hope to give you an awesome experience with this, which is a passion project made possible by a few individuals that spend their free time on this.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                            Below we gave an overview over all the different kinds of dungeons in the main mod you can discover. This however doesn’t cover all of them.
                        </span>
                    </article>
                    <hr className="line-solid"></hr>

                    <div className="section-item">
                        <header>
                        Mighty fortresses
                        </header>
                        <div className="slideshow-with-description">
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_CASTLES)}
                            </div>
                            <div>
                                <article className="slideshow-with-description-right">
                                    <section>
                                    Long ago, the races built large castle like settlements to live there and to defend themselves from the dangers the overworld held for them.
                                    </section>
                                    <br></br>
                                    <section>
                                    Those strongholds are scattered over the grassy plains and hold quite the reward in them.
                                    </section>
                                </article>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <div className="section-item">
                        <header>
                        Volcanoes
                        </header>
                        <div className="slideshow-with-description">
                            <article className="slideshow-with-description-left">     
                                <section>
                                Being gigantic geological structures, full of resources and wealth, they were the best home a dwarf could ever wish for. However, long ago, the dwarven empires were overrun by creatures called Gremlins.
                                </section>
                                <br></br>
                                <section>
                                Conquer the volcano, invade the stronghold located inside it and mine all that ore!
                                </section>
                            </article>
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_VOLCANO)}
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <div className="section-item">
                        <header>
                        Plains of frost and snow
                        </header>
                        <div className="slideshow-with-description">
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_CASTLES_SNOW)}
                            </div>
                            <article className="slideshow-with-description-right">                               
                                <section>
                                Banished from their home dimension and despised by all the other races and tribes, the walkers had nowhere to go but the icy, cold, uninhabitable plains they call their territory now.
                                </section>
                                <br></br>
                                <section>
                                They live in gigantic fortresses constructed by them eons ago during a long forgotten age.
                                </section>
                            </article>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        Strongholds
                        </header>
                        <div className="slideshow-with-description">
                            <article className="slideshow-with-description-left">
                                <section>
                                Built by various groups of different races, the hot deserts and icy plains are civilized by rare large underground strongholds.
                                </section>
                                <br></br>
                                <section>
                                They seem small measured by the size of their entrances. But beware! Underground lies a large complex of multiple rooms full of treasure and enemies!
                                </section>
                            </article>
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_STRONGHOLDS)}
                            </div>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        Outposts
                        </header>
                        <div className="slideshow-with-description">
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_OUTPOSTS)}
                            </div>
                            <article className="slideshow-with-description-right">                               
                                <section>
                                There are many different races living in the known world. Some of them explore the world like you.
                                </section>
                                <br></br>
                                <section>
                                From time to time you can come across a small outpost housing different races from different factions.
                                </section>
                            </article>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        The depths of the nether
                        </header>
                        <div className="slideshow-with-description">
                            <article className="slideshow-with-description-left">                                
                                <section>
                                Hidden in the hot depths of the nether’s lava oceans lie the settlements of the boarmen and the minotaurs.
                                </section>
                                <br></br>
                                <section>
                                The boarmen build large grid shaped cities that seem to swim in the lava oceans. The minotaurs however managed to find a way to construct large platforms, hanging from massive chains, to build their houses own.
                                </section>
                            </article>
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_NETHER)}
                            </div>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        Pirates!
                        </header>
                        <div className="slideshow-with-description">
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_SHIPS)}
                            </div>
                            <article className="slideshow-with-description-right">                                
                                <section>
                                While most races built mighty fortresses or, like the dwarves, dug out great underground bastions, the pirates decided to not do so. Instead they travel the seas and skies to search for potential victims to raid.
                                </section>
                                <br></br>
                                <section>
                                There however is the legend of the pirate’s base, being a small island housing their leader and their treasures.    
                                </section>
                                <br></br>
                                <section>
                                Some even claim to have seen pirates abducting whole ships with one of their mighty airships.
                                </section>
                            </article>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        Overgrown caves
                        </header>
                        <div className="slideshow-with-description">
                            <article className="slideshow-with-description-left">                                
                                <section>
                                Deep in the jungles and swamps underneath the surface lie large caves. These caves pose a great habitat for gigantic mushrooms and are a suitable home for gremlins and spiders.
                                </section>
                                <br></br>
                                <section>
                                Some even say that in rare cases, these cave’s main chamber breaches through the surface.
                                </section>
                            </article>
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_CAVES)}
                            </div>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <header>
                        Mysteries of the known world
                        </header>
                        <div className="slideshow-with-description">
                            <div className="slideshow-container">
                                {createSlideShowObject(SLIDES_WALL)}
                            </div>
                            <article className="slideshow-with-description-right">                                
                                <section>
                                Far in the north of the known world lies a large wall. Adventurers, brave enough to travel there, report it is guarded by ghostly warriors wearing black.
                                </section>
                                <br></br>
                                <section>
                                They dedicated their lives to guard that wall. They have forgotten since when they guard. They’ve forgotten for who they guard. And they have forgotten why they guard it. It is the task of the brave adventurers to find out.
                                </section>
                            </article>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="section-item">
                        <hr className="line-solid"></hr>
                        <article className="slideshow-with-description-left">
                            <span>
                            Now that you know about the dangers awaiting you, are you brave enough to get your best available gear and fight for your death for the sake of treasure and honor?
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                            Small notice: the worldgen in the screenshots is not representative of the end product, you can reproduce them with CQR and biome bundle.
                            </span>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

}