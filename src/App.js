import './App.css';
import { Link } from 'react-router-dom';
import {Footer} from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <div id="head">
        <pre>
        <h1>welcome :) </h1>
        <p>this is a culmination of my technical and creative works.</p></pre>
      </div>
      <div id="links">
          <Link id="navlink" to="/about">about me</Link>
          <Link id="navlink" to="/">technical work</Link>
          <Link id="navlink" to="/">creative work</Link>
          <Link id="navlink" to="/">passions</Link>
      </div>
      <div id="ascii">
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
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default App;
