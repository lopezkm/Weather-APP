import React from 'react';
import India from '../img/indiaHor.jpg';
import Muralla from '../img/murallaHor.jpg';
import Tokio from '../img/tokioHor.jpg';
import Toronto from '../img/torontoHor.jpg';
import Berlin from '../img/berlinHor.jpg';
import BsAs from '../img/bsAsVer.jpg';
import China from '../img/chinaVer.jpg';
import Cristo from '../img/cristoVer.jpg';
import Emiratos from '../img/emiratosVer.jpg';
import Libertad from '../img/libertadVer.jpg';
import Londres from '../img/londresVer.jpg';
import Paris from '../img/parisVer.jpg';
import Rusia from '../img/rusiaVer.jpg';
import '../Styles/About.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className= {'jumbotron jumbotron-fluid mb-0 p-2 text-intro'}>
                    <h2>Hello there!! WELCOME to CITIES WEATHER</h2>
                    <p>Here you can search for the weather of almost any city in the world, in real time</p>
                </div>
                <div>
                    <img className={"img-hor-about"} id="Berlin" src={Tokio} width="260" height="200" alt=""/> 
                    <img className={"img-hor-about"} id="India" src={India} width="260" height="200"alt=""/> 
                    <img className={"img-hor-about"} id="Toronto" src={Toronto} width="260" height="200"alt=""/>
                    <img className={"img-hor-about"} id="Muralla" src={Muralla} width="260" height="200"alt=""/>
                    <img className={"img-hor-about"} id="Berlin" src={Berlin} width="260" height="200"alt=""/> 
                </div>
                <div>
                    <img className={"img-ver-about"} id="BsAs" src={BsAs} width="160" height="200"alt=""/>
                    <img className={"img-ver-about"} id="China" src={China} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Cristo" src={Cristo} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Emiratos" src={Emiratos} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Londres" src={Londres} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Liertad" src={Libertad} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Paris" src={Paris} width="160" height="200"alt=""/> 
                    <img className={"img-ver-about"} id="Rusia" src={Rusia} width="160" height="200"alt=""/>  
                </div>
            </div>
        )
    }
}