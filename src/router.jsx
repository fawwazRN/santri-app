import { createBrowserRouter } from "react-router";

import GuestLayout from "@/layouts/GuestLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Home from "@/pages/guest/Home";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
