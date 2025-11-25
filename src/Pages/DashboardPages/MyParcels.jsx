import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxios';

const MyParcels = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data } = useQuery({
    queryKey: ["myParcels", user.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels?email=${user.email}`);
      return response.data;
    }
  });

  return (
    <div>
      <h2>MyParcels{data?.length}</h2>
    </div>
  );
};

export default MyParcels;