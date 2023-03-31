import './App.css';
import back from './pictures/back.png'
import { Link } from 'react-router-dom';
import {Footer} from './components/Navbar.js';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", height: '100vh'}}>
      <div id="head">
        <pre>
        <h2>welcome :) </h2>
        <p>this is a culmination of my technical and creative works.</p></pre>
      </div>
      <div id="links">
          <Link id="navlink" to="/about">about me</Link>
          <Link id="navlink" to="/technical">technical work</Link>
          {/* <Link id="navlink" to="/">creative work</Link> */}
          <Link id="navlink" to="/creative">creative work</Link>
      </div>
      <div id="ascii">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <pre>        .-~~-.--.</pre>
        <pre>       :         {')'}</pre>
        <pre> .~ ~ -.\       /.- ~~ .</pre>
        <pre> {'>'}       `.   .'       {'<'}</pre>
        <pre>(         .- -.         )</pre>
        <pre> `- -.-~  `- -'  ~-.- -'</pre>
        <pre>   (        :        )           _ _ .-:</pre>
        <pre>    ~--.    :    .--~        .-~  .-~  {'}'} </pre>
        <pre>        ~-.-^-.-~ \_      .~  .-~   .~</pre>
        <pre>                 \ \'     \ '_ _ -~</pre>
        <pre>                  `.`.    //</pre>
        <pre>         . - ~ ~-.__`.`-.//</pre>
        <pre>     .-~   . - ~  {'}'}~ ~ ~-.~-.</pre>
        <pre>   .' .-~      .-~       :/~-.~-./:</pre>
        <pre>  /_~_ _ . - ~                 ~-.~-._</pre>
        <pre>                                   ~-.{'<'}</pre>
      </div>
      <Footer id="foot"/>
    </div>
  );
}

export default App;
