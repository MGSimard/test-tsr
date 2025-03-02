import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});
