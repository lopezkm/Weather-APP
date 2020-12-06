import React, { useState } from 'react';
import {Route} from 'react-router-dom';

import '../Styles/App.css';
import Nav from '../components/Nav.jsx';
import NavCards from '../components/NavCards.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

//const {API_KEY} = process.env;
const key= '4ae2636d8dfbdc3044bede63951a019b'

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          for(let i= 0; i < cities.length; i++) {
            if(cities[i].name === recurso.name) {
              return alert(`La ciudad ${recurso.name} ya fue cargada`);
            }
          }  
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    //console.log(ciudad.length);
    //console.log(ciudad);
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
        exact path='/'
        render={() => <Nav/>}
      />
      <Route
        exact path='/cities'
        render={() => <NavCards onSearch={onSearch} />}
      />
      <Route
        exact path='/'
        component={About}
      />
      <Route
        exact path='/cities'
        render={() => <Cards
          cities={cities}
          onClose={onClose}
        />}
      />  
      <Route
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
        city={onFilter(match.params.ciudadId)} />}
      />
      <hr />
    </div>
  );
}

export default App;
