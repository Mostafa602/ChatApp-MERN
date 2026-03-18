import React from 'react'
import {useState} from "react"
import toast from 'react-hot-toast';
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';
const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const promise = axios.post("http://localhost:5000/api/auth/logout", {} ,{withCredentials: true});
            const response = await toast.promise(promise, {
                loading: 'Logging you out...',
                success: "Logged out successfully",
                error: "Logging out failed",
            })
            console.log(response.data);
            localStorage.removeItem("chat-user");
            setAuthUser(null);

        } catch(err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, logout};

}

export default useLogout