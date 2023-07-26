import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/SignUp";
import Upload from "./pages/Upload/Upload";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Faq from "./pages/Faq/Faq";
import Services from "./pages/Services/Services";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

function App() {
  return (
    <>
      <ToastContainer
        style={{ marginTop: "70px" }}
        position="top-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
