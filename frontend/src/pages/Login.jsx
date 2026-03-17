import React from 'react'
import {useState} from "react"
import axios from "axios"
import InputFieldAuth from '../components/InputFieldAuth'

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/logout", {
        username, password
      }, {
        withCredentials: true,
      })
      if (response.status === 200) {
        console.log("User is logged in successfully");
      }
    } catch(err) {
      console.log("Error Logging in the user", err.response.data.message);
    }
  }


  const handleLogOut = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/logout",{}, {
        withCredentials: true,
      })
      if (response.status === 200) {
        console.log("User is logged out successfully");
      }
    } catch(err) {
      console.log("Error Logging in the user", err.response.data.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-130  mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-black opacity-80 bg-clip-padding backdrop-filter backdrop-blur-lg-bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-5'>Login   <span className='text-blue-400'>ChatApp</span>
        </h1>
        <button onClick={() => handleLogIn(username, password)} >Log in</button>
        <button onClick={() => handleLogOut()} >Log out</button>
        <form action="">
          <InputFieldAuth labelName="Username" placeHolder="Enter your username" type="text" onChange={setUserName}/>
          <InputFieldAuth labelName="Password" placeHolder="Enter your password" type="password" onChange={setPassword}/>

          <div className='my-4' >
            <button onClick={() => handleLogIn(username, password)} className='btn btn-black btn-sm mt-2 w-full'>Log in</button>
          </div>

          <div className='text-center'>
            <a href="/signup" className='text-sm hover:underline hover:text-blue-400 text-center'>{"Don't"} have an account</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login