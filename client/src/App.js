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
  return (
    <div className="App">
      <h1 className="title">Pitstop</h1>
      <div className="raceContainer">
        {listOfRaces.map((race) => {
          return (
            <div className="raceItem">
              <p>Name: {race.track}</p>
              <p>Country: {race.country}</p>
              <p>Location: {race.location}</p>
              <p>Distance: {race.distance} km</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
