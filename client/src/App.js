import "./sass/index.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfRaces, setListOfRaces] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getRaceInfo").then((response) => {
      setListOfRaces(response.data);
    });
  }, []);
  //----- IMAGE MAP START -----
  var Bahrain = require("../src/images/Bahrain.png");
  var Jeddah = require("../src/images/Jeddah.png");
  var Melbourne = require("../src/images/Melbourne.png");
  var EmiliaRomagna = require("../src/images/EmiliaRomagna.png");
  var Miami = require("../src/images/Miami.png");
  var Barcelona = require("../src/images/Barcelona.png");
  var Monaco = require("../src/images/Monaco.png");
  var Baku = require("../src/images/Baku.png");
  var Canada = require("../src/images/Canadian.png");
  var Silverstone = require("../src/images/silverstone.png");
  var Austria = require("../src/images/Austria.png");
  var France = require("../src/images/France.png");
  var Hungaroring = require("../src/images/Hungaroring.png");
  var Belgium = require("../src/images/Belgium.png");
  var Zandvoort = require("../src/images/Zandvoort.png");
  var Monza = require("../src/images/Monza.png");
  var Singapore = require("../src/images/Singapore.png");
  var Japan = require("../src/images/Japan.png");
  var Texas = require("../src/images/Texas.png");
  var Mexico = require("../src/images/Mexico.png");
  var Brazil = require("../src/images/Brazil.png");
  var AbuDhabi = require("../src/images/AbuDhabi.png");

  var dictionary = {
    "Bahrain International Circuit": Bahrain,
    "Jeddah Corniche Circuit": Jeddah,
    "Melbourne Grand Prix Circuit": Melbourne,
    "Autodromo Enzo E Dino Ferrari": EmiliaRomagna,
    "Miami International Autodrome": Miami,
    "Circuit De Barcelona-Catalunya": Barcelona,
    "Circuit De Monaco": Monaco,
    "Baku City Circuit": Baku,
    "Circuit Gilles Villenueve": Canada,
    "Silverstone Circuit": Silverstone,
    "Red Bull Ring": Austria,
    "Circuit Paul Ricard": France,
    Hungaroring: Hungaroring,
    "Circuit De Spa-Francorchamps": Belgium,
    "Circuit Zandvoort": Zandvoort,
    "Autodromo Nazionale Monza": Monza,
    "Marina Bay Street Circuit": Singapore,
    "Suzuka International Racing Course": Japan,
    "Circuit Of The Americas": Texas,
    "Autódromo Hermanos Rodríguez": Mexico,
    "Autódromo José Carlos Pace": Brazil,
    "Yas Marina Circuit": AbuDhabi,
  };
  //----- IMAGE MAP END -----

  return (
    <div className="App">
      <h1 className="title">PITSTOP</h1>
      <div className="raceContainer">
        {listOfRaces.map((race) => {
          return (
            <div className="raceItem">
              <img
                className="trackMap"
                src={dictionary[race.track]}
                alt="track name"
              />
              <h2>{race.track}</h2>
              <div className="locationRow">
                <h3>{race.country}</h3>
                <p className="location">{race.location}</p>
              </div>
              <p>Length: {race.distance} km</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
