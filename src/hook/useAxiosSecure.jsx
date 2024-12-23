import axios from "axios";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://b10-a11-server.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (res) => {
                return res;
            },
            async (error) => {
                const status = error.response?.status;

                if (status === 401 || status === 403) {
                    await logout(); 
                    navigate("/auth/login"); 
                }
                return Promise.reject(error); 
            }
        );
    }, [logout, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;