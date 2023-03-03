import '../App.css';
import './tech.css';
import '../components/Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Navbar.js';
import invite from '../pictures/invite.png';
import gelee from '../pictures/gelee-home.png';
import geleeblog from '../pictures/gelee-blog.png';
import geleeshop from '../pictures/gelee-shop.png';
import museumhome from '../pictures/museum-home.png';
import museumpage from '../pictures/museum-page.png';
import port from '../pictures/port.png';
import quiz from '../pictures/quiz.png';
import spread from '../pictures/spread.png';
import drum from '../pictures/drum.png';
import calc from '../pictures/calc.png';
import pomodoro from '../pictures/pomodoro.png';
import code from '../pictures/code.png';
import tree from '../pictures/tree.png';
import sound from '../pictures/soundgeeks.png';
import banner from '../pictures/long-banner.png';



function Tech() {
    return(
        <div className = "Tech">
            <div id="hug">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div id="row">
                <div id="column">
                    <div id="text">
                        <div id="curr">
                        <h2>current projects</h2>
                        <p>Research into human-computer interation studying use cases of drones by creating simulations
                            to conduct interaction and find ways of making drones more approachable for humans.</p>
                        <small>Technologies include:
                            <li>Unreal Engine</li>
                            <li>AirSim Library</li>
                            <li>written in C++</li>
                        </small>
                        </div>
                    </div>
                </div>
                <div id="column">
                    <div id="text">
                        <div id="curr2">
                            <p>Database project focused on SQL development analyzing NYC traffic patterns in relation to
                                economic factors such as gas prices or social factors such as COVID_19.</p>
                            <small>Technologies include:
                                <li>SQL Developer</li>
                                <li>React</li>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div id="row">
                    <img src={banner} width="34%" alt=""></img>
                    <img src={banner} width="33%" alt=""></img>
                    <img src={banner} width="33%" alt=""></img>
            </div>
            <br></br>
            <br></br>
            <div id="row" >
                <div id="column">
                    <div id="text">
                        <h1>shnnn's fashion museum ✽˳⁺⁎˚</h1>
                        <p><i>independently created a React App to act as a virtual fashion museum as I self-learn frontend development.</i></p>
                        <small>version 1.0.0</small>
                        <br></br>
                        <small>continuously working to integrate new ideas and interactivity.</small>
                        <img id="mone" src={museumhome} width="200px" alt=""></img>
                        <img id="mtwo" src={museumpage} width="200px" alt=""></img>
                    </div>
                </div>
                <div id="column">
                    <Link to="https://kaput-waves.surge.sh" target="_blank"><img id="invite" src={invite} width="550px" alt=""></img></Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <div id="row">
                <div id="column">
                    <Link to="https://geleeworld.com" target="_blank"><img id="gelee" src={gelee} width="450px" alt=""></img></Link>
                </div>
                <div id="column">
                    <div id="text">
                        <div id="jelly">
                            <Link to="https://geleeworld.com" target="_blank"><h1>˚⁎⁺˳✽ geleeworld.com</h1></Link>
                            <p><i>Web Design work done for Gelée Magazine.</i></p>
                            <img id="gone" src={geleeblog} width="230px" alt=""></img>
                            <img id="gtwo" src={geleeshop} width="230px" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div id="row">
                    <img src={banner} width="34%" alt=""></img>
                    <img src={banner} width="33%" alt=""></img>
                    <img src={banner} width="33%" alt=""></img>
            </div>
            <br></br>
            <br></br>
            <div id="row">
                <div id="column">
                    <div id="text" >
                        <div id="cert">
                            <Link to="https://www.freecodecamp.org/certification/shnnnharrison/front-end-development-libraries" target="_blank"><h1>front end development</h1></Link>
                            <p><i>certificate completed as a way to self teach front end development. </i></p>
                            <div id="front">
                                <img id="front" src={port} width="230px" height="150px" alt=""></img>
                                <img id="front" src={quiz} width="230px" height="150px" alt=""></img>
                                <img id="front" src={spread} width="230px" height="150px" alt=""></img>
                            </div></div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div id="row">
                <div id="column">
                    <div id="text" >
                        <div id="cert">
                            <Link to="https://www.freecodecamp.org/certification/shnnnharrison/responsive-web-design" target="_blank"><h1>reactive web design</h1></Link>
                            <p><i>certificate completed as a way to learn HTML and CSS. </i></p>
                            <div id="front">
                                <img id="front" src={drum} width="230px" height="150px" alt=""></img>
                                <img id="front" src={calc} width="230px" height="150px" alt=""></img>
                                <img id="front" src={pomodoro} width="230px" height="150px" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div id="row">
                <div id="column">
                    <div id="text" >
                        <div id="cert">
                            <h1>past classwork</h1>
                            <p><i>various coding challanges and class projects completed within my studies.</i></p>
                            <div id="front">
                                <img id="front" src={code} width="230px" height="150px" alt=""></img>
                                <img id="front" src={tree} width="230px" height="150px" alt=""></img>
                                <img id="front" src={sound} width="230px" height="150px" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
};

export default Tech;