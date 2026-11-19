import { useQuery } from '@tanstack/react-query'
import { BookCheck, Shield, Trash } from 'lucide-react'
import React from 'react'
import useAxiosSecure from '../Axios/useAxiosSecure'

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

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
        <th>Actions</th>
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
        <th className='flex gap-2'>
          <button title='Make Admin' className="btn btn-square">
                <Shield></Shield>
          </button>

          <button title='Make Librarian' className="btn btn-square">
                <BookCheck></BookCheck>
          </button>

        </th>
      </tr>)}
    </tbody>

  </table>
</div>
    </>
  )
}

export default UsersManagement