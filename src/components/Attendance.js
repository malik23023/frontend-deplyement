import "./attendance.css";
import React, { useState } from 'react';
import axios from "axios"
const MarkAttendanceForm = () => {
  const [date, setDate] = useState('');
  const [creditHour, setCreditHour] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('P');
  const [roll, setRoll] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // You can send the form data to your backend API here
    console.log('Form submitted:', code,date, creditHour, attendanceStatus,roll);
    const obj={
      rollNo:roll,
      courseCode:code,
      date:date,
      creditHour:creditHour,
      status:attendanceStatus
    }
    let response={
      url:"http://localhost:5000/markAttd",
      method:"POST",
      data:obj
    }
    axios(response).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  };

  return (
    <form onSubmit={handleSubmit} className="attendance-form">
      <div className="form-group">
        <label>Date:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Credit Hour:</label>
        <input
          type="text"
          value={creditHour}
          onChange={(e) => setCreditHour(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Roll Number:</label>
        <input
          type="text"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="form-control"
        />
      </div>

      
      <div className="form-group">
        <label>CourseCode:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="form-control"
        />
      </div>






      <div className="form-group">
        <label>Attendance Status:</label>
        <select
          value={attendanceStatus}
          onChange={(e) => setAttendanceStatus(e.target.value)}
          className="form-control"
        >
          <option value="P">-</option>
          <option value="A">Absent</option>
          <option value="L">Late</option>
        </select>
      </div>
      <button onClick={handleSubmit}  className="btn-submit">Submit</button>
    </form>
  );
};

export default MarkAttendanceForm;
