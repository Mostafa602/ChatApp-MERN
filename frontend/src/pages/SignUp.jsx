import React from 'react'
import {useState} from "react"
import InputFieldAuth from '../components/InputFieldAuth';
import GenderCheckbox from '../components/signup/GenderCheckbox';
const SignUp = () => {

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-w-130  mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-black opacity-80 bg-clip-padding backdrop-filter backdrop-blur-lg-bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-5'>SingUp   <span className='text-blue-400'>ChatApp</span>
        </h1>
        <form action="">
          <InputFieldAuth labelName="Full Name" placeHolder="Enter your full name" type="text" onChange={setFullName}/>
          <InputFieldAuth labelName="Username" placeHolder="Enter your username" type="text" onChange={setUserName}/>
          <InputFieldAuth labelName="Password" placeHolder="Enter your password" type="password" onChange={setPassword}/>
          <InputFieldAuth labelName="Confirm Password" placeHolder="Enter password again" type="password" onChange={setConfirmPassword}/>
          <GenderCheckbox />
          <div className='my-4' >
            <button className='btn btn-black btn-sm mt-2 w-full'>Sign up</button>
          </div>

          <div className='text-center'>
            <a href="/login" className='text-sm hover:underline hover:text-blue-400 text-center'>Already has an account?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp