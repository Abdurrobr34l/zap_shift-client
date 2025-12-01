import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id")
  const axiosSecure= useAxios();
  
  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res => {
        console.log(res.data)
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId,
        })
      })
    }
  }, [sessionId, axiosSecure])

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-120px)]'>
      <h2 className="mb-5 text-4xl font-bold text-success!">Payment Successfully Done</h2>
      <p>Your Transaction Id: <span className="font-semibold text-primary-content">{paymentInfo.transactionId}</span></p>
      <p>Your Parcel Tracking Id: <span className="font-semibold text-primary-content">{paymentInfo.trackingId}</span></p>
    </div>
  );
};

export default PaymentSuccess;