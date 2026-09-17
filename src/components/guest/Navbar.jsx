import { Link } from "react-router";
import { MoonStar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const menus = [
  { name: "Beranda", href: "/#home" },
  { name: "Tentang Kami", href: "/#about" },
  { name: "Testimoni", href: "/#testimony" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-slate-200/50 dark:border-slate-800/50 border-b w-full transition-all">
      <nav className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/20 shadow-lg rounded-xl w-10 h-10 text-white group-hover:scale-105 transition-transform duration-300">
            <MoonStar className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-slate-900 dark:text-white text-xl tracking-tight">
            Pesantren{" "}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent">
              Abu Dzar
            </span>
          </span>
        </Link>

        {/* Menu Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                className="after:bottom-0 after:left-0 after:absolute relative after:bg-emerald-500 py-1 after:w-0 hover:after:w-full after:h-0.5 font-medium text-slate-600 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-slate-300 text-sm transition-colors after:transition-all after:duration-300">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-600 hover:from-emerald-700 to-teal-600 hover:to-teal-700 shadow-emerald-600/20 shadow-lg hover:shadow-emerald-600/30 px-5 py-2.5 rounded-xl font-medium text-white transition-all duration-300">
            <Link to="/sign-in" className="flex items-center gap-2">
              <span>Masuk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
