import { Link, Navigate, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuthStore } from "./store/useAuthStore";

export default function SignIn() {
  /*   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin"); // nanti diganti logic auth beneran
  }; */
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  } else if (user.role === "admin") {
    return <Navigate to="/admin" replace />;
  } else if (user.role === "user") {
    return <Navigate to="/user" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = login(email, pass);
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
      {error && <p className="text-red-600">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              requied
              className="pl-9"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPass(e.target.value)}
              required
              className="pl-9"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-full">
          Masuk
        </Button>
      </form>

      <p className="text-muted-foreground text-xs text-center">
        Dengan masuk, kamu menyetujui tata tertib pesantren yang berlaku.
      </p>
    </div>
  );
}
