import React from 'react'
import {useState} from "react"
import axios from "axios"
import InputFieldAuth from '../components/InputFieldAuth'
import { Link } from 'react-router'
import useLogin from "../hooks/useLogin"

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-130  mx-auto">
      <div className='w-full p-6 rounded-3xl shadow-md bg-black opacity-80 bg-clip-padding backdrop-filter backdrop-blur-lg-bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-5'>Login   <span className='text-blue-400'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <InputFieldAuth labelName="Username" placeHolder="Enter your username" type="text" onChange={setUserName}/>
          <InputFieldAuth labelName="Password" placeHolder="Enter your password" type="password" onChange={setPassword}/>

          <div className='my-4' >
            <button className='btn btn-black btn-sm mt-2 w-full rounded-3xl'>{loading ? <span className='loading loading-spinner '></span> : "Login"}</button>
          </div>

          <div className='text-center'>
            <Link to="/signup" className='text-sm hover:underline hover:text-blue-400 text-center'>{"Don't"} have an account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login