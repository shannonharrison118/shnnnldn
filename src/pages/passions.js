import '../App.css';
import './passions.css';
import {Link} from 'react-router-dom';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Navbar.js';


function Passions() {
    return (
        <div className="Passion">
            <Navbar />     
            <div id="plinks">
                <div id="styling"><button><Link id="stylingpage" to="/styling">styling works</Link></button></div>
                <div id="graphic"><button><Link id="graphiclink" to="/graphic">graphic design</Link></button></div>
                <div id="sewing"><button><Link id="sewinglink" to="/sewing">sewing and fashion design</Link></button></div>
                <div id="knit"><button><Link id="knitlink" to="/knit">crochet and knit works</Link></button></div>
            </div>
            <Footer />
        </div>
    )
}

export default Passions;