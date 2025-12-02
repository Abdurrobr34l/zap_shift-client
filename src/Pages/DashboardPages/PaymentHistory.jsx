import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const PaymentHistory = () => {
  const {user} = useAuth();
const axiosSecure = useAxios();

  const {data} = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`)
      return res.data;
    }
  });
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary mb-6">Payment History: {data?.length}</h2>

        <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Paid Time</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((paymentHistoryData, index) => <tr key={paymentHistoryData._id}>
                                <th>{index + 1}</th>
                                <td>{paymentHistoryData.parcelName}</td>
                                <td>${paymentHistoryData.amount}</td>
                                <td>{paymentHistoryData.paidAt}</td>
                                <td>{paymentHistoryData.transactionId}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default PaymentHistory;