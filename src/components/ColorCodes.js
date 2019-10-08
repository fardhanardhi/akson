import React, {Component} from "react";

import Rectangel from "../components/Rectangel";
import Love from "../components/Love"

import colors from "../assets/colors";

export default class ColorCodes extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            choices : []
        }

        this.objects = [
            <Rectangel />
        ];
    };

    componentDidMount() {
        const choices = [...Array(8)].map(x => {
            return {
                object: this.getRandomId(this.objects),
                color: this.getRandomId(colors),
                name : this.getRandomId(colors)
            };
        });
    this.setState({ choices }, () => console.log(this.state.choices));
  }

    getRandomId = arr => {
        const id = Math.floor(Math.random() * arr.length);
        return id;
    }

    randColor = (objectId, colorIdCode, colorIdName) => {
        const obj = [
            <Rectangel color={colors[colorIdCode].code} name={colors[colorIdName].name} />
        ];
        return obj[objectId];
    }

    render(){
        const style = {
            position : "absolute",
            fontSize : "1.5em",
            color : "#FAFAFA",
            top : "17px",
            left : "0",
            right : "0"
        }
        return(
            <div className="container text-center m-0 p-0">
                <div className = "row">
                    {this.state.choices.map((item, index) => {
                        if (index < 4){
                            return (
                                <div className="col-md-3">
                                    {this.randColor(item.object, item.color, item.name)}
                                    <p style={style}>{item.name}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className = "row mt-5">
                    {this.state.choices.map((item, index) => {
                        if (index < 8 && index >= 4){
                            return (
                                <div className="col-md-3">
                                    {this.randColor(item.object, item.color, item.name)}
                                    <p style={style}>{item.name}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        )
    }
}