import { useState } from 'react';
import {Button} from '@mui/material';
import Form from './components/Modal/FormModal';
import './App.css';

function App(){

  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }
  return (
    <div>
       <h1>User Details Modal</h1>

       <Button
         onClick={handleOpen}
         variant='contained'
        >
            Open Form
      </Button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div 
            onClick={(e) => e.stopPropagation()}
          >
              <Form handleClose={handleClose} /> 
          </div>
        </div>
      )}
    </div>
  )
}

export default App; 