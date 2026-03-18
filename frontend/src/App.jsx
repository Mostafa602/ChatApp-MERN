import React, { use } from 'react'
import { Navigate, BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useAuthContext } from './context/AuthContext'
const App = () => {

  const {authUser} = useAuthContext();

  return (
    <div  className='h-screen flex items-center justify-center p-4'>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </div>
  )
}

export default App