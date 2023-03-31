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
                <div id="geleemag"><button><Link id="geleelink" to="/creative/gelee">gelée magazine</Link></button></div>
                <div id="sewing"><button><Link id="sewinglink" to="/sewing">sewing and fashion design</Link></button></div>
                <div id="knit"><button><Link id="knitlink" to="/knit">crochet and knit works</Link></button></div>
            </div>
            <Footer />
        </div>
    )
}

export default Passions;