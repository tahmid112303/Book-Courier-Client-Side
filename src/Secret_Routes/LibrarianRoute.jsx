import useRole from '../Hooks/useRole'
import useAuth from '../Hooks/useAuth'
import AccessForbidden from '../Forbidden/AccessForbidden'

const LibrarianRoute = ({children}) => {
    const {loading} = useAuth()
    const {role,roleLoading} = useRole()

    if(loading || roleLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(role === 'user'){
        return <AccessForbidden></AccessForbidden>
    }

  return children
}

export default LibrarianRoute