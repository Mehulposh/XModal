import { useState } from 'react';
import {Modal,Button,Box} from '@mui/material';
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
        onClick={() => setIsModalOpen(false)}
      >
        <Box onClick={(e) =>  e.stopPropagation()}>
          <Form setFunction={setIsModalOpen}/>
        </Box>
      </Modal>
    </div>
  )
}

export default App; 