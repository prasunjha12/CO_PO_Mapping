import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import aiubLogo from './aiub-logo.jpg';

function UpdateUsers() {
    const { id } = useParams();
    const [rollno, setRollNo] = useState();
    const [name, setName] = useState();
    const [t1, setT1Marks] = useState();
    const [t2, setT2Marks] = useState();
    const [at1, setAT1Marks] = useState();
    const [at2, setAT2Marks] = useState();
    const [ap, setAPMarks] = useState();
    const [total, setTotal] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users/' + id)
            .then(result => {
                console.log(result);
                setRollNo(result.data.rollno);
                setName(result.data.name);
                setT1Marks(result.data.t1);
                setT2Marks(result.data.t2);
                setAT1Marks(result.data.at1);
                setAT2Marks(result.data.at2);
                setAPMarks(result.data.ap);
                setTotal(result.data.total);
            })
            .catch(err => console.log(err));
    }, [id]);

    const calculateTotalT1T2 = () => {
        return (parseInt(t1) + parseInt(t2)) / 2;
    };

    const calculateTotal = () => {
        return calculateTotalT1T2() + parseInt(at1) + parseInt(at2) + parseInt(ap);
    };

    const Update = (e) => {
        e.preventDefault();

        const totalT1T2 = calculateTotalT1T2();
        const total = calculateTotal();

        axios.put(`http://localhost:3001/users/${id}`, {
            rollno,
            name,
            t1,
            t2,
            totaloft1t2: totalT1T2,
            at1,
            at2,
            ap,
            total,
        })
        .then(result => {
            console.log(result);
            navigate('/users');
        })
        .catch(err => console.log(err));
    }

    return (
        <div >
             <div className='topdiv'>
                <img className='logoimg' src={aiubLogo} alt="AIUB Logo" />
                <h1>PSG COLLEGE OF TECHNOLOGY</h1>
               <div  className='div2'>
                       <h2>Welcome User!</h2>
                </div>
                  </div>
            <div className='createAndUpdateUserDiv'>

                <form onSubmit={Update}>

                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">RollNo</label>
                        <input type="text" placeholder='Enter RollNo' className='form-control'
                            value={rollno} onChange={(e) => setRollNo(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">T1</label>
                        <input type="text" placeholder='Enter T1 Marks' className='form-control'
                            value={t1} onChange={(e) => setT1Marks(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">T2</label>
                        <input type="text" placeholder='Enter T2 Marks' className='form-control'
                            value={t2} onChange={(e) => setT2Marks(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Total(Average of 2 tests)</label>
                        <input type="text" placeholder='Enter Total(Average of 2 tests) Marks' className='form-control'
                            value={calculateTotalT1T2()} onChange={(e) => setTotal(e.target.value)} disabled />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">AT1</label>
                        <input type="text" placeholder='Enter AT1 Marks' className='form-control'
                            value={at1} onChange={(e) => setAT1Marks(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">AT2</label>
                        <input type="text" placeholder='Enter AT2 Marks' className='form-control'
                            value={at2} onChange={(e) => setAT2Marks(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">AP</label>
                        <input type="text" placeholder='Enter AP Marks' className='form-control'
                            value={ap} onChange={(e) => setAPMarks(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Total</label>
                        <input type="text" placeholder='Enter Total Marks' className='form-control'
                            value={calculateTotal()} onChange={(e) => setTotal(e.target.value)} disabled />
                    </div>
                    <button className='btn btn-success'>Update</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateUsers;
