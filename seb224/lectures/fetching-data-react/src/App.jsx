// src/App.jsx
import { PacmanLoader } from "react-spinners";
import { useState, useEffect } from "react";
import getWeather from "./services/weatherService";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("New York");

  // Going to run when the component loads
  useEffect(() => {
    const currentWeather = async () => {
      const localWeather = await getWeather(location);
      setWeather(localWeather);
    };
    currentWeather();
  }, []);

  const handleInput = async (e) => {
    e.preventDefault();
    setLocation(e.target.children[0].value);
    const newWeather = await getWeather(location);
    setWeather(newWeather);
  };

  return (
    <>
      <h1>Current Weather</h1>
      <form onSubmit={handleInput}>
        <input
          placeholder="Enter location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <h3>
        {weather.current ? (
          `${weather.location.name} - ${weather.current.temp_f}`
        ) : (
          <PacmanLoader color="#f9f5f5" />
        )}
        {weather.message ? weather.message : ""}
      </h3>
    </>
  );
};

export default App;
