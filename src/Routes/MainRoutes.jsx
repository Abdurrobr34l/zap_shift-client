import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../Pages/AuthPages/LoginPage";
import RegisterPage from "../Pages/AuthPages/RegisterPage";
import BeARider from "../Pages/BeARider";
import PrivateRoutes from "./PrivateRoutes";
import SendParcel from "../Pages/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "/send-parcel",
        element:
          <PrivateRoutes>
            <SendParcel></SendParcel>
          </PrivateRoutes>
      },
      {
        path: "/rider-apply",
        element:
          <PrivateRoutes>
            <BeARider></BeARider>
          </PrivateRoutes>
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: LoginPage
      },
      {
        path: "/register",
        Component: RegisterPage
      }
    ]
  }
])