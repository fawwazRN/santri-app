import {
  BookOpen,
  GraduationCap,
  Languages,
  Award,
  Users,
  GraduationCapIcon,
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const programs = [
  {
    icon: BookOpen,
    title: "Tahfidzul Qur'an",
    desc: "Menghafal Al-Qur'an 30 juz dengan metode talaqqi teruji dan bimbingan murajaah harian yang intensif.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan Formal",
    desc: "MTs & MA Terakreditasi A dengan integrasi kurikulum diniyah dan sains modern yang seimbang.",
  },
  {
    icon: Languages,
    title: "Bahasa Arab & Inggris",
    desc: "Ekosistem bilingual aktif untuk melatih kepercayaan diri dan kecakapan komunikasi global.",
  },
];

const stats = [
  { value: "1.200+", label: "Santri Aktif", icon: Users },
  { value: "85", label: "Pengajar Profesional", icon: Award },
  { value: "5.000+", label: "Alumni Tersebar", icon: GraduationCapIcon },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-16 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="top-1/2 left-1/2 absolute bg-emerald-500/10 blur-[120px] rounded-full w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative space-y-12 mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="space-y-4 mx-auto max-w-3xl text-center">
          <span className="inline-block bg-emerald-100/80 backdrop-blur-sm px-4 py-1.5 border border-emerald-200 rounded-full font-semibold text-emerald-800 text-xs uppercase tracking-wider">
            Membangun Generasi Rabbani
          </span>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-4xl md:text-5xl tracking-tight">
            Tentang{" "}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent">
              Pesantren Abu Dzar
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Berdiri sejak{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              1985
            </span>
            , kami berkomitmen mencetak kader pemimpin berakhlak mulia melalui
            perpaduan keilmuan Islam otentik dan wawasan global.
          </p>
        </div>

        {/* Hero Image / Video Banner with Luxury Frame */}
        <div className="group relative bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent shadow-2xl backdrop-blur-xl p-2 rounded-3xl">
          <div className="shadow-inner border border-emerald-500/20 rounded-2xl overflow-hidden">
            <AspectRatio ratio={21 / 9}>
              <img
                src="https://picsum.photos/1200/514"
                alt="Kegiatan Santri Pesantren Abu Dzar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </AspectRatio>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex items-center space-x-4 bg-white/70 dark:bg-slate-900/70 shadow-emerald-900/5 shadow-xl backdrop-blur-md p-6 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/30 shadow-lg p-3.5 rounded-xl text-white">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="bg-clip-text bg-gradient-to-r from-emerald-700 dark:from-emerald-400 to-teal-600 dark:to-teal-300 font-black text-transparent text-3xl">
                  {stat.value}
                </p>
                <p className="font-medium text-slate-500 dark:text-slate-400 text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 pt-4">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-900 shadow-slate-200/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 dark:shadow-none p-8 border border-slate-100 dark:border-slate-800 rounded-3xl transition-all hover:-translate-y-1.5 duration-300">
              {/* Card Top Icon */}
              <div className="inline-flex justify-center items-center bg-emerald-50 dark:bg-emerald-950/50 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600 shadow-md mb-6 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl w-14 h-14 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-all duration-300">
                <p.icon className="w-7 h-7" />
              </div>

              <h3 className="mb-3 font-bold text-slate-900 dark:group-hover:text-emerald-400 dark:text-white group-hover:text-emerald-600 text-xl transition-colors">
                {p.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="bg-slate-200 dark:bg-slate-800 group-hover:bg-emerald-500 mt-6 rounded-full w-8 group-hover:w-16 h-1 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
