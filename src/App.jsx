import { useState } from 'react'
import axios from 'axios';

import './App.css'
import DisplayEmployee from './Components/DisplayEmployees'

const sampleEmployee = {
  gender: 'male',
  name: {first:'Charlie',last:'Thompson',},
  location :{
    street : {number:761,name:'Tay Street',},
    city: 'Timaru',
    postcode:76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
}


function App() {
  const [employee,setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    axios 
    .get('https://randomuser.me/api?nat=en')
    .then((response) => {
      setEmployee(response.data.results[0]);
    });
  }
  return (
    <>
    <div className='App'>
      < DisplayEmployee employee={employee}/>
      <button type="button" onClick={getEmployee}>Get employee</button>

    </div>
     
    </>
  )
}

export default App
