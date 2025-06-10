

function Form(){

    return(
        <div  className="modal">
            <h2>Fill Details</h2>
            <div className="modal-content">
                <form>
                    <label for='username'>UserName:</label>
                    <br/>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        required
                    />
                    <br/>
                    <br/>
                    <label for='email'>Email:</label>
                    <br/>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        required
                    />
                    <br/>
                    <br/>
                    
                    <label for='phone'>Phone:</label>
                    <br/>
                    <input 
                        type="text"
                        name="phone"
                        id="phone"
                        required
                    />
                    <br/>
                    <br/>
                    <label for='dob'>Date of Birth:</label>
                    <br/>
                    <input 
                        type="text"
                        name="dob"
                        id="dob"
                        required
                    />
                    <br/>
                    <br/>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Form;