import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";

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
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  }
])