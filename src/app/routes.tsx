import { createBrowserRouter } from "react-router";
import Home from "./Home";
import React from 'react';

const NotFound = () => (
  <div className="h-screen flex items-center justify-center text-white bg-black">
    404 - NOT FOUND
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
