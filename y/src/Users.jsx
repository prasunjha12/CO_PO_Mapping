import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import aiubLogo from './aiub-logo.jpg';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
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
      <div  className='div2'>
        <h2>Welcome User!</h2>
     </div>
      </div>
            <div className='table-container' >
                <table className='table'>
                    <thead>
                        <tr>
                            <th>RollNo</th>
                            <th>Name</th>
                            <th>T1 (Max:30)</th>
                            <th>T2(Max :30)</th>
                            <th>Total(Avg T1 and T2)</th>
                            <th>AT1 (Max:5)</th>
                            <th>AT2 (Max:5)</th>
                            <th>AP (Max:10)</th>
                            <th>Total (Max:50)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.rollno}</td>
                                    <td>{user.name}</td>
                                    <td>{user.t1}</td>
                                    <td>{user.t2}</td>
                                    <td>{user.totaloft1t2}</td>
                                    <td>{user.at1}</td>
                                    <td>{user.at2}</td>
                                    <td>{user.ap}</td>
                                    <td>{user.total}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success' style={{marginRight:'10px'}}>Update</Link>
                                        <button className='btn btn-danger ' onClick={() => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='addbtn'>
                <Link to="/create" className='btn btn-success '>Add +</Link>
                </div>

            </div>
        </div>
    );
}

export default Users;
