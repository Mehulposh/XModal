import { useState } from 'react';
import './Form.css';
import { Button } from '@mui/material';


function Form({handleClose}){
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
    })

    const checkEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailPattern.test(email);
    }

    const checkDate = (date) => {
        const today = new Date();

        const formDate = new Date(date);

        return formDate <= today;
    }

    const checkPhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/; // Ensures exactly 10 digits
        
        return phonePattern.test(phone);
  };

    const handleChange = (e) => {
        const {name,value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!checkPhone(formData.phone)){
            alert('Invalid phone number. Please enter a 10-digit phone number');
            return false;
        }

        else if(!checkEmail(formData.email)){
            alert('Invalid email. Please check your email address.')
            return false;
        }

        else if(!checkDate(formData.dob)){
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return false;
        }

        else {
            handleClose();
        }
    };

    return(
        <div  className="modal">
            <h2>Fill Details</h2>
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username:</label>
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
                    <label htmlFor='email'>Email Address:</label>
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
                    
                    <label htmlFor='phone'>Phone Number:</label>
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
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}


export default Form;