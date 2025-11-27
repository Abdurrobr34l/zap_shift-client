import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-120px)]'>
      <h2 className="text-4xl font-bold text-error! mb-6">Payment Cancelled</h2>
      <Link to={"/dashboard/my-parcels"} className='btn btn-accent'>Try Again</Link>
    </div>
  );
};

export default PaymentCancelled;