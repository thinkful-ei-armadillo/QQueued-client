import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import graphHelper from './graphHelper'

export default class Graph extends Component {
  render() {
    const { data } = this.props;
    const isEmptyData = !data.length ? true : false;
    const colorList = graphHelper.makeRandomColors(data.length)
    const input = {
        labels: data.map(i => i.studentName),
        datasets: [{
          data: data.map(data => data.questions.length),
          backgroundColor: colorList,
          hoverBackgroundColor: colorList
        }]
    } 
    return (
    <section>
      {!isEmptyData && <span>Graph of finished tickets by Student</span>}
      <Pie data={input} height={150} width={200} />
    </section>
    );
  }
}
