import React from 'react';
import "./options.css";
import { Link, useNavigate } from 'react-router-dom';
import aiubLogo from './aiub-logo.jpg';

const CollegeInterface = () => {
        const navigate = useNavigate();
      
        const handleMarkEntryClick = () => {
          // Navigate to the "/users" route when the "Mark Entry" button is clicked
          navigate('/courseSelect');
        };

  return (
    <div className="college-interface">
      
      <div className='topdiv'>
      <img className='logoimg' src={aiubLogo} alt="AIUB Logo" />
      <h1>PSG COLLEGE OF TECHNOLOGY</h1>
      <div  className='div2'>
        <h2>Welcome User!</h2>
     </div>
      </div>

<div className='btns'>
            <button className='btn1' onClick={handleMarkEntryClick}><b>Mark Entry</b></button>
            <button  className='btn1'><b>Course Selection</b></button>
            <button  className='btn1'><b>Course Outcome</b></button>
            <button  className='btn1'><b> CO Attainement</b></button>
</div>
           
    </div>
  );
};

export default CollegeInterface;
