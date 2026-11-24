import React from 'react'
import useAuth from '../Hooks/useAuth'
import useRole from '../Hooks/useRole'
import AccessForbidden from '../Forbidden/AccessForbidden'

const AdminRoute = ({children}) => {
    const {loading} = useAuth()
    const {role,roleLoading} = useRole()
    
    if(loading || roleLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(role!=='admin'){
        return <AccessForbidden></AccessForbidden>
    }

  return children
}

export default AdminRoute