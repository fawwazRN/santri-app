import { Link } from "react-router";
import { Mail, MapPin, MoonStar, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer>
      <Separator className="mb-8" />

      <div className="gap-8 grid md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-emerald-600 rounded-full w-9 h-9 text-white">
              <MoonStar className="w-5 h-5" />
            </div>
            <span className="font-bold">Pesantren Abu Dzar</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Lembaga pendidikan Islam yang berkomitmen mencetak generasi Qur'ani,
            berilmu, dan berakhlak mulia.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Menu</h3>
          <div className="flex flex-col items-start gap-1">
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="/#home">Home</a>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <a href="/#about">About</a>
            </Button>
            <Button variant="ghost" asChild className="p-0 h-auto">
              <Link to="/sign-in">Masuk</Link>
            </Button>
            <Button variant="ghost" asChild className="p-0 h-auto">
              <Link to="/sign-up">Daftar</Link>
            </Button>
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Hubungi Kami</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 w-4 h-4 shrink-0" />
              Jl. Kebun Jeruk No. 27, Jakarta Barat
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              +62 812-3456-7890 (WhatsApp)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              info@Abu Dzar.sch.id
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-6" />

      <p className="text-muted-foreground text-sm text-center">
        © 2025 Pesantren Abu Dzar. Barakallahu fiikum 🤲
      </p>
    </footer>
  );
}
