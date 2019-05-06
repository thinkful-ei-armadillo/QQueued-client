import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import graphHelper from "./graphHelper";
import "./Graph.css";

export default class Graph extends Component {
  render() {
    const { data } = this.props;
    const isEmptyData = !data.length;
    const colorList = graphHelper.makeRandomColors(data.length);
    const input = {
      labels: data.map(i => i.studentName),
      datasets: [
        {
          data: data.map(data => data.questions.length),
          backgroundColor: colorList,
          hoverBackgroundColor: colorList
        }
      ]
    };
    return (
      <section className="graph">
        {!isEmptyData ? (
          <span>Graph of finished tickets by Student</span>
        ) : (
          <h1>You have not helped any students</h1>
        )}
        <Pie data={input} height={150} width={200} />
      </section>
    );
  }
}
