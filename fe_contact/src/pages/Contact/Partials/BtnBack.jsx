import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function BtnBack() {
  return (
    <>
      <Link to="/Contact">
      <Button
        className="btn bg-white w-full"
        label="Kembali"
      />
      </Link>
    </>
  )
}