import React from 'react'
import {useState} from "react"
import toast from 'react-hot-toast';
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async (username,  password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const promise = axios.post("/api/auth/login", {username, password}, {withCredentials: true});
            const response = await toast.promise(promise, {
                loading: 'Logging you in...',
                success: "Logged in successfully",
            })
            console.log(response.data);

            localStorage.setItem("chat-user", JSON.stringify(response.data))

            setAuthUser(response.data)

        } catch(err) {
            console.log(err.message);
            toast.error(err.response?.data?.message || err.response?.data?.error || "Login Failed")
        } finally {
            setLoading(false);
        }
    }

    return {loading, login};

}

export default useLogin



function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}