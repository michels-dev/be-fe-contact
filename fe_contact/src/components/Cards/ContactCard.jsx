import { Card } from "primereact/card";
import TableContact from "../../pages/Contact/TableContact";
import BtnAdd from "../../pages/Contact/Partials/BtnAdd";

export default function ContactCard() {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <Card className="flex flex-col mt-2 bg-white w-full shadow-lg border border-gray-200 p-4">
          <BtnAdd />
          <TableContact />
        </Card>
      </div>
    </>
  );
}
