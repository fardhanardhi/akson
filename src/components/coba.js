import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default class coba extends Component {
  log = value => {
    console.log(value); //eslint-disable-line
  };

  render() {
    return (
      <div className="m-5">
        <div className="m-5">
          <Slider
            min={7}
            defaultValue={7}
            marks={{ 20: {style:style,label: 7}, 40: {style:style,label: 7}, 60: {style:style,label: 7}, 80: {style:style,label: 7}, 100: {style:style,label: 7} }}
            step={null}
            handleStyle={{
              border: "5px solid #3DAD47",
              height: 25,
              width: 25,
              marginLeft: 3,
              marginTop: -19,
              backgroundColor: "#FAFAFA"
            }}
            trackStyle={{
              backgroundColor: "#3DAD47",
              height: 10,
              marginTop: -13
            }}
            railStyle={{
              backgroundColor: "#BBEABF",
              height: 10,
              marginTop: -13
            }}
            activeDotStyle={{
              border: "5px solid #3DAD47",
              height: 25,
              width: 25,
              marginLeft: -10,
              backgroundColor: "#FAFAFA"
            }}
            dotStyle={{border: "5px solid #3DAD47",
            height: 25,
            width: 25,
            marginLeft: -10,
            backgroundColor: "#FAFAFA"}}
          />
         
        </div>
        
      </div>
    );
  }
}

const style = {
    color:"red",
    fontSize:"30px"

}