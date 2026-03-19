import React from 'react'
import {useState, useEffect} from "react"
import toast from 'react-hot-toast';
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get("/api/users", {
                    withCredentials: true
                });
                // console.log(data);
                setConversations(data);
            } catch(err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    },[])


    return {loading, conversations};
    
}

export default useGetConversations