import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import aiubLogo from './aiub-logo.jpg';


function CoTable() {
    const [cos, setCos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cos')
            .then(result => setCos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/cos/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='topdiv'>
                <img className='logoimg' src={aiubLogo} alt="AIUB Logo" />
                <h1>PSG COLLEGE OF TECHNOLOGY</h1>
                <div className='div2'>
                    <h2>Welcome User!</h2>
                </div>
            </div>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Course Outcome (CO)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cos.map(co => (
                            <tr key={co._id}>
                                <td>{co.sno}</td>
                                <td>{co.cos}</td>
                                <td>
                                    <Link to={`/updateCO/${co._id}`} className='btn btn-success' style={{ marginRight: '10px' }}>Update</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(co._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='addbtn'>
                    <Link to="/createCO" className='btn btn-success'>Add +</Link>
                </div>
            </div>
        </div>
    );
}

export default CoTable;
