import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
const HomeLayout = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500">Home Layout</h1>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};
export default HomeLayout;
