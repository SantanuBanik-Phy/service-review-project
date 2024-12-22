import axios from 'axios'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        console.log(
          'error caught from our very own axios interceptor-->',
          error.response
        )
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          logout()
          // navigate to login
          navigate('/auth/login')
        }
      }
    )
  }, [logout, navigate])
  return axiosSecure
}

export default useAxiosSecure
