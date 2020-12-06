import React from 'react';
import Sun from '../img/sunny.jpg';
import Rain from '../img/rainning.jpg';
import Wind from '../img/wind.jpg';
import Snow from '../img/Snowing.jpg';
import Cloud from '../img/cloudy.jpg';
import SearchBar from './SearchBar.jsx';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';


function NavCards({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark p-0 nav-container">
        <Link style={{textDecoration:'none', color:'white'}} to='/'>
            <span className="ml-5 p-0">
            <img className="img-gif-cards" id="Sun" src={'https://o.quizlet.com/vgkMWxIrD78rWVt9hSZIEg.gif'} width="150" height="80" alt=""/> 
            <p className={"p-nav-card"}>Home</p>
            </span>
        </Link>
        <span className="navbar-brand">
            <img className="img-nav" id="Sun" src={Sun} width="80" height="80" alt=""/> 
            <img className="img-nav" id="Rain" src={Rain} width="80" height="80"  alt=""/> 
            <img className="img-nav" id="Wind" src={Wind} width="80" height="80"  alt=""/>
            <img className="img-nav" id="Snow" src={Snow} width="80" height="80"  alt=""/>
            <img className="img-nav" id="Cloud" src={Cloud} width="80" height="80"  alt=""/>
        </span>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default NavCards;