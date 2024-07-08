import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import BtnTambahData from './Partials/BtnTambahData';
import { createContact } from '../../components/api/apiClientContacts';
import { useNavigate } from 'react-router-dom';
import BtnBack from './Partials/BtnBack';

export default function DataInput() {
  const [contact, setContact] = useState({ name: '', email: '', mobile: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact({ ...contact, [id]: value });
  };

  const handleCreate = () => {
    createContact(contact)
      .then(response => {
        console.log('Contact created!', response);
        navigate('/Contact');
      })
      .catch(err => {
        setError(err.response.data.error);
      });
  };

  return (
    <div className="flex justify-content-center p-4">
      <div className="flex flex-col gap-4 w-full">
        {error && <div className='text-red-500'>{error}</div>}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">Name</label>
          <InputText
            id="name"
            value={contact.name}
            onChange={handleChange}
            aria-describedby="name-help"
            className="p-inputtext"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email</label>
          <InputText
            id="email"
            value={contact.email}
            onChange={handleChange}
            aria-describedby="email-help"
            className="p-inputtext"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobile" className="mb-2">Phone Number</label>
          <InputText
            id="mobile"
            value={contact.mobile}
            onChange={handleChange}
            aria-describedby="mobile-help"
            className="p-inputtext"
          />
        </div>
        <BtnTambahData handleCreate={handleCreate} />
        <BtnBack />
      </div>
    </div>
  );
}
