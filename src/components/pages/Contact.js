import React,{ useState } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com'
// import apiKeys from '../apikeys'


export default function Contact() {
     // Create state variables for the fields in the form
      // We are also setting their initial values to an empty string
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [textArea, setTextArea] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'textArea') {
          setTextArea(inputValue);
        }
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the Name is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email Is Invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        } 
        if (!name || !textArea){
          setErrorMessage('Name and Text Area Cannot Be Left Blank')
        }
        // if (!checkPassword(password)) {
        //   setErrorMessage(
        //     `Choose a more secure password for the account: ${userName}`
        //   );
        //   return;
        // }
        
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setTextArea('');
      };
  return (
   
    <div className="sizing">
      <h1>Contact Page</h1>
      <form>
               
                  <div className="contactText">
                        <label class="text" id="email">Email:</label>
                        <input value={email} type="text" onChange={handleInputChange} id="email"
                        name="email"/>
                        </div>
                    <div className="contactText">
                        <label class="text" for="name">Name:</label>
                        <input value={name} type="text" onChange={handleInputChange} id="name" name="name"/>
                        </div>
                      <div className="contactText">
                        <label class="text" for="name">Message:</label>
                        <textarea value={textArea} id="txtid" onChange={handleInputChange} name="textArea" rows="4" cols="50" maxlength="200"></textarea>
                      </div>


                    
                    
               
                <div class="text-center">
                    <button type="submit" onClick={handleFormSubmit}>SEND</button>
                </div>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>)}
    </div>
    
  );
}
