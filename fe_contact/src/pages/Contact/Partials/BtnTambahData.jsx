import { Button } from "primereact/button";

export default function BtnTambahData({ handleCreate }) {
  return (
    <Button
      className="btn bg-blue-800 text-white"
      label="Tambah Data"
      onClick={handleCreate}
    />
  );
}
