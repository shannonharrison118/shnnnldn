import './App.css';
import {Navbar} from './components/Navbar.js';
import {Footer} from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about">
        <h1>hi :) im shannon harrison / shnnnldn</h1>
        <p>shannon harrison is my full name and the name i go by mostly. under this name, i study at the University of Florida
          studying Computer Science with an interest in web design, frontend development, and ux/ui. i want to further explore
          how the internet can be used to create art and meaningful experiences online via websites. 
        </p>
        <p>i also go by shnnn (read shannon) in online spaces. online is where i feel my knowledge in fashion, design, art,
          and all things creative get to live. shnnn acts slightly as a persona to differentiate the interests and person i 
          show online vs. shannon who lives everyday life.
        </p>
        </div>
        <div id="small">
        <p><small>i share a birthday with my melody (jan. 18th, capricorn), i love sweets, and im obsessed with every cat i see.
        fka twigs is also my favorite musical artist and we have the same astrological sun, moon, and venus.
        i spend a lot of time on twitter but i should spend that time reading or watching movies. most of my free time though
        is spent learning about fashion and discovering new designers and scouring the internet for good deals on vintage designer.</small></p>
        <p><small>as of right now, i hardly have any free time while i finish up my studies and learn about operating systems
          , databases, and work in a senior group project focused on drone-human interaction.</small></p>
          <br></br>
          <br></br>
      </div>
      <div id="ascii">
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
