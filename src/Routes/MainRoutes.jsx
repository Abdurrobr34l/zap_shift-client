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
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../Pages/DashboardPages/MyParcels";
import Payment from "../Pages/DashboardPages/Payment";
import PaymentSuccess from "../Pages/DashboardPages/PaymentSuccess";
import PaymentCancelled from "../Pages/DashboardPages/PaymentCancelled";
import PaymentHistory from "../Pages/DashboardPages/PaymentHistory";

export const router = createBrowserRouter([
  //* HOMEPAGE ROUTES
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
          </PrivateRoutes>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "/rider-apply",
        element:
          <PrivateRoutes>
            <BeARider></BeARider>
          </PrivateRoutes>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  },

  //* AUTHENTICATION ROUTES
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
  },

  //* DASHBOARD ROUTES
  {
    path: "dashboard",
    element:
      <PrivateRoutes>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoutes>,
    children: [
      {
        path: "my-parcels",
        Component: MyParcels
      },
      {
        path: "payment/:parcelId",
        Component: Payment
      },
      {
        path: "payment-history",
        Component: PaymentHistory
      },
      {
        path: "payment-success",
        Component: PaymentSuccess
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled
      }
    ]
  }
])