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

  const handlePayment = async () => {
    const paymentInfo = {
      cost: data.cost,
      parcelId: data._id,
      sender_email: data.sender_email,
      parcel_name: data.parcel_name
    }

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    // console.log(res.data);
    window.location.href = res.data.url;
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2>Please pay <b>{data.cost}৳</b> for: {data.parcel_name}</h2>
      <button onClick={handlePayment} className="btn btn-accent">Pay</button>
    </div>
  );
};

export default Payment;