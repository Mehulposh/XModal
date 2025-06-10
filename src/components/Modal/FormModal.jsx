import { useState } from 'react';
import './Form.css';
import { Button } from '@mui/material';


function Form(){
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
    })

    const handleChange = (e) => {
        const {key,value} = e.target;

        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));
    };


    return(
        <div  className="modal">
            <h2>Fill Details</h2>
            <div className="modal-content">
                <form>
                    <label htmlFor='username'>UserName:</label>
                    <br/>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>
                    
                    <label htmlFor='phone'>Phone:</label>
                    <br/>
                    <input 
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <br/>
                    <input 
                        type="date"
                        name="dob"
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <br/>
                    <Button 
                        className="submit-button"
                        variant='contained'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}


export default Form;