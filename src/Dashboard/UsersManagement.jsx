import { useQuery } from '@tanstack/react-query'
import { BookCheck, Shield, ShieldOff, Trash } from 'lucide-react'
import React from 'react'
import useAxiosSecure from '../Axios/useAxiosSecure'
import Swal from 'sweetalert2'
import { TbAddressBookOff } from 'react-icons/tb'

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        const roleInfo = {role: 'admin'}
        axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
        .then(res => {
          if(res.data.modifiedCount){
            Swal.fire(`${user.name} marked as admin`)
            refetch()
          }
        }).catch(err => {
          console.log(err)
        })
    }

    const handleRemoveAdmin = (user) => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove!"
}).then((result) => {
    if(result.isConfirmed){
      const roleInfo = {role: 'user'}
      axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
      .then(res => {
        if(res.data.modifiedCount){
            Swal.fire({
            title: "Removed from Admin",
            text: "Admin has been removed.",
            icon: "success"
          });
          refetch();
        }
      }).catch(err => {
          console.log(err)
      })
    }
  }) 
  

};


    const handleMakeLibrarian = (user) => {
      const roleInfo = {role: 'librarian'}
      axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
      .then(res => {
        if(res.data.modifiedCount){
          Swal.fire(`${user.name} marked as Librarian`);
          refetch()
        }
      })
    }

    const handleRemoveLibrarian = (user) => {
      const roleInfo = {role: 'user'}
      axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
      .then(res => {
        if(res.data.modifiedCount){
          Swal.fire(`${user.name} removed as Librarian`);
          refetch();
        }
      })
    }

  return (
    <>

        <h1 className='text-center my-5 text-5xl'>Number of Users: {users.length}</h1>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Make Librarian</th>
      </tr>
    </thead>

    <tbody>
      {/* row 1 */}
        {users.map((user,index) => <tr key={user._id}>
        <td>{index+1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-circle h-12 w-12">
                <img
                  src={user?.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
            </div>
          </div>
        </td>
        <td>
            {user.role}
        </td>
        <td>{user.email}</td>
        <td>
          {user.role === 'admin' ? <button onClick={()=>handleRemoveAdmin(user)} title='Remove Admin' className="btn btn-square ml-5 hover:bg-green-300">
                <ShieldOff></ShieldOff>
          </button> : <button onClick={()=>handleMakeAdmin(user)} title='Make Admin' className="btn btn-square ml-5 hover:bg-green-300">
                <Shield></Shield>
          </button>}

        </td>
        <td>
          {
          user.role === 'librarian' ? <button onClick={()=>handleRemoveLibrarian(user)} title='Remove Librarian' className="btn btn-square ml-5 hover:bg-green-300">
                <TbAddressBookOff className='text-2xl'></TbAddressBookOff>
          </button> : <button onClick={()=>handleMakeLibrarian(user)} title='Make Librarian' className="btn btn-square ml-5 hover:bg-green-300">
                <BookCheck></BookCheck>
          </button>
          }
        </td>
      </tr>)}
    </tbody>

  </table>
</div>
    </>
  )
}

export default UsersManagement