import { useState } from "react";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const santri = [
  {
    nis: "2401",
    nama: "Ahmad Fauzan",
    kelas: "XI Tahfidz",
    wali: "Bpk. Hasan Basri",
    status: "Aktif",
  },
  {
    nis: "2402",
    nama: "Ummu Kulthum",
    kelas: "X Tahfidz",
    wali: "Bpk. Ridwan",
    status: "Aktif",
  },
  {
    nis: "2403",
    nama: "Muhammad Rizki",
    kelas: "MA III",
    wali: "Bpk. Soleh",
    status: "Cuti",
  },
  {
    nis: "2301",
    nama: "Zaid Abdullah",
    kelas: "MA II",
    wali: "Bpk. Karim",
    status: "Aktif",
  },
  {
    nis: "2302",
    nama: "Aisyah Humaira",
    kelas: "XII Tahfidz",
    wali: "Bpk. Fauzi",
    status: "Aktif",
  },
  {
    nis: "2201",
    nama: "Ibrahim Musa",
    kelas: "Alumni",
    wali: "Bpk. Yusuf",
    status: "Alumni",
  },
  {
    nis: "2404",
    nama: "Maryam Azizah",
    kelas: "X Tahfidz",
    wali: "Bpk. Anwar",
    status: "Aktif",
  },
  {
    nis: "2105",
    nama: "Ismail Hakim",
    kelas: "Alumni",
    wali: "Bpk. Rahmat",
    status: "Keluar",
  },
];

const statusStyle = {
  Aktif: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Cuti: "bg-amber-100 text-amber-700 hover:bg-amber-100",
  Alumni: "outline",
  Keluar: "bg-red-100 text-red-700 hover:bg-red-100",
};

export default function DataSantri() {
  const [search, setSearch] = useState("");

  const filtered = santri.filter(
    (s) =>
      s.nama.toLowerCase().includes(search.toLowerCase()) ||
      s.nis.includes(search),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Data Santri</h1>
        <p className="text-muted-foreground text-sm">
          Kelola seluruh data santri Pesantren Abu Dzar.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Santri</CardTitle>
          <CardDescription>
            Menampilkan {filtered.length} dari {santri.length} santri.
          </CardDescription>

          {/* Toolbar: cari + tambah */}
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2 pt-2">
            <div className="relative w-full sm:max-w-xs">
              <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama / NIS..."
                className="pl-8"
              />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4" /> Tambah Santri
            </Button>
          </div>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NIS</TableHead>
                <TableHead>Nama Santri</TableHead>
                <TableHead>Kelas / Program</TableHead>
                <TableHead>Wali</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((s) => (
                <TableRow key={s.nis}>
                  <TableCell className="font-mono text-xs">{s.nis}</TableCell>
                  <TableCell className="font-medium">{s.nama}</TableCell>
                  <TableCell>{s.kelas}</TableCell>
                  <TableCell>{s.wali}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={statusStyle[s.status]}>
                      {s.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {/* Kalau hasil pencarian kosong */}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="py-8 text-muted-foreground text-center">
                    Santri tidak ditemukan 🤷
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
