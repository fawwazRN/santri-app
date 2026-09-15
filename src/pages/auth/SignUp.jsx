import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-2xl">Pendaftaran Santri Baru</h1>
        <p className="text-muted-foreground text-sm">
          Sudah punya akun?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-emerald-600 hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nama">Nama Lengkap</Label>
          <Input id="nama" type="text" placeholder="Nama sesuai ijazah" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Minimal 8 karakter"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Konfirmasi Password</Label>
          <Input id="confirm" type="password" placeholder="Ulangi password" />
        </div>

        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-full">
          Daftar
        </Button>
      </form>
    </div>
  );
}
