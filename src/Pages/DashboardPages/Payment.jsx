import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import Loading from '../../../Components/Loading';

const Payment = () => {
  const axiosSecure = useAxios();
  const { parcelId } = useParams();

  // Fetch parcel data
  const { isLoading, data } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    }
  });

  const handlePayment = async () => {
    if (!data) return;

    // Send data to backend with correct key names
    const paymentInfo = {
      cost: data.cost,              // number
      parcelId: data._id,           // MongoDB id
      sender_email: data.sender_email, // must match backend
      parcel_name: data.parcel_name    // must match backend
    };

    try {
      const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
      window.location.href = res.data.url; // redirect to Stripe checkout
    } catch (error) {
      console.error("Payment creation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6">
      <h2 className='text-4xl md:text-5xl font-extrabold text-primary mb-4'>
        Please pay <b>{data?.cost}৳</b> for: {data?.parcel_name}
      </h2>
      <button onClick={handlePayment} className="btn btn-accent">Pay</button>
    </div>
  );
};

export default Payment;
