import { create } from "zustand";
import { persist } from "zustand/middleware";

const MOCK_USERS = [
  {
    id: 1,
    email: "budi@gmail.com",
    pass: "123456",
    name: "Budi (Admin)",
    role: "admin",
  },
  {
    id: 2,
    email: "fawwaz@gmail.com",
    pass: "123456",
    name: "Fawwaz",
    role: "user",
  },
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,
      login: (email, pass) => {
        const foundUser = MOCK_USERS.find(
          (user) => user.email === email && user.pass === pass,
        );

        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
            },
            error: null,
          });
          return true;
        } else {
          set({
            error: "Email atau password salah",
          });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          error: null,
        });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
