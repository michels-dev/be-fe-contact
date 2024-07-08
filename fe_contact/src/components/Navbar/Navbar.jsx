import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

export default function Navbar({ home }) {
  const [search, setSearch] = useState('');

  return (
    <div className='navbar bg-white w-full flex px-4 h-16 top-0 text-dark items-center justify-between shadow-lg shadow-gray-200'>
      <div className='flex items-center'>
        <Link to='/' className='text-lg font-semibold ml-2'>{home}</Link>
      </div>
      <div className='flex items-center'>
        <InputText value={search} onChange={(e) => setSearch(e.target.search)} placeholder='Search' typeof='text'  className='border border-gray-500 p-inputtext-sm'/>
      </div>
    </div>
  );
}
