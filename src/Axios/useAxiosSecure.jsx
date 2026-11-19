import axios from 'axios'
import useAuth from '../Hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const axiosSecure = axios.create({
    baseURL: "http://localhost:9000"
})

const useAxiosSecure = () => {
  const {user,logOut} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{

    //request interceptor
      const requestInterceptor = axiosSecure.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config;
  });

  //response interceptor
  const responseInterceptor = axiosSecure.interceptors.response.use(res => {
        return res;
  }, err => {
        const status = err.status
        if(status === 401 || status === 403){
            logOut()
            .then(() => {
                console.log("Logged out from bad request", status)
                navigate('/login')
            })
        }
  })

  return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor)
      axiosSecure.interceptors.response.eject(responseInterceptor)
  }

  },[user,logOut,navigate])

  return axiosSecure
}

export default useAxiosSecure