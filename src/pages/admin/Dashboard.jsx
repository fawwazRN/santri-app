import { Link } from "react-router";
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { title: "Total Santri", value: "1.247", icon: Users, note: "+12 bulan ini" },
  {
    title: "Pengajar Aktif",
    value: "85",
    icon: GraduationCap,
    note: "+2 bulan ini",
  },
  {
    title: "Pendaftar Baru",
    value: "34",
    icon: UserPlus,
    note: "menunggu verifikasi",
  },
  {
    title: "Infaq Bulan Ini",
    value: "Rp 87,5 jt",
    icon: Wallet,
    note: "+8% dari bulan lalu",
  },
];

const pendaftar = [
  {
    nama: "Fatimah Zahra",
    program: "Tahfidz",
    tanggal: "18 Jun",
    status: "Menunggu",
  },
  {
    nama: "Ali Murtadho",
    program: "MTs",
    tanggal: "17 Jun",
    status: "Diterima",
  },
  {
    nama: "Halimah Sa'diyah",
    program: "MA",
    tanggal: "16 Jun",
    status: "Diterima",
  },
  {
    nama: "Bilal Ramadhan",
    program: "Tahfidz",
    tanggal: "15 Jun",
    status: "Ditolak",
  },
];

const agenda = [
  {
    tanggal: "20",
    bulan: "Jun",
    judul: "Tes Seleksi Santri Baru Gel. 2",
    tempat: "Aula Masjid",
  },
  {
    tanggal: "25",
    bulan: "Jun",
    judul: "Mukhayyam Wisata Tahfidz",
    tempat: "Puncak, Bogor",
  },
  {
    tanggal: "01",
    bulan: "Jul",
    judul: "Awal Tahun Ajaran & Khataman",
    tempat: "Masjid Utama",
  },
];

const statusStyle = {
  Diterima: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Menunggu: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  Ditolak: "bg-red-100 text-red-700 hover:bg-red-100",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Sapaan */}
      <div>
        <h1 className="font-bold text-2xl">
          Ahlan wa sahlan, Ustadz Abdullah 👋
        </h1>
        <p className="text-muted-foreground text-sm">
          Berikut ringkasan aktivitas pesantren hari ini.
        </p>
      </div>

      {/* Kartu statistik */}
      <div className="gap-4 grid sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title}>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-muted-foreground text-sm">
                {s.title}
              </CardTitle>
              <div className="flex justify-center items-center bg-emerald-100 rounded-lg w-9 h-9 text-emerald-700">
                <s.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-2xl">{s.value}</p>
              <p className="text-muted-foreground text-xs">{s.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pendaftar + Agenda */}
      <div className="gap-4 grid lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-emerald-600" />
              Pendaftar Terbaru
            </CardTitle>
            <CardDescription>
              Santri baru yang mendaftar minggu ini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendaftar.map((p) => (
                  <TableRow key={p.nama}>
                    <TableCell className="font-medium">{p.nama}</TableCell>
                    <TableCell>{p.program}</TableCell>
                    <TableCell>{p.tanggal}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant="secondary"
                        className={statusStyle[p.status]}>
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-emerald-600" />
              Agenda Terdekat
            </CardTitle>
            <CardDescription>Kegiatan yang akan datang.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {agenda.map((a) => (
              <div key={a.judul} className="flex items-center gap-4">
                <div className="flex flex-col justify-center items-center bg-emerald-600 rounded-lg w-12 h-12 text-white shrink-0">
                  <span className="font-bold text-sm leading-none">
                    {a.tanggal}
                  </span>
                  <span className="text-[10px] uppercase">{a.bulan}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{a.judul}</p>
                  <p className="text-muted-foreground text-xs">{a.tempat}</p>
                </div>
              </div>
            ))}

            <Button
              variant="link"
              asChild
              className="p-0 h-auto text-emerald-600">
              <Link to="/admin/santri">
                Kelola data santri <ArrowUpRight className="w-3 h-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
