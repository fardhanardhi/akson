import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class UserStat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deltaScore: null,
      dataScore: [
        ["a", "Score"],
        [0, 0]
      ]
    };
  }

  componentDidMount() {
    const hasilData = this.props.userScore.map((item, index) => {
      return [index + 1, item];
    });

    console.log(this.props.userScore);
    this.setState({ dataScore: [...this.state.dataScore, ...hasilData] }, ()=>{
      console.log(this.state.dataScore);
      this.hitungSelisih();
    });

    
  }

  hitungSelisih = () => {
    let previousScore = this.state.dataScore[this.state.dataScore.length - 2][1];
    let recentScore = this.state.dataScore[this.state.dataScore.length-1][1];
    if (previousScore < recentScore) {
      console.log(previousScore);
      let tempDelta =recentScore - previousScore;
      this.setState({ deltaScore:"+"+tempDelta });
      
      // return tempDelta;
    }else if (previousScore > recentScore) {
      console.log(previousScore);
      let tempDelta = previousScore - recentScore;
      this.setState({ deltaScore: "-"+tempDelta });
      // return tempDelta;
    }
    console.log(previousScore, "|", recentScore);
    
  };

  render() {
    
    console.log(this.state.deltaScore);
    console.log(this.state.dataScore);
    // console.log(this.hitungSelisih());
    return (
      <div>
        <div style={{ marginLeft: "100px" }}>
          <h6 className="text-left">{this.state.deltaScore}</h6>
        </div>
        <Chart
          width={"auto"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['x', 'score'],
            [0, 0],
            [1, 550],
            [2, 850],
            [3, 1105],
            [4, 1115],
          ]}
          // {
          //   // this.state.dataScore
            
          // }
          options={{
            hAxis: {
              title: "Jumlah Permainan"
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
