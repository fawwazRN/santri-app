import { Navigate, NavLink, Outlet } from "react-router";
import {
  Bell,
  BookOpen,
  LayoutDashboard,
  LogOut,
  MoonStar,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/pages/auth/store/useAuthStore";

const menus = [
  { name: "Dashboard", to: "/user", icon: LayoutDashboard, end: true },
  { name: "Hafalan Saya", to: "/user/hafalan", icon: BookOpen },
];

export default function UserLayout() {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role !== "user") {
    return <Navigate to="/admin" replace />;
  }
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block bg-emerald-950 w-64 text-white shrink-0">
        <div className="flex items-center gap-2 px-4 border-white/10 border-b h-16">
          <div className="flex justify-center items-center bg-emerald-500 rounded-full w-9 h-9">
            <MoonStar className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">Al-Hikmah</p>
            <p className="text-emerald-300 text-xs">Portal Santri</p>
          </div>
        </div>
        <nav className="space-y-1 p-3">
          {menus.map((m) => (
            <NavLink
              key={m.name}
              to={m.to}
              end={m.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-emerald-100/70 hover:bg-white/10"
                }`
              }>
              <m.icon className="w-4 h-4" /> {m.name}
            </NavLink>
          ))}
          <button className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-md w-full text-emerald-100/70 text-sm">
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 min-w-0">
        <header className="flex justify-between items-center px-4 lg:px-6 border-b h-16">
          <p className="text-muted-foreground text-sm">Portal Santri</p>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-9 h-9">
              <AvatarImage src="https://i.pravatar.cc/150?u=santri" />
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                AF
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 bg-muted/40 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
