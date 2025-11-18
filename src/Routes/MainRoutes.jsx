import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";

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
  }
])