import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({children}) => {
    const location = useLocation()

    console.log(location)
    const {user,loading} = useAuth()

    if(user){
        return children
    }


    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>

}

export default PrivateRoute