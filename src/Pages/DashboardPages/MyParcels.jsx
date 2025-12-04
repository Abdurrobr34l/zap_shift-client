import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxios';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import PageTitle from '../../utilities/PageTitle';

const MyParcels = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  //* Getting all Parcels info
  const { data, refetch } = useQuery({
    queryKey: ["myParcels", user.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels?email=${user.email}`);
      return response.data;
    }
  });

  //* All Parcel header
  const tableHeaders = [
    { id: 1, name: "" },
    { id: 2, name: "Parcel Name" },
    { id: 3, name: "Sender Email" },
    { id: 4, name: "Total Cost" },
    { id: 5, name: "Payment" },
    { id: 6, name: "Delivery Status" },
    { id: 7, name: "Actions" },
  ];

  //* Delete Parcel
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`)
          .then(response => {
            if (response.data.deletedCount) {
              //? Refresh the data in UI
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your Parcel order has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div>
      {/* Title */}
      <PageTitle>Total Parcels: {data?.length}</PageTitle>

      {/* Parcels Info Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              {
                tableHeaders.map((header) => (
                  <th key={header.id}>{header.name}</th>
                ))
              }
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {
              data?.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  {/* Name */}
                  <td>{parcel.parcel_name}</td>
                  {/* Email */}
                  <td>{parcel.sender_email}</td>
                  {/* Cost */}
                  <td>{parcel.cost} ৳</td>
                  {/* Payment */}
                  <td className='flex gap-1 font-semibold'>
                    {
                      parcel.payment_status ?
                        <p className='text-success!'>Paid</p> 
                        :
                        <Link to={`/dashboard/payment/${parcel._id}`}>
                          <button className='btn-accent btn btn-sm p-3!'>Pay</button>
                        </Link>
                    }
                  </td>

                  {/* Delivery Status */}
                  <td className='font-semibold'>
                    {
                      parcel.payment_status ?
                        <p className='text-success!'>Deliverd</p> :
                        <p className='text-error!'>Not Deliverd</p>
                    }
                  </td>

                  {/* Action */}
                  <td>
                    <button className='btn btn-square hover:bg-accent'>
                      <FaMagnifyingGlass />
                    </button>
                    <button className='btn btn-square hover:bg-accent mx-2'>
                      <FiEdit></FiEdit>
                    </button>
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className='btn btn-square hover:bg-accent'>
                      <FaTrashCan />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;