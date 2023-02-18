import '../App.css';
import './about.css';
import Spotify from 'react-spotify-embed';
import { Link } from 'react-router-dom';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Navbar.js';
import me from '../pictures/me.png';

function About() {
    return (
        <div className="App">
            <Navbar />
            <div id="about">
                <div id="aboutcontent">
                    <div id="column">
                        <div id="writing">
                        <h1>hi :) im shannon harrison / shnnnldn</h1>
                        <h3>i am a frontend developer and web designer based in New York City</h3>
                        <br></br>
                        <p>I am currently a student at the Univeristy of Florida, completing a Bachelor of Science in Computer
                            Science and graduating in May 2023. I am passionate about creating meaningful experiences online via websites
                            along with creating art in the form of websites. This has driven me to self-learn frontend development
                            alongside my studies.
                        </p>
                        <br></br>
                        <p>I also go by shnnn (read shannon) in online spaces, where i feel my knowledge in fashion, design, art,
                            and all things creative get to live. shnnn acts as a persona to differentiate the interests and person i
                            show online vs. shannon who lives everyday life. Growing up in many online spaces has allowed me to feel
                            more comfortable in exploring my creativity and the web has always felt like a different world than reality.
                            Existing online in a more creative version of myself is what inspired me to learn more about computer science
                            and how to create similar enjoyable experiences on the web.
                        </p>
                        <br></br>
                        <div id="small">
                            <p><small>i share a birthday with my melody (jan. 18th, capricorn), i love sweets, and im obsessed with every cat i see.
                                fka twigs is also my favorite musical artist and we have the same astrological sun, moon, and venus.
                                im trying to spend more of my time reading and watching movies. most of my free time though
                                is spent learning about fashion and discovering new designers.</small></p>
                            <p><small>as of right now, i hardly have any free time while i finish up my studies and learn about operating systems
                                , databases, and work in a senior group project focused on drone-human interaction.</small></p>
                            <br></br>
                            <br></br>
                        </div>
                        </div>
                    </div>
                    <div id="column">
                        <div id="me">
                            
                            <img src={me} width={350}></img>
                            <small>this is what i look like most of the time</small>
                            <br></br>
                            <p>currently listening to: </p>
                            <Spotify link = "https://open.spotify.com/playlist/6cTd8aiDx5YxlC9IDhraQh?si=36211e1abde544e4" />
                        </div>
                    </div>
                </div>

                <div id="socials">
                    <div id="sociallinks">
                        <h3>me online:</h3>
                        <div id="online">
                            <button><Link to="https://docs.google.com/document/d/1fpmLj0OJv-sf2c-js1Np2sD-RZm4o6bVpr-GZG7KN4U/edit?usp=sharing" target="_blank">Resume</Link></button>
                            <button><Link to="https://github.com/shannonharrison118" target="_blank">GitHub</Link></button>
                        </div>
                        <h3>connect or talk w me :)</h3>
                        <div id="online">
                            <button><Link to="https://www.linkedin.com/in/shannon-harrison-/" target="_blank">LinkedIn</Link></button>
                            <button><div id="link" onClick={(e) => { window.location.href = 'mailto:example@email.com'; }}>email me</div></button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default About;