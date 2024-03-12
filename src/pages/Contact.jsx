import { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {
  // state hooks for managing form inputs and error message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  // handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target; // destructure name and value from event target

    // switch statement to update state based on input field name
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break; // do nothing for unspecified cases
    }
  };

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validate email input
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email');  
      return;
    } else if (!name || !message) {
      setErrorMessage('Please do not leave sections blank'); 
      return;
    }

    // display alert and reset form fields
    alert(`${name}, thank you for sending a message!`);

    // reset all states to default values
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  // render contact form
  return (
    <div className="background">
      <div className="container text-center m-5 p-5">
        <h1>Hello! Let's chat</h1>
        <form className="form container text-center p-5" onSubmit={handleFormSubmit}>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;