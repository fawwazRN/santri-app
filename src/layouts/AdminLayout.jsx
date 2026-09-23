import { Navigate, Outlet } from "react-router";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "@/components/admin/Sidebar";
import { useAuthStore } from "@/pages/auth/store/useAuthStore";

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  if (user.role !== "admin") {
    return <Navigate to="/user" replace />;
  }
  return (
    <div className="flex min-h-screen">
      {/* Sidebar desktop */}
      <aside className="hidden lg:block bg-emerald-950 w-64 text-white shrink-0">
        <Sidebar />
      </aside>

      {/* Area utama */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <header className="flex justify-between items-center bg-background px-4 lg:px-6 border-b h-16">
          {/* Tombol buka sidebar di mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-emerald-950 p-0 w-64 text-white [&>button]:text-white">
              <SheetTitle className="sr-only">Menu Admin</SheetTitle>
              <Sidebar />
            </SheetContent>
          </Sheet>

          <p className="hidden md:block text-muted-foreground text-sm">
            Panel Admin — Pesantren Abu Dzar
          </p>

          {/* Kanan: notifikasi + profil */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full focus:outline-none">
                  <Avatar className="w-9 h-9">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?u=admin"
                      alt="Admin"
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="font-medium text-sm leading-tight">
                      Ustadz Abdullah
                    </p>
                    <p className="text-muted-foreground text-xs">Admin</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Akun</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profil Saya</DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/">Lihat Website</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Konten halaman admin */}
        <main className="flex-1 bg-muted/40 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
