import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import aiubLogo from './aiub-logo.jpg';

function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleContinueClick=() =>{

       if(selectedCourse == 'Distributed Computing'){
        navigate('/users')
       }
       else{
        navigate(`/courseSelect`);
       }
  };

  const handleCOPOPSOClick=() =>{

    if(selectedCourse == 'Distributed Computing'){
     navigate('/cos')
    }
    else{
     navigate(`/courseSelect`);
    }
};

  return (
    <div className="college-interface">
      <div className='topdiv'>
        <img className='logoimg' src={aiubLogo} alt="AIUB Logo" />
        <h1>PSG COLLEGE OF TECHNOLOGY</h1>
        <div className='div2'>
          <h2>Welcome User!</h2>
        </div>
      </div>
      <h3 className="select-course-header">Select Course</h3>

      <div className='course-selection-container'>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className="course-dropdown"
        >
          <option value="" disabled>Select a course</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Compiler Design">Compiler Design</option>
          <option value="Embedded System">Embedded System</option>
          <option value="Distributed Computing">Distributed Computing</option>
          <option value="Extended Markup Language">Extended Markup Language</option>
        </select>

        
      </div>

      <button
          onClick={handleCOPOPSOClick}
          className="co-po-pso-button"
        >
          CO-PO-PSO
        </button>
      <button
          onClick={handleContinueClick}
          className="continue-button"
        >
          Continue
        </button>
        

    </div>
  );
}

export default CourseSelection;
