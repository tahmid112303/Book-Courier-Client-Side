import { Link, NavLink, useNavigate } from 'react-router'
import Logo from '../Logo/Logo'
import useAuth from '../../Hooks/useAuth'
import Swal from 'sweetalert2'
import { LogOut } from 'lucide-react'

const NavBar = () => {

  const {user,logOut} = useAuth()
  const navigate = useNavigate()

  const links = <>
      <NavLink to='/'>Home</NavLink>

      <NavLink to='/books'>Books</NavLink>

      <NavLink to='/about'>About Us</NavLink>

      <NavLink className='max-sm:hidden' to='/coverage'>Coverage Areas</NavLink>

      <NavLink to='/dashboard'>Dashboard</NavLink>

      {!user && <>
          <NavLink to='/register'>Register</NavLink>

          <NavLink to='/login'>Login</NavLink>
      </>}
  </>

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log("Signed Out")
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signed out",
                showConfirmButton: false,
                timer: 3000
            });
          navigate('/login');
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="navbar bg-sky-100 shadow-sm px-4 rounded-2xl mt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
    <Link to='/'><Logo></Logo></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4 text-xl">
        {links}
    </ul>
  </div>
  <div className="navbar-end">

    {user ? <div className="dropdown dropdown-end mr-4 max-sm:dropdown-close">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Image"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
          </Link>
        </li>
        <li onClick={handleLogOut}>
            <a>
              <span>Log Out</span> <LogOut></LogOut>
            </a>
        </li>
      </ul>
    </div> : <button onClick={() => navigate('/login')} className="btn btn-primary rounded-2xl">Sign In</button> }

  </div>
</div>
  )
}

export default NavBar