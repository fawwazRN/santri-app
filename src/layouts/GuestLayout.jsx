import { Outlet } from "react-router";
import Navbar from "@/components/guest/Navbar";

export default function GuestLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
