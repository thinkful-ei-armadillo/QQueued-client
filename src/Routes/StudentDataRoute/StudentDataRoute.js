import React, { Component } from 'react';
import StudentDataList from '../../components/StudentDataList/StudentDataList';
import { StudentDataProvider } from '../../context/StudentDataContext';

export default class StudentDataRoute extends Component {

  render() {
    return (
      <StudentDataProvider>
        <StudentDataList />
      </StudentDataProvider>
    )
  }
}