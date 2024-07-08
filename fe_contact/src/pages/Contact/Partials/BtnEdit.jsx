import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function BtnEdit({id}) {
  return (
    <>
      <Link to={`/EditContact/${id}`}>
        <Button className="btn btn-outline btn-success pi pi-pencil" />
      </Link>
    </>
  )
}