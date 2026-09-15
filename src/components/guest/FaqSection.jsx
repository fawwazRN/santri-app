import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Bagaimana cara mendaftar sebagai santri baru?",
    a: 'Klik tombol "Daftar" untuk membuat akun, lengkapi formulir pendaftaran, lalu unggah dokumen (akta, kartu keluarga, ijazah). Tim pendaftaran akan menghubungi kamu via WhatsApp.',
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
    <section id="faq" className="mx-auto max-w-2xl">
      <h2 className="mb-4 font-bold text-2xl text-center">
        Pertanyaan yang Sering Diajukan
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
