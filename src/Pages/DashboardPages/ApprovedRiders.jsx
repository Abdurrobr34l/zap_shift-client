import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApprovedRiders = () => {

  const axiosSecure = useAxios();

  const { data, refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    }
  });

  // Update rider status
  const updateRiderStatus = async (riderData, status) => {
    const res = await axiosSecure.patch(`/riders/${riderData._id}`, { status,  email: riderData.email });

    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Rider status updated to "${status}".`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const handleApproval = (riderData) => {
    updateRiderStatus(riderData, 'approved');
  };

  const handleRejection = (riderData) => {
    updateRiderStatus(riderData, 'rejected');
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
        Riders Pending Approval: {data?.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((riderData, index) => (
              <tr key={riderData._id}>
                <th>{index + 1}</th>
                <td>{riderData.name}</td>
                <td>{riderData.email}</td>
                <td>{riderData.district}</td>

                <td>
                  <p className={`font-semibold ${riderData.status === 'approved' ? 'text-success!' : 'text-error!'}`}>
                    {riderData.status}
                  </p>
                </td>

                <td className='flex gap-2'>
                  <button
                    onClick={() => handleApproval(riderData)}
                    className='btn btn-square hover:bg-accent'
                  >
                    <FaUserCheck />
                  </button>

                  <button
                    onClick={() => handleRejection(riderData)}
                    className='btn btn-square hover:bg-accent'
                  >
                    <IoPersonRemoveSharp />
                  </button>

                  <button className='btn btn-square hover:bg-accent'>
                    <FaTrashCan />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default ApprovedRiders;
