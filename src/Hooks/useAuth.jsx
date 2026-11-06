import { useContext } from 'react'
import { AuthContext } from '../Firebase_Auth/AuthContext'

const useAuth = () => {

    const authInfo = useContext(AuthContext)

    return authInfo
}

export default useAuth