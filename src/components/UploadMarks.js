import "./marks.css";

import React, { useState } from 'react';

const UploadMarksForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [semester, setSemester] = useState('');
  const [mark, setMark] = useState('');
  const [courseCode, setCourseCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // You can send the form data to your backend API here
    console.log('Form submitted:', rollNo, semester, mark, courseCode);
  };

  return (
    <form onSubmit={handleSubmit} className="upload-marks-form">
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
        <label>Semester:</label>
        {/* <input
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="form-control"
        /> */}
         <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="form-control"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="form-group">
        <label>Marks:</label>
        <input
          type="text"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
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
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default UploadMarksForm;
