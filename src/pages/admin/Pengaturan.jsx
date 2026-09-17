import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Pengaturan() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Pengaturan</h1>
        <p className="text-muted-foreground text-sm">
          Ubah informasi profil pesantren yang tampil di website.
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Profil Pesantren</CardTitle>
          <CardDescription>
            Informasi ini akan tampil di halaman About & Footer website.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nama">Nama Pesantren</Label>
            <Input id="nama" defaultValue="Pesantren Abu Dzar" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Resmi</Label>
            <Input
              id="email"
              type="email"
              defaultValue="info@Abu Dzar.sch.id"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telepon">No. Telepon</Label>
            <Input id="telepon" defaultValue="+62 812-3456-7890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="alamat">Alamat</Label>
            <Textarea
              id="alamat"
              rows={3}
              defaultValue="Jl. Kebun Jeruk No. 27, Jakarta Barat"
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Batal</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
