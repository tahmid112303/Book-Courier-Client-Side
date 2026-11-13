import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Link, Outlet, useNavigate } from 'react-router'
import logo from '../assets/logo.jpg'
import { BookCopy, BookUp, House } from 'lucide-react'

const DashboardLayout = () => {
    const navigate = useNavigate()

  return (
    <>
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle inline" />

    {/* Drawer Content */}
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost drawer-button">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4 text-3xl font-bold">Dashboard</div>
    </nav>

    <Outlet></Outlet>

    
  </div>

    {/* Drawer Items at the left  */}
  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-18 is-drawer-open:w-64">
      {/* Sidebar content here */}

      <ul className="menu w-full grow">

        <li>
            <button onClick={()=>navigate('/')} className='flex is-drawer-close:w-auto is-drawer-close:h-13 bg-white rounded-full'>
                <img className='is-drawer-close:w-full is-drawer-close:h-full is-drawer-open:w-14 is-drawer-open:h-14 rounded-full' src={logo} alt="Company logo" />

                <h2 className='is-drawer-close:hidden font-bold text-xl'>Book Courier</h2>
            </button>
        </li>

        {/* List item */}
        <li>
          <button onClick={()=>navigate('/dashboard')} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex justify-center is-drawer-open:justify-start" data-tip="Homepage">
            {/* Home icon */}
            <House></House>

            <span className="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

        <li>
          <button onClick={()=>navigate('/dashboard/addbook')} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex justify-center is-drawer-open:justify-start" data-tip="Add Book">
            {/* Home icon */}
            <BookUp></BookUp>
            <span className="is-drawer-close:hidden">Add Book</span>
          </button>
        </li>

        <li>
          <button onClick={()=>navigate('/dashboard/mybooks')} className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex justify-center is-drawer-open:justify-start" data-tip="My Books">
            {/* Home icon */}
            <BookCopy></BookCopy>
            <span className="is-drawer-close:hidden">My Books</span>
          </button>
        </li>


      </ul>
    </div>
  </div>
</div>

    <div className='max-w-7xl mx-auto'>
        <Footer></Footer>
    </div>
</>
  )
}

export default DashboardLayout