import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import aiubLogo from './aiub-logo.jpg';

function UpdateCO() {
    const { id } = useParams();
    const [sno, setSno] = useState('');
    const [cos, setCos] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/cos/${id}`)
            .then(result => {
                console.log(result);
                setSno(result.data.sno);
                setCos(result.data.cos);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/cos/${id}`, {
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
                    <h2>Update CO</h2>
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
                    <button type="submit" className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCO;
