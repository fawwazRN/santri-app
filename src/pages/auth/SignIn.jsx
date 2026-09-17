import { Link, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin"); // nanti diganti logic auth beneran
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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
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
