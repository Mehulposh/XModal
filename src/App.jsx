import { useState } from 'react';
import {Modal,Button} from '@mui/material';
import Form from './components/Modal/FormModal';

function App(){

  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
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

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        BackdropProps={{
          style: { cursor: 'pointer' }, // Ensure the backdrop is clickable
        }}
      >
        <Form setFunction={setIsModalOpen}/>
      </Modal>
    </div>
  )
}

export default App; 