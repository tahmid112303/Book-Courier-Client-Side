import React from 'react'
import useAxiosSecure from '../Axios/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../Hooks/useAuth'

const MyOrders = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()

  const {data: orders = []} = useQuery({
    queryKey: ['orders',user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/orders?customerEmail=${user?.email}`)
        return res.data
    }
  })

  return (
    <>
      <div className='text-center mt-5 text-5xl max-sm:text-2xl'>My Orders: {orders.length}</div>

        <div className="overflow-x-auto mt-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Book</th>
        <th>Author</th>
        <th>Price</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {orders.map((order,i) => <tr key={order._id}>
        <td>{i+1}</td>
        <td>{order.customerName}</td>
        <td>{order.customerEmail}</td>
        <td>{order.book}</td>
        <td>{order.author}</td>
        <td>${order.price}</td>
        <td>{order.status === "unpaid" ? <button className='btn bg-slate-600 text-white hover:bg-purple-300 ml-5'>Pay</button> : <p>Paid</p>}</td>
      </tr>)}
    </tbody>
  </table>
</div>
    </>
  )
}

export default MyOrders