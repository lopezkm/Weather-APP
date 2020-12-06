import React from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card" style={{backgroundImage:`url(https://source.unsplash.com/random/500x300/?${name})`}}>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="button-close">x</button>
        </div>
        <Link style={{textDecoration:"none"}} to={`/ciudad/${id}`} >
          <h5 className="card-title"> {name.toUpperCase()} - Max: {max}° - Min: {min}° </h5>
        </Link>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="250" height="250" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
