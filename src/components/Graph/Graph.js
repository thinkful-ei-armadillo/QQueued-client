import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import QueueContext from "../../context/QueueContext"
import graphHelper from './graphHelper'
export default class Graph extends Component {
  static contextType = QueueContext;
  
  render() {
    const { data } = this.props
    let input;
    if(data.length > 0){
      const colorList = graphHelper.makeRandomColors(data.length)
       input = {
        labels: data.map(i => i.studentName),
        datasets: [{
          data: data.map(i => i.questions.length),
          backgroundColor: colorList,
            hoverBackgroundColor: colorList
        }]
      }
    }
    let inputMentor;
    if(data.length > 0){
      let filteredData = graphHelper.mentorTicketCounter(data)
      
      const colorList = graphHelper.makeRandomColors(filteredData.data.length)
       inputMentor = {
        labels: filteredData.labels,
        datasets: [{
          data: filteredData.data,
          backgroundColor: colorList,
            hoverBackgroundColor: colorList
        }]
      }
    }
    return (
    <div>
       <span>Graph of finished tickets by Student</span>
      {input && <Pie data={input} height={150} width={200} />}
      <span>Completed tickets by Mentor</span>
      {input && <Pie data={inputMentor} height={150} width={200} />}
    </div>
    );
  }
}
