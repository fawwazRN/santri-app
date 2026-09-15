import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ahmad Fauzan",
    role: "Santri Kelas XI",
    text: "Alhamdulillah, di Abu Dzar saya bisa menghafal 15 juz dalam 3 tahun. Para ustadz sangat sabar membimbing hafalan kami setiap hari.",
  },
  {
    name: "Ummu Kulthum",
    role: "Wali Santri",
    text: "Anak saya jadi rajin shalat berjamaah dan akhlaknya semakin lembut. Kami sangat tenang menitipkan anak di sini.",
  },
  {
    name: "Muhammad Rizki",
    role: "Alumni 2019",
    text: "Bekal ilmu agama dan bahasa dari pesantren membuat saya percaya diri melanjutkan studi hingga lulus dengan prestasi.",
  },
];

export default function TestimonySection() {
  return (
    <section id="testimony">
      <h2 className="mb-4 font-bold text-2xl text-center">
        Kata Mereka Tentang Kami
      </h2>

      <Carousel className="mx-auto max-w-xl">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.name}>
              <Card>
                <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?u=${t.name}`}
                      alt={t.name}
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground">"{t.text}"</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-emerald-600 text-sm">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
