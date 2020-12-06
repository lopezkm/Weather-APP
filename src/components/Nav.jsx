import React from 'react';
import Sun from '../img/sunny.jpg';
import Rain from '../img/rainning.jpg';
import Wind from '../img/wind.jpg';
import Snow from '../img/Snowing.jpg';
import Cloud from '../img/cloudy.jpg';
import Arrow from '../img/arrow.gif';
import Weather from '../img/weatherGif.webp';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark p-0 nav-container">
        <Link style={{textDecoration:'none', color:'white'}} to='/'>
          <span className="ml-5 p-0">
            <img className="img-gif" id="Sun" src={Weather} width="150" height="80" alt=""/> 
            <p className={"p-nav"}>Home</p>
          </span>
        </Link>
        <span className="navbar-brand">
          <img className="img-nav" id="Sun" src={Sun} width="80" height="80" alt=""/> 
          <img className="img-nav" id="Rain" src={Rain} width="80" height="80"  alt=""/> 
          <img className="img-nav" id="Wind" src={Wind} width="80" height="80"  alt=""/>
          <img className="img-nav" id="Snow" src={Snow} width="80" height="80"  alt=""/>
          <img className="img-nav" id="Cloud" src={Cloud} width="80" height="80"  alt=""/>
        </span>
        <img className="img-arrow-gif" id="arrow" src={Arrow} width="50" height="30" alt=""/> 
        <Link style={{textDecoration:'none', color:'white'}} to='/cities'> 
         <button className="button-start">START SEARCHING</button>
        </Link>
    </nav>
  );
};

export default Nav;
