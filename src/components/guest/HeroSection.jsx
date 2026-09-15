import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HeroSection() {
  return (
    <section id="home">
      <Card className="shadow-lg border-none overflow-hidden">
        <CardContent className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://picsum.photos/1200/675" // ganti: /images/hero.jpg
              alt="Masjid Pesantren Abu Dzar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
            <div className="bottom-0 absolute inset-x-0 space-y-4 p-6 md:p-10 text-white">
              <h1 className="font-bold text-3xl md:text-4xl">
                Selamat Datang di Pesantren Abu Dzar
              </h1>
              <p className="max-w-xl text-emerald-100">
                Mencetak generasi Qur'ani yang berilmu, berakhlak mulia, dan
                siap membangun umat.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                  <Link to="/sign-up">Daftar Sekarang</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 border-white/40 text-white hover:text-white">
                  <a href="/#about">Selengkapnya</a>
                </Button>
              </div>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
    </section>
  );
}
