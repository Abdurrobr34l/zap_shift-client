import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id")
  const axiosSecure= useAxios();
  
  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res => console.log(res.data))
    }
  }, [sessionId, axiosSecure])

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-120px)]'>
      <h2 className="text-4xl font-bold text-success!">Payment Successfully Done</h2>
    </div>
  );
};

export default PaymentSuccess;