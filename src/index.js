//Imports shown for App within index.js. The ReactDOM import would not appear
//if the App is in a separate file such as App.js
import React from "react";
import ReactDOM from "react-dom";
import Headline from "./components/headline";
import {useWeather} from "./api"; // import from the local file

import "./styles.css";

function App() {
    const { loading, headlines, error } = useWeather();
    if (loading) {
        return <p>Loading...</p>;   
    }   
    
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    return (
        <div className="App">
        <h1>Brisbane Weather Forecast Today</h1>
        {headlines.map((headline) => (
        <Headline
            key={headline.time}
            time={headline.time}
            text={headline.text}
            temp={headline.temp}
            wind={headline.wind}
        />
        ))}
        </div>
    );
}


// React DOM mounting code below
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
