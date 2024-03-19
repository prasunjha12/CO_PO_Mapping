import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUsers from './CreateUser'
import UpdateUsers from './UpdateUser'
import Login from './Login'
import CollegeInterface from './Options';
import CourseSelection from './CourseSelection'
import CoTable from './CoTable'
import CreateCO from './CreateCO'
import UpdateCO from './UpdateCO'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>

         <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/courseSelect' element={<CourseSelection/>}></Route>
              <Route path='/cos' element={<CoTable/>}></Route>
              <Route path='/users' element={<Users />} /> {/* Add this route */}

              <Route path='/create' element={<CreateUsers/>}></Route>

              <Route path='/update/:id' element={<UpdateUsers/>}></Route>
              <Route path='/options' element={<CollegeInterface/>} />
              <Route exact path="/createCO" element={<CreateCO/>} ></Route>
             <Route exact path="/updateCO/:id" element={<UpdateCO/>} ></Route>
         </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
