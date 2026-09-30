import { Link, Navigate, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useAuthStore } from "./store/useAuthStore";

export default function SignIn() {
  // 1. Inisialisasi React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "email@gmail.com",
      password: "123456",
    },
  });

  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  // Jika user sudah login, redirect otomatis
  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (user.role === "user") {
      return <Navigate to="/user" replace />;
    }
  }

  // 2. Fungsi submit menerima parameter 'data' dari React Hook Form
  const onSubmit = (data) => {
    const isSuccess = login(data.email, data.password);
    if (isSuccess) {
      const currentUser = useAuthStore.getState().user;
      if (currentUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    }
  };

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2 text-center">
        <p className="font-medium text-emerald-600 text-sm">
          Assalamu'alaikum 👋
        </p>
        <h1 className="font-bold text-2xl">Masuk ke Portal Santri</h1>
        <p className="text-muted-foreground text-sm">
          Belum punya akun?{" "}
          <Link
            to="/sign-up"
            className="font-medium text-emerald-600 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>

      {/* Error dari Zustand Store */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Field Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              className={`pl-9 ${
                errors.email ? "border-red-500 focus-visible:ring-red-200" : ""
              }`}
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Format email tidak valid",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Field Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className={`pl-9 ${
                errors.password
                  ? "border-red-500 focus-visible:ring-red-200"
                  : ""
              }`}
              {...register("password", {
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* Tombol Submit dengan Validasi Real-time */}
        <Button
          type="submit"
          disabled={!isValid}
          className={`w-full ${
            isValid
              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}>
          Masuk
        </Button>
      </form>

      <p className="text-muted-foreground text-xs text-center">
        Dengan masuk, kamu menyetujui tata tertib pesantren yang berlaku.
      </p>
    </div>
  );
}
