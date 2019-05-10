import React, { Component } from 'react';
import StudentDataList from '../../components/StudentDataList/StudentDataList';
import { StudentDataProvider } from '../../context/StudentDataContext';

export default class StudentDataRoute extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <StudentDataProvider>
        <StudentDataList />
      </StudentDataProvider>
    )
  }
}