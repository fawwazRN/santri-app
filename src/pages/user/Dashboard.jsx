import { BookOpen, CheckCircle2, Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  { title: "Hafalan", value: "15 Juz", icon: BookOpen },
  { title: "Target Tahun Ini", value: "20 Juz", icon: Target },
  { title: "Setoran Selesai", value: "128 Setoran", icon: CheckCircle2 },
  { title: "Jadwal Berikutnya", value: "Besok, 06.30", icon: Clock },
];

const riwayat = [
  { surah: "An-Nahl", ayat: "78 - 128", status: "Lulus" },
  { surah: "Al-Isra", ayat: "1 - 45", status: "Lulus" },
  { surah: "Al-Isra", ayat: "46 - 111", status: "Ulang" },
  { surah: "Al-Kahfi", ayat: "1 - 40", status: "Proses" },
];

const statusStyle = {
  Lulus: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Ulang: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  Proses: "bg-blue-100 text-blue-700 hover:bg-blue-100",
};

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Ahlan, Ahmad Fauzan 👋</h1>
        <p className="text-muted-foreground text-sm">
          Progress hafalan kamu bulan ini. Semangat!
        </p>
      </div>

      <div className="gap-4 grid sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title}>
            <CardHeader className="flex flex-row justify-between items-center pb-2">
              <CardTitle className="text-muted-foreground text-sm">
                {s.title}
              </CardTitle>
              <div className="flex justify-center items-center bg-emerald-100 rounded-lg w-9 h-9 text-emerald-700">
                <s.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-2xl">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Riwayat Setoran Terakhir</CardTitle>
          <CardDescription>Hasil setoran hafalanmu minggu ini.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Surah</TableHead>
                <TableHead>Ayat</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riwayat.map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{r.surah}</TableCell>
                  <TableCell>{r.ayat}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant="secondary"
                      className={statusStyle[r.status]}>
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
