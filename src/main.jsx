import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES IMPORT
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Distribution from "./Pages/Distribution.jsx";
import Cart from "./Pages/Cart.jsx";
import Products from "./Pages/Products.jsx";
import Kitchen from "./Pages/Kitchen.jsx";
import Refrigeration from "./Pages/Refrigeration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/distribution",
        element: <Distribution />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/kitchen",
        element: <Kitchen />,
      },
      {
        path: "refrigeration",
        element: <Refrigeration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
