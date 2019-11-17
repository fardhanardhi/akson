import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class UserStat extends Component {
constructor(props) {
  super(props)

  this.state = {
  }
}
  

  render() {
    let dataScore = [["a", "Score"], [0,0]];

    const hasilData = this.props.userScore.map((item, index)=>{
      return [index+1, item];
    });

    dataScore = [...dataScore,...hasilData];

    console.log(dataScore);
  
    return (
      <div>
        <Chart
          width={"auto"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={dataScore}
          options={{
            hAxis: {
              title: "Permainan ke"
            },
            vAxis: {
              title: "Score"
            }
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}
