import React from "react";
import '../Styles/Ciudad.css';
import { Link } from 'react-router-dom';
import Welcome from '../img/babyYodaWelcome.gif';

export default function Ciudad({city}) {
    console.log(city)
    if({city}){
    return (
        <div className="ciudad" style={{backgroundImage:`url(https://source.unsplash.com/random/1500x900/?${city.name})`}}>
            <div className="container">
                <h1>{city.name.toUpperCase()}</h1>
                <div className="info">
                    <div>Temperature: {city.temp} ºC</div>
                    <div className="div-altern">Weather: {city.weather}</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div className="div-altern">Clouds: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div className="div-altern">Longitud: {city.longitud}º</div>
                    <div className="back-div">
                        <Link style={{textDecoration:"none"}} to='/cities'>
                            <button className="button-detail">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="img-detail" style={{backgroundImage:`url(https://source.unsplash.com/random/500x300/?${city.name})`}}></div>
            <img className="img-weather" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="500" height="500" alt="" />
            <img className="img-welcome-gif" id="welcome" src={Welcome} width="50" height="30" alt=""/> 
        </div>
    )} else {
        return alert('Esta ciudad no se encuentra en la lista');
    }
}