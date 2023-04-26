import { createContext, useContext, useState } from "react";
import { LoginContext, LoginProvider } from "./context/LoginContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/Landing";
import NavBar from "./components/Navbar/NavBarAI";
import MainContent from "./components/MainContent/MainContent";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/main", element: <MainContent /> },
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
