import { Card } from "primereact/card";
import DataInput from "../../pages/Contact/DataInput";

export default function FormCard() {
  return (
    <div className="w-full p-4">
      <h1 className="font-semibold text-2xl mb-4">Form Add Data Contact</h1>
      <div className="flex justify-center items-center w-full">
        <Card className="flex flex-col mt-2 bg-white w-full shadow-lg border border-gray-200 p-4">
          <DataInput />
        </Card>
      </div>
    </div>
  );
}
