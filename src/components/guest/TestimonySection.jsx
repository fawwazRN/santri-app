import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Fauzan",
    role: "Santri Kelas XI",
    text: "Alhamdulillah, di Abu Dzar saya bisa menghafal 15 juz dalam 3 tahun. Para ustadz sangat sabar membimbing hafalan kami setiap hari.",
  },
  {
    name: "Ummu Kulthum",
    role: "Wali Santri",
    text: "Anak saya jadi rajin shalat berjamaah dan akhlaknya semakin lembut. Kami sangat tenang menitipkan anak di lembaga terpercaya ini.",
  },
  {
    name: "Muhammad Rizki",
    role: "Alumni 2019",
    text: "Bekal ilmu agama dan bahasa dari pesantren membuat saya percaya diri melanjutkan studi hingga lulus dengan prestasi memuaskan.",
  },
];

export default function TestimonySection() {
  return (
    <section id="testimony" className="relative px-4 py-20 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="top-1/2 left-1/2 absolute bg-teal-500/10 blur-[140px] rounded-full w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative space-y-12 mx-auto max-w-4xl">
        {/* Header */}
        <div className="space-y-3 text-center">
          <span className="inline-block bg-emerald-100/80 dark:bg-emerald-950/50 backdrop-blur-sm px-4 py-1.5 border border-emerald-200/60 dark:border-emerald-800/50 rounded-full font-semibold text-emerald-800 dark:text-emerald-300 text-xs uppercase tracking-wider">
            Jejak Keberhasilan
          </span>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl md:text-4xl tracking-tight">
            Kata Mereka{" "}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent">
              Tentang Kami
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <Carousel className="mx-auto w-full max-w-2xl">
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <Card className="bg-white/70 dark:bg-slate-900/70 shadow-slate-200/50 shadow-xl dark:shadow-none backdrop-blur-xl p-2 border border-emerald-100 dark:border-slate-800 rounded-3xl overflow-hidden">
                  <CardContent className="relative flex flex-col items-center gap-6 p-8 text-center">
                    {/* Decorative Watermark Icon */}
                    <Quote className="top-6 left-6 absolute w-12 h-12 text-emerald-500/10 rotate-180" />

                    {/* Star Rating */}
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-amber-400 w-4 h-4" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="z-10 relative text-slate-700 dark:text-slate-200 text-base md:text-lg italic leading-relaxed">
                      "{t.text}"
                    </p>

                    {/* User Profile */}
                    <div className="flex flex-col items-center gap-3 pt-2">
                      <Avatar className="shadow-md border-2 border-emerald-500/30 w-14 h-14">
                        <AvatarImage
                          src={`https://i.pravatar.cc/150?u=${t.name}`}
                          alt={t.name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-white">
                          {t.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-base">
                          {t.name}
                        </p>
                        <p className="font-medium text-emerald-600 dark:text-emerald-400 text-xs">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden -left-12 sm:flex hover:bg-emerald-50 border-emerald-200 dark:border-slate-800 hover:text-emerald-600" />
          <CarouselNext className="hidden -right-12 sm:flex hover:bg-emerald-50 border-emerald-200 dark:border-slate-800 hover:text-emerald-600" />
        </Carousel>
      </div>
    </section>
  );
}
