import React, {useContext} from 'react';
import QueueContext from '../../context/QueueContext';
import Button from '../../components/Button/Button';
import './HelpStudentButton.css'

export default function HelpStudentButton() {
  const context = useContext(QueueContext);
  
  return (
    <Button onClick={() => context.helpStudent()}>Help a student</Button>
  )
}