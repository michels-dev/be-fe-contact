import { Button } from "primereact/button"
import { Link } from "react-router-dom"

export default function BtnAdd() {

  return(
    <>
      <Link to="/FormContact">
        <Button label="Tambah Data" className="btn btn-info text-white" />
      </Link>
    </>
  )
}