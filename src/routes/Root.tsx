import { Outlet } from "react-router-dom";
import NavbarDrk from "../components/layout/Navbar";

export default function Root() {

  return (
    <>
      <NavbarDrk/>
      <Outlet/>
    </>
  )
}

 