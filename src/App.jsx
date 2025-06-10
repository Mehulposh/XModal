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
       sx={{
        position: 'absolute',
        left: '30%',
        top: '15%',
       
       }}
      >
        <Form setFunction={setIsModalOpen}/>
      </Modal>
    </div>
  )
}

export default App; 