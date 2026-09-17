import { Link } from "react-router";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto px-4 py-8 md:py-12 max-w-7xl overflow-hidden">
      <div className="relative bg-slate-950 shadow-2xl border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden">
        <AspectRatio
          ratio={16 / 9}
          className="relative min-h-[500px] md:min-h-[600px]">
          {/* Background Image */}
          <img
            src="https://picsum.photos/1200/675"
            alt="Masjid Pesantren Abu Dzar"
            className="opacity-60 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out transform"
          />

          {/* Cinematic Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Hero Content Layer */}
          <div className="absolute inset-0 flex items-end md:items-center p-6 md:p-16">
            <div className="space-y-6 max-w-2xl text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 border border-emerald-500/30 rounded-full font-semibold text-emerald-300 text-xs tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Penerimaan Santri Baru TA 2026/2027</span>
              </div>

              {/* Title */}
              <h1 className="font-black text-3xl sm:text-4xl md:text-6xl leading-[1.15] tracking-tight">
                Mendidik Generasi <br />
                <span className="bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 text-transparent">
                  Qur'ani & Berilmu
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-xl font-normal text-slate-300 text-base md:text-lg leading-relaxed">
                Pesantren Abu Dzar memadukan keilmuan Islam otentik, kekuatan
                hafalan Al-Qur'an, dan wawasan global untuk membentuk karakter
                pemimpin masa depan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 hover:from-emerald-600 to-teal-500 hover:to-teal-600 shadow-emerald-500/25 shadow-xl px-7 rounded-xl font-semibold text-white">
                  <Link to="/sign-up" className="flex items-center gap-2">
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20 rounded-xl font-medium text-white transition-all">
                  <a href="/#about" className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-emerald-400" />
                    <span>Jelajahi Profil</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </section>
  );
}
