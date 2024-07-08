import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function BtnDetail({id}) {
  return (
    <>
      <Link to={`/DetailContact/${id}`}>
        <Button className="btn btn-outline btn-primary pi pi-eye" />
      </Link>
    </>
  )
}