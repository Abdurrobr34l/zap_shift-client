import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import PageTitle from '../../utilities/PageTitle';

const AssignRiders = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const axiosSecure = useAxios();
  const riderModalRef = useRef();

  const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ['parcels', 'pending-pickup'],
    queryFn: async () => {
      const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
      return res.data;
    }
  })

  // todo: invalidate query after assigning a rider
  const { data: riders = [] } = useQuery({
    queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`);
      return res.data;
    }
  })

  const openAssignRiderModal = parcel => {
    setSelectedParcel(parcel);

    riderModalRef.current.showModal()
  }

  const handleAssignRider = rider => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectedParcel._id
    }
    axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          riderModalRef.current.close();
          parcelsRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider has been assigned.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <div>
      <PageTitle>Assign Riders: {parcels.length}</PageTitle>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Application Status</th>
              <th>Rider Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td>{parcel.parcel_name}</td>
              <td>{parcel.cost}</td>
              <td>{parcel.createdAt}</td>
              <td>{parcel.sender_district}</td>
              <td>{parcel.paymentStatus}</td>
              <td>{parcel.workStatus}</td>
              <td>
                <button
                  onClick={() => openAssignRiderModal(parcel)}
                  className='btn btn-accent'>Find Riders</button>
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
      <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Riders: {riders.length}!</h3>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider, i) => <tr key={rider._id}>
                  <th>{i + 1}</th>
                  <td>{rider.name}</td>
                  <td>{rider.email}</td>
                  <td>
                    <button
                      onClick={() => handleAssignRider(rider)}
                      className='btn btn-accent'>Assign</button>
                  </td>
                </tr>)}


              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;