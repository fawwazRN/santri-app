import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara mendaftar sebagai santri baru?",
    a: 'Klik tombol "Daftar" untuk membuat akun, lengkapi formulir pendaftaran, lalu unggah dokumen (akta, kartu keluarga, ijazah). Tim pendaftaran kami akan segera menghubungi kamu via WhatsApp.',
  },
  {
    q: "Apa saja syarat pendaftaran santri baru?",
    a: "Usia minimal 12 tahun, lulusan MI/SD, fotokopi akta kelahiran & kartu keluarga, ijazah, pas foto 3x4, serta mengikuti tes baca Al-Qur'an dan wawancara.",
  },
  {
    q: "Berapa biaya pendidikan di Pesantren Abu Dzar?",
    a: "Infaq pendidikan mulai Rp 350.000/bulan — sudah termasuk asrama, makan 3x sehari, laundry, dan ekstrakurikuler. Tersedia beasiswa prestasi dan keringanan bagi yatim/dhuafa.",
  },
  {
    q: "Apakah pesantren menyediakan asrama?",
    a: "Ya. Seluruh santri wajib tinggal di asrama dengan pendampingan musyrif/musyrifah 24 jam, jadwal belajar teratur, dan menu makanan bergizi.",
  },
  {
    q: "Program apa saja yang tersedia?",
    a: "Tahfidzul Qur'an, kajian kitab kuning, pendidikan formal MTs/MA, bahasa Arab & Inggris, serta ekstrakurikuler seperti panahan, renang, dan robotik.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative px-4 py-20 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="top-1/2 left-1/2 absolute bg-emerald-500/10 blur-[120px] rounded-full w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative space-y-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 dark:bg-emerald-950/50 backdrop-blur-sm px-4 py-1.5 border border-emerald-200/60 dark:border-emerald-800/50 rounded-full font-semibold text-emerald-800 dark:text-emerald-300 text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Pusat Informasi
          </span>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-3xl md:text-4xl tracking-tight">
            Pertanyaan yang{" "}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent">
              Sering Diajukan
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-400 text-sm md:text-base">
            Temukan jawaban lengkap seputar pendaftaran, program pembelajaran,
            dan fasilitas di Pesantren Abu Dzar.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="bg-white/70 dark:bg-slate-900/70 shadow-slate-200/50 shadow-xl dark:shadow-none backdrop-blur-md p-6 md:p-8 border border-emerald-100 dark:border-slate-800 rounded-3xl">
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="data-[state=open]:bg-emerald-50/40 dark:data-[state=open]:bg-emerald-950/20 px-5 border border-slate-100 data-[state=open]:border-emerald-500/30 dark:border-slate-800 rounded-2xl transition-all duration-200">
                <AccordionTrigger className="py-4 font-semibold text-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-slate-100 text-base text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
