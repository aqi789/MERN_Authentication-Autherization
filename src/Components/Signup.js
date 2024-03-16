import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate=useNavigate();
    
    const handleSubmit=(e)=> {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(res=>{
            navigate("/login")
            alert("Created")
        }).catch(err=>{
            console.log(err);
        })
        
    }

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>
                    <strong>Name</strong>
                </label>
                <input type='text' placeholder='Name' autoComplete='off' name='name' onChange={(e)=> setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type='email' placeholder='Email' autoComplete='off' name='email' onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input type='password' placeholder='Password' autoComplete='off' name='password' onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button type='submit'>Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup