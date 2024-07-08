import { Button } from "primereact/button";
import { deleteContact } from "../../../components/api/apiClientContacts";
import { useNavigate } from "react-router-dom";

export default function BtnDelete({ id, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      onDelete(id);
      navigate('/Contact')
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

  return (
    <>
      <Button
        className="btn btn-outline btn-error pi pi-trash"
        onClick={handleDelete}
      />
    </>
  );
}
