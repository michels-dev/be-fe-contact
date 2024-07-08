import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import FormContact from './pages/Contact/FormContact';
import DetailContact from './pages/Contact/DetailContact';
import EditContact from './pages/Contact/EditContact';

function App() {
  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <Navbar home="Contact-App" />
          <div className='flex-1 p-4 overflow-auto'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/FormContact' element={<FormContact />} />
              <Route path='/DetailContact/:id' element={<DetailContact />} />
              <Route path='/EditContact/:id' element={<EditContact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
