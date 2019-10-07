import React, { Component } from 'react'
import MenuGame from '../components/MenuGame.js';
import { Link } from "react-router-dom";
import Background from '../assets/Background.svg';
import LogoAkson from '../assets/logoAkson.svg'

export default class Menu extends Component {
    render() {
        return (
          <div style={style.bgStyle}> 
            <div className="d-flex justify-content-center" style={style.menuTengah}>
                <MenuGame/>
            </div>
          </div>
        )
    }
}

const style = {
    menuTengah:{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
    },

    bgStyle:{
        backgroundImage: `url(${Background})`
    }
}
