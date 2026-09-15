import { Link } from "react-router";
import { MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";

const menus = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Testimony", href: "/#testimony" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-background/95 backdrop-blur border-b">
      <nav className="flex justify-between items-center mx-auto px-4 max-w-6xl h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-emerald-600 rounded-full w-9 h-9 text-white">
            <MoonStar className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg">Pesantren Abu Dzar</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                className="font-medium text-muted-foreground hover:text-foreground text-sm transition-colors">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link to="/sign-in">Masuk</Link>
        </Button>
      </nav>
    </header>
  );
}
