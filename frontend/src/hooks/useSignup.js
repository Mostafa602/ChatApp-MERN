import React from 'react'
import toast from 'react-hot-toast';
import axios from "axios"
import {useState} from "react"
import { useAuthContext } from '../context/AuthContext';

const handleInputErrors = ({fullName, username, password, confirmPassword, gender}) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all the fields")
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords doesn't match")
        return false;
    }

    if (password.length < 6) {
        toast.error("Passwords must be at least 6 characters")
        return false;
    }

    return true;
}


const useSignup = () => {
    
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser} = useAuthContext();

  const signup = async ({fullName, username, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
    if (!success) return;

    setLoading(true)

    try {
        const promise = axios.post("/api/auth/signup", {
            fullName, username, password, confirmPassword, gender
        });

        const response = await toast.promise(promise, {
            loading: 'Signing you in...',
            success: "Signed up successfully",
            error: "Signing in failed",
        });
        if (response.data.error) {
            throw new Error(response.data.error);
        }
        console.log(response.data);

        localStorage.setItem("chat-user", JSON.stringify(response.data))

        setAuthUser(response.data);

    } catch(err) {
        console.log(err.response.data.message)
    } finally {
        setLoading(false)
    }
  }


  return {loading, signup}
}

export default useSignup



