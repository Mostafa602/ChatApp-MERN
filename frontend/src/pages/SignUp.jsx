import React from 'react'
import {useState} from "react"
import InputFieldAuth from '../components/InputFieldAuth';
import GenderCheckbox from '../components/signup/GenderCheckbox';
import { Link } from 'react-router';
import useSignup from '../hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }


  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  

  return (
    <div className="flex flex-col items-center justify-center min-w-130  mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-black opacity-80 bg-clip-padding backdrop-filter backdrop-blur-lg-bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-5'>SignUp   <span className='text-blue-400'>ChatApp</span>
        </h1>  
        <form onSubmit={handleSubmit}>
          <InputFieldAuth
            labelName="Full Name"
            placeHolder="Enter your full name"
            type="text"
            value={inputs.fullName}
            onChange={(value) => handleChange("fullName", value)}
          />

          <InputFieldAuth
            labelName="Username"
            placeHolder="Enter your username"
            type="text"
            value={inputs.username}
            onChange={(value) => handleChange("username", value)}
          />

          <InputFieldAuth
            labelName="Password"
            placeHolder="Enter your password"
            type="password"
            value={inputs.password}
            onChange={(value) => handleChange("password", value)}
          />

          <InputFieldAuth
            labelName="Confirm Password"
            placeHolder="Enter password again"
            type="password"
            value={inputs.confirmPassword}
            onChange={(value) => handleChange("confirmPassword", value)}
          />

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <div className='my-4' >
            <button className='btn btn-black btn-sm mt-2 w-full'>{loading ? <span className='loading loading-spinner '></span> : "Sign Up"}</button>
          </div>

          <div className='text-center'>
            <Link to="/login" className='text-sm hover:underline hover:text-blue-400 text-center'>Already has an account?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp