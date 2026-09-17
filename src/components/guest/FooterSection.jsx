import { Link } from "react-router";
import {
  Mail,
  MapPin,
  MoonStar,
  Phone,
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 pt-20 pb-10 border-slate-200/80 border-t overflow-hidden text-slate-700">
      {/* Visual Ambient Light Glows */}
      <div className="top-0 left-1/2 absolute bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 h-[1px] -translate-x-1/2" />
      <div className="-top-28 left-1/2 absolute bg-emerald-400/10 blur-[130px] rounded-full w-96 h-96 -translate-x-1/2 pointer-events-none" />
      <div className="-bottom-24 -left-24 absolute bg-teal-400/10 blur-[120px] rounded-full w-80 h-80 pointer-events-none" />

      <div className="relative mx-auto px-6 max-w-7xl">
        <div className="gap-10 md:gap-12 grid grid-cols-1 md:grid-cols-12 pb-16">
          {/* Brand & Tagline Section (5 col) */}
          <div className="space-y-6 md:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/20 shadow-lg rounded-2xl w-11 h-11 text-white group-hover:scale-105 transition-transform duration-300">
                <MoonStar className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-slate-900 text-2xl tracking-tight">
                Pesantren{" "}
                <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent">
                  Abu Dzar
                </span>
              </span>
            </Link>

            <p className="max-w-md font-normal text-slate-600 text-sm leading-relaxed">
              Lembaga pendidikan Islam modern yang berkomitmen mencetak generasi
              Qur'ani, berilmu tinggi, dan berakhlak mulia melalui perpaduan
              ilmu syar'i dan wawasan global.
            </p>

            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 shadow-sm px-3.5 py-1.5 border border-emerald-200 rounded-full font-semibold text-emerald-800 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Terakreditasi & Berbasis Sunnah</span>
            </div>
          </div>

          {/* Navigasi Cepat (3 col) */}
          <div className="space-y-5 md:col-span-3">
            <h3 className="font-bold text-emerald-700 text-xs uppercase tracking-widest">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <a
                  href="/#home"
                  className="inline-block text-slate-600 hover:text-emerald-600 transition-all hover:translate-x-1 duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="inline-block text-slate-600 hover:text-emerald-600 transition-all hover:translate-x-1 duration-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/#testimony"
                  className="inline-block text-slate-600 hover:text-emerald-600 transition-all hover:translate-x-1 duration-200">
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="inline-block text-slate-600 hover:text-emerald-600 transition-all hover:translate-x-1 duration-200">
                  FAQ & Informasi
                </a>
              </li>
            </ul>
          </div>

          {/* Portal Akses & Kontak (4 col) */}
          <div className="space-y-5 md:col-span-4">
            <h3 className="font-bold text-emerald-700 text-xs uppercase tracking-widest">
              Hubungi & Pendaftaran
            </h3>

            {/* Quick Access Links */}
            <div className="flex gap-3 pb-2">
              <Link
                to="/sign-in"
                className="group inline-flex flex-1 justify-between items-center bg-white shadow-sm px-4 py-2.5 border border-slate-200/80 hover:border-emerald-300 rounded-xl font-medium text-slate-700 hover:text-emerald-600 text-xs transition-all duration-300">
                <span>Masuk Akun</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/sign-up"
                className="group inline-flex flex-1 justify-between items-center bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2.5 border border-emerald-200 rounded-xl font-semibold text-emerald-700 text-xs transition-all duration-300">
                <span>Pendaftaran</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Contact Details */}
            <ul className="space-y-3 pt-1 text-slate-600 text-sm">
              <li className="group flex items-start gap-3">
                <div className="bg-white shadow-sm p-2 border border-slate-200 group-hover:border-emerald-300 rounded-xl text-emerald-600 transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-xs leading-relaxed">
                  Jl. Anggrek No. 32, Pondok Kacang Timur, Pondok Aren,
                  Tangerang Selatan
                </span>
              </li>
              <li className="group flex items-center gap-3">
                <div className="bg-white shadow-sm p-2 border border-slate-200 group-hover:border-emerald-300 rounded-xl text-emerald-600 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-xs">
                  +62 812-3456-7890 (WhatsApp Hotline)
                </span>
              </li>
              <li className="group flex items-center gap-3">
                <div className="bg-white shadow-sm p-2 border border-slate-200 group-hover:border-emerald-300 rounded-xl text-emerald-600 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-slate-600 text-xs">
                  info@abudzar.sch.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-200/80 my-6" />

        {/* Bottom Bar */}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} Pesantren Abu Dzar. All Rights
            Reserved.
          </p>
          <p className="flex items-center gap-1.5 bg-white shadow-sm px-3.5 py-1.5 border border-slate-200 rounded-full font-medium text-slate-600">
            <span>Barakallahu fiikum</span>
            <Heart className="fill-emerald-500 w-3.5 h-3.5 text-emerald-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
