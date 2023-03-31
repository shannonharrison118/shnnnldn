import '../../App.css';
import './gelee.css';
import {Link} from 'react-router-dom';
import {Navbar} from '../../components/Navbar.js';
import {Footer} from '../../components/Navbar.js';


function GeleeMagazine() {
    return (
        <div className="GeleeMagazine">
            <Navbar />     
            <div id="intro">
                <p>During my time at Gelee Magazine, I served as: </p>
                <li>Styling Director</li>
                <li>Co Artistic Designer</li>
                <li>Web Designer</li>
                <li>Layout Designer</li>
            </div>
            <Footer />
        </div>
    )
}

export default GeleeMagazine;