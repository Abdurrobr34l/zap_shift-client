import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000"
})

const useAxios = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    //* Intercep Request
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
      return config;
    });

    //* Intercep Response
    const responseInterceptor = axiosSecure.interceptors.response.use((response) => {
      return response;
    },
      (err) => {
        // console.log(err);
        const statusCode = err.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut()
            .then(() => {
              navigate("/login")
            })
        }

        return Promise.reject(err);
      })

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosSecure;
};

export default useAxios;