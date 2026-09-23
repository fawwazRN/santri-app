import { createBrowserRouter } from "react-router";

import GuestLayout from "@/layouts/GuestLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";

import Home from "@/pages/guest/Home";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";

import Dashboard from "@/pages/admin/Dashboard";
import DataSantri from "@/pages/admin/DataSantri";
import DataPengajar from "@/pages/admin/DataPengajar";
import Pengaturan from "@/pages/admin/Pengaturan";

// tambah import
import UserLayout from "@/layouts/UserLayout";
import UserDashboard from "@/pages/user/Dashboard";
import Hafalan from "./pages/user/Hafalan";

export const router = createBrowserRouter([
  // ---- Guest ----
  {
    element: <GuestLayout />,
    children: [{ path: "/", element: <Home /> }],
  },

  // ---- Auth ----
  {
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },

  // ---- Admin ----
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> }, // /admin
      { path: "santri", element: <DataSantri /> }, // /admin/santri
      { path: "pengajar", element: <DataPengajar /> }, // /admin/pengajar
      { path: "pengaturan", element: <Pengaturan /> }, // /admin/pengaturan
    ],
  },
  // tambah di array routes
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "hafalan", element: <Hafalan /> },
    ],
  },
]);
