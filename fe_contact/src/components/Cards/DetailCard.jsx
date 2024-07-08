import { Card } from "primereact/card";
import DetailDataInput from "../../pages/Contact/DetailDataInput";

export default function DetailCard() {
  return (
    <>
      <div className="w-full p-4">
      <h1 className="font-semibold text-2xl mb-4">Detail Data Contact</h1>
        <div className="flex justify-center items-center w-full">
          <Card className="flex flex-col bg-white w-full shadow-lg border border-gray-200 p-4">
            <DetailDataInput />
          </Card>
        </div>
      </div>
    </>
  )
}