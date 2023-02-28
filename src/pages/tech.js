import '../App.css';
import './tech.css';
import invite from '../pictures/invite.png';



function Tech() {
    return(
        <div className = "Tech">
            <div id="museum" class="section">
                <div id="column">
                    <div id="text">
                        <h1>shnnn's fashion museum</h1>
                        <p>independently created a React App to act as a virtual fashion museum as I self-learn frontend development.</p>
                        <small>version 1.0.0</small>
                        <br></br>
                        <small>continuously working to integrate new ideas and interactivity.</small>
                    </div>
                </div>
                <div id="column">
                    <img src={invite} width="600px"></img>
                </div>
            </div>
        </div>
    );
};

export default Tech;