/** @format */
// import Loader from "../Ui/Loader";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div>
      {/* <Loader /> */}
      <Header />

      <div>
        <main>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
