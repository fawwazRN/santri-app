import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
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

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
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
