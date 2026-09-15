import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Bagian gambar (kiri) */}
      <div className="hidden lg:block relative w-1/2">
        <img
          src="https://picsum.photos/1000/1200" // ganti: /images/masjid.jpg
          alt="Pesantren Abu Dzar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/70" />
        <div className="bottom-0 absolute inset-x-0 p-10 text-white">
          <p className="font-medium text-xl italic leading-relaxed">
            "Menuntut ilmu itu wajib atas setiap muslim."
          </p>
          <p className="mt-2 text-emerald-200 text-sm">HR. Ibnu Majah</p>
        </div>
      </div>

      {/* Bagian form (kanan) */}
      <div className="flex justify-center items-center bg-background p-8 w-full lg:w-1/2">
        <Outlet />
      </div>
    </div>
  );
}
