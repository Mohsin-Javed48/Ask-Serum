/** @format */

import { RouterProvider } from "react-router";
import AppLayout from "../src/Ui/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import CreateOrder from "./features/order/CreateOrder";
import Brands from "./features/brands/Brands";
import Shop from "./features/shop/Shop";
import Home from "./Ui/Home";
import Error from "./Ui/Error";
import Order from "./features/order/Order";
import AboutUs from "./Ui/AboutUs";
import Blog from "./Ui/Blog";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    error: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop/:brandId",
        element: <Brands />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
