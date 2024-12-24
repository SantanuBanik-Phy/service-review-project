import axios from "axios";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: "https://b10-a11-server.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
         
            if (error.status === 401 || error.status === 403) {
                logout()
                    .then(() => {
                        // redirect to the login page
                        navigate('/auth/login');
                    })
                   
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;