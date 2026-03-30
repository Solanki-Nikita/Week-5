import React, { useState } from 'react'
import "./App.css";

/*
API Configuration
Stores API key and base URL
*/
const api = {
    key:"893bccc612f66fa50283e09c9656d0a3",
    base:"https://api.openweathermap.org/data/2.5/"
};

const Weather = () => {
    /*
    State Variables
    query   → stores user input (city name)
    weather → stores API response
    */
    const [query, setQuery] = useState('');
    const [weather,setWeather] = useState({});

    /*
    Search Function
    Triggered when user presses a key
    If Enter is pressed → fetch weather data
    */
    const search = evt => {
        if(evt.key == "Enter"){
            /*
            API call using fetch 
            query → city name entered by user
            units=metric → temperature in Celsius
            */
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                // Store API response in state
                 setWeather(result) 
                // Store API response in state
                 setQuery('');
                // Clear input field after search

                 console.log(result);
            })
          
        }
    }
    /*
    Date Builder Function
    Converts JS Date object into readable format
    Example: Wednesday, 18 March 2026
    */
const dateBuilder =(d) => {
  // Months (January → December)
let months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

// Days (Sunday → Saturday)
let days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let Year = d.getFullYear();
// Return formatted string
return`${day}${date}${month}${Year }`;

}

  return (
    <div>
      <main>
        <div className='search-box'>
            <input type='text'
            className='search-bar'
            placeholder='Search ......'
            value={query}
            onChange={e => setQuery(e.target.value)} // update input state
            onKeyPress={search} // trigger search on Enter    
            />  
        </div>
        {/* Conditional Rendering
            Show data ONLY when API response exists */}
        {(typeof weather.main != "undefined") ? (
        <div>
            <div className='location-box'>
                <div className='location'>
                     {weather.name},{weather.sys.country}
                </div>
                <div className='date' >
                    {dateBuilder(new Date())}
                </div>
                <div className='weather-box'>
                    <div className='temp'>
                        {Math.round(weather.main.temp)}°C
                    </div>
                    <div className='weather'>
                        {weather.weather[0].main}
                    </div>
                </div>
            </div>
        </div>
        )  : (' ')}   
        {/*    If no data → render nothing  */}
      </main>
    </div>
  )
}

export default Weather
