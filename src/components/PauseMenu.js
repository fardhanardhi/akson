import React, { Component } from 'react'

export default class PauseMenu extends Component {
    render() {
        return (
            <div>
                <div>
                    <div style={style.shape}>
                        <a style={style.tulisanSatu}>Mencocokkan objek</a>
                        <a>Temukan objek yang berpasangan</a>
                    </div>
                </div>
            </div>
        )
    }
}


const style = {
    shape: {
        width: "511px",
        height: "283px",
        left: "432px",
        top: "201px",

        background: "#EFFFF0",
        borderRadius: "40px"
    },

    tulisanSatu: {
        // position: "absolute",
        width: "342px",
        height: "73px",
        left: "515px",
        top: "232px",

        fontFamily: "Carter One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "35px",
        lineHeight: "54px",
        textAlign: "center",
        
        color: "#000000"

    }
   
   
}