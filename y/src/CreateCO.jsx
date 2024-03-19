import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './styles.css';
import aiubLogo from './aiub-logo.jpg';

function CreateCO() {
    const [sno, setSno] = useState('');
    const [cos, setCos] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/cos", {
            sno,
            cos,
        })
        .then(result => {
            console.log(result);
            navigate('/cos');
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className='topdiv'>
                <img className='logoimg' src={aiubLogo} alt="AIUB Logo" />
                <h1>PSG COLLEGE OF TECHNOLOGY</h1>
                <div className='div2'>
                    <h2>Welcome User!</h2>
                </div>
            </div>
            <div className='createAndUpdateUserDiv'>
                <form onSubmit={handleSubmit}>
                    <h2>Add COs</h2>
                    <div className='mb-2'>
                        <label htmlFor=""><b>S No</b></label>
                        <input type="text" placeholder='Enter S No' className='form-control'
                            value={sno} onChange={(e) => setSno(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""><b>Course Outcomes (CO)</b></label>
                        <input type="text" placeholder='Enter COs' className='form-control'
                            value={cos} onChange={(e) => setCos(e.target.value)} />
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCO;
