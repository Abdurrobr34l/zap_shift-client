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
        path: "/rider-apply",
        Component: BeARider
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