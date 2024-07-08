import { Card } from "primereact/card";
import EditDataInput from "../../pages/Contact/EditDataInput";

export default function EditCard() {
  return (
    <div className="w-full p-4">
      <h1 className="font-semibold text-2xl mb-4">Form Edit Data Contact</h1>
      <div className="flex justify-center items-center w-full">
        <Card className="flex flex-col mt-2 bg-white w-full shadow-lg border border-gray-200 p-4">
          <EditDataInput />
        </Card>
      </div>
    </div>
  );
}
