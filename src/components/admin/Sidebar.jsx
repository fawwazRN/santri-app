import { NavLink } from "react-router";
import {
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MoonStar,
  Settings,
  Users,
} from "lucide-react";

const menus = [
  { name: "Dashboard", to: "/admin", icon: LayoutDashboard, end: true },
  { name: "Data Santri", to: "/admin/santri", icon: Users },
  { name: "Data Pengajar", to: "/admin/pengajar", icon: GraduationCap },
  { name: "Pengaturan", to: "/admin/pengaturan", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 border-white/10 border-b h-16">
        <div className="flex justify-center items-center bg-emerald-500 rounded-full w-9 h-9 text-white">
          <MoonStar className="w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-sm leading-tight">Abu Dzar</p>
          <p className="text-emerald-300 text-xs">Panel Admin</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 p-3">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.to}
            end={menu.end} // penting: biar "Dashboard" cuma aktif di /admin
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-emerald-100/70 hover:bg-white/10 hover:text-white"
              }`
            }>
            <menu.icon className="w-4 h-4" />
            {menu.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-white/10 border-t">
        <button className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-md w-full font-medium text-emerald-100/70 hover:text-white text-sm transition-colors">
          <LogOut className="w-4 h-4" />
          Keluar
        </button>
      </div>
    </div>
  );
}
