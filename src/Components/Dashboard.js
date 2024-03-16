import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const [success, setSuccess]=useState("")
    const navigate=useNavigate()

    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
        axios.get("http://localhost:3001/dashboard")
        .then(res=>{
            if(res.data==="Success") {
                setSuccess("OK")
            }
            else{
                navigate("/")
            }
        }).catch(err=>{
            console.log(err);
        })
    })
    
  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <p>{success}</p>
    </div>
  )
}

export default Dashboard