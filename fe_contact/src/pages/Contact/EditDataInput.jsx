import React, { useEffect, useState } from 'react';
import { InputText } from "primereact/inputtext";
import { useNavigate, useParams } from 'react-router-dom';
import { getUpdateContact, updateContact } from '../../components/api/apiClientContacts';
import BtnUpdate from './Partials/BtnUpdate';
import BtnBack from './Partials/BtnBack';

export default function EditDataInput() {
    const { id } = useParams();
    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const data = await getUpdateContact(id);
                console.log('Fetch contact', data);
                setContact(data);
            } catch (error) {
                console.error('Error fetching contact', error);
            }
        };
        if(id) {
            fetchContact();
        }
    }, [id]);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [id]: value
        }));
    };

    const handleUpdate= async () => {
        try {
            const updatedContact = await updateContact(id, contact);
            console.log('Contact upated', updatedContact);
            navigate('/Contact');
        } catch (error) {
            console.error('Error updating contact', error);
        }
    };

    return (
        <div className="flex justify-content-center p-4">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2">Name</label>
                    <InputText id="name" aria-describedby="name-help" className="p-inputtext" value={contact.name} onChange={handleChange}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <InputText id="email" aria-describedby="email-help" className="p-inputtext" value={contact.email} onChange={handleChange}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-2">Phone Number</label>
                    <InputText id="mobile" aria-describedby="phone-help" className="p-inputtext" value={contact.mobile} onChange={handleChange}/>
                </div>
                <BtnUpdate handleUpdate={handleUpdate} />
                <BtnBack />
            </div>
        </div>
    );
}
