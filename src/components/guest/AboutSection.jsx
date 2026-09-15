import { BookOpen, GraduationCap, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const programs = [
  {
    icon: BookOpen,
    title: "Tahfidzul Qur'an",
    desc: "Menghafal Al-Qur'an 30 juz dengan metode talaqqi dan murajaah harian.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan Formal",
    desc: "MTs & MA terakreditasi dengan kurikulum terpadu diniyah dan umum.",
  },
  {
    icon: Languages,
    title: "Bahasa Arab & Inggris",
    desc: "Muhadharah dan lingkungan bilingual untuk membiasakan aktif berbahasa.",
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <Card>
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl">Tentang Pesantren</CardTitle>
          <CardDescription className="max-w-2xl">
            Berdiri sejak 1985, Pesantren Abu Dzar adalah lembaga pendidikan
            Islam yang memadukan ilmu agama dan umum dengan bimbingan
            ustadz/ustadzah berpengalaman.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <AspectRatio ratio={21 / 9}>
            <img
              src="https://picsum.photos/1200/514" // ganti: /images/kegiatan.jpg
              alt="Kegiatan santri"
              className="rounded-md w-full h-full object-cover"
            />
          </AspectRatio>

          {/* Program unggulan */}
          <div className="gap-4 grid md:grid-cols-3">
            {programs.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <div className="flex justify-center items-center bg-emerald-100 mb-2 rounded-lg w-10 h-10 text-emerald-700">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {p.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Statistik */}
          <div className="gap-4 grid grid-cols-3 bg-emerald-50 p-6 rounded-lg text-center">
            <div>
              <p className="font-bold text-emerald-700 text-2xl">1.200+</p>
              <p className="text-muted-foreground text-sm">Santri Aktif</p>
            </div>
            <div>
              <p className="font-bold text-emerald-700 text-2xl">85</p>
              <p className="text-muted-foreground text-sm">Ustadz / Ustadzah</p>
            </div>
            <div>
              <p className="font-bold text-emerald-700 text-2xl">5.000+</p>
              <p className="text-muted-foreground text-sm">Alumni</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
