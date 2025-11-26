import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import Loading from '../../../Components/Loading';

const Payment = () => {
  const axiosSecure = useAxios();

  const { parcelId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["[parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2>Please pay for: {data.parcel_name}</h2>
      <button className="btn btn-accent">Pay</button>
    </div>
  );
};

export default Payment;