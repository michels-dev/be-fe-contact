import { Button } from "primereact/button";

export default function BtnUpdate({handleUpdate}) {
  return (
    <>
      <Button
        className="btn bg-blue-800 text-white"
        label="Update Data"
        onClick={handleUpdate}
      />
    </>
  )
}