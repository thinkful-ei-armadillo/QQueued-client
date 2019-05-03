import React from 'react';
import StudentInfo from '../../components/StudentInfo/StudentInfo';
import { StudentDataProvider } from '../../context/StudentDataContext';

export default function StudentInfoRoute(props) {
  const { match } = props;
  return (
    <StudentDataProvider>
      <StudentInfo match={ match } />
    </StudentDataProvider>
  )
}