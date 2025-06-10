import { useState } from 'react';
import {Modal} from '@mui/material';
import Form from './components/Modal/FormModal';

function App(){

  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  }
  return (
    <div>
       <h1>User Details Modal</h1>

       <button onClick={handleOpen}>Open Form</button>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
       
      >
        <Form />
      </Modal>
    </div>
  )
}

export default App; 