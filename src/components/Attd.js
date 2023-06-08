import "./attd.css";

import React, { useState, useEffect } from 'react';

const AttendanceForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [creditHour, setCreditHour] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/markAttd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNo: rollNo,
          courseCode: courseCode,
          date: date,
          status: status,
          creditHour: creditHour,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Handle success or error response from the server
    } catch (error) {
      console.error('Error:', error);
      // Handle error response
    }
  };

  useEffect(() => {
    // Fetch the student list and their attendance status from the server
    const fetchStudents = async () => {
      try {
        const response = await fetch('/students');
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="attendance-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Course Code:</label>
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="form-control"
          />
        </div>
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
          <label>Status:</label>
          <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-control"
        >
          <option value="P">-</option>
          <option value="A">A</option>
          <option value="L">L</option>
        </select>
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
        <button type="submit" className="btn-submit">Mark Attendance</button>
      </form>

      <table className="students-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceForm;
