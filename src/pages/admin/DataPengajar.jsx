import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pengajar = [
  { nama: "Ust. Muhammad Yusuf", bidang: "Tahfidzul Qur'an", status: "Tetap" },
  { nama: "Ustzh. Khadijah", bidang: "Bahasa Arab", status: "Tetap" },
  { nama: "Ust. Abdul Karim", bidang: "Fiqih & Kitab Kuning", status: "Tetap" },
  { nama: "Ustzh. Aminah", bidang: "Matematika", status: "Honorer" },
  { nama: "Ust. Rifqi Hakim", bidang: "Bahasa Inggris", status: "Honorer" },
  { nama: "Ust. Salman", bidang: "PJOK & Panahan", status: "Tetap" },
];

const statusStyle = {
  Tetap: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Honorer: "bg-amber-100 text-amber-700 hover:bg-amber-100",
};

export default function DataPengajar() {
  return (
    <div className="space-y-6">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2">
        <div>
          <h1 className="font-bold text-2xl">Data Pengajar</h1>
          <p className="text-muted-foreground text-sm">
            Ustadz & ustadzah yang mengajar di pesantren.
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4" /> Tambah Pengajar
        </Button>
      </div>

      <div className="gap-4 grid sm:grid-cols-2 xl:grid-cols-3">
        {pengajar.map((p) => (
          <Card key={p.nama}>
            <CardHeader className="items-center text-center">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={`https://i.pravatar.cc/150?u=${p.nama}`}
                  alt={p.nama}
                />
                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                  {p.nama.split(" ")[1]?.[0] ?? "U"}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base">{p.nama}</CardTitle>
              <p className="text-muted-foreground text-sm">{p.bidang}</p>
              <Badge variant="secondary" className={statusStyle[p.status]}>
                {p.status}
              </Badge>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
