import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/Landing";
import MainContent from "./components/MainContent/MainContent";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import DoubleSidedResizer from "./components/MainContent/DoubleSidedResizer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/generator", element: <DoubleSidedResizer /> },
    ],
  },
]);

function App() {
  return (
    <div className='min-h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
