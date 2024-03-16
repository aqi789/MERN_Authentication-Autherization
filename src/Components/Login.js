import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    axios.defaults.withCredentials=true;
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email,password})
        .then(res=>{
            if(res.data.Status==="Success") {
                if(res.data.role==="admin") {
                    navigate("/dashboard")
                } else {
                    navigate("/home")
                }
            }
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type='email' placeholder='Email' autoComplete='off' name='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input type='password' placeholder='Password' autoComplete='off' name='password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login