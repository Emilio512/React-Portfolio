import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
               
                  <div>
                        <label class="text" id="email">Email:</label>
                        <input type="text" id="email" name="user-email"/>
                        </div>
                    <div>
                        <label class="text" for="name">Name:</label>
                        <input type="text" id="name" name="user-name"/>
                        </div>

                    
                    
               
                <div class="text-center">
                    <button type="submit">SEND</button>
                </div>
            </form>
    </div>
  );
}
