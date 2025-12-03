import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';

const ApprovedRiders = () => {
  const axiosSecure = useAxios()
  
  const {data} = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data
    }
  })

  const handleApproval = () => {};
  
  const handleRejection = () => {};

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Riders Pending Approval: {data?.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((riderData, index) => <tr>
                <th>{index + 1}</th>
                <td>{riderData.name}</td>
                <td>{riderData.email}</td>
                <td>{riderData.district}</td>
                <td>
                  <p className={`${riderData.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{riderData.status}</p>
                </td>
                <td>
                  <button
                    onClick={() => handleApproval(riderData)} className='btn'>
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(riderData)}
                    className='btn'>
                    <IoPersonRemoveSharp />
                  </button>
                  <button className='btn'>
                    <FaTrashCan />
                  </button>
                </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedRiders;