import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BtnEdit from './Partials/BtnEdit';
import { useEffect, useState } from 'react';
import { getAllContacts } from '../../components/api/apiClientContacts';
import BtnDetail from './Partials/BtnDetail';
import BtnDelete from './Partials/BtnDelete';

export default function TableContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getAllContacts();
        const contactsWithSeqId = data.map((contact, index) => ({
          ...contact,
          seqId: index + 1,
        }));
        console.log('Fetched contacts with sequential ID:', contactsWithSeqId);
        setContacts(contactsWithSeqId);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const actionButton = (rowData) => (
    <div className='flex gap-2'>
      <BtnDetail id={rowData.id} />
      <BtnEdit id={rowData.id} />
      <BtnDelete id={rowData.id} onDelete={handleDelete} />
    </div>
  );

  return (
    <div className="card">
      <DataTable
        value={contacts}
        paginator rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}>
        <Column field="seqId" header="ID" style={{ width: '25%' }}></Column>
        <Column field="name" header="Name" style={{ width: '25%' }}></Column>
        <Column field="mobile" header="Nomor Handphone" style={{ width: '25%' }}></Column>
        <Column body={actionButton} header="Actions" style={{ width: '20%' }}></Column>
      </DataTable>
    </div>
  );
}
