import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_ho0irkk';
    const templateId = 'template_o1w2xkl';
    const publicKey = '5iN-BswQPI5KE5G7h';

    const templateparams = {
      from_name: name,
      from_email: email,
      to_name: 'Ritik Sadhou',
      message: message,
    };

    // Send the email using emailjs
    emailjs
      .send(serviceID, templateId, templateparams, publicKey)
      .then((response) => {
        console.log('Email sent SUCCESS!', response);

        // Clear form data after successful submission
        setname('');
        setemail('');
        setmessage('');
      })
      .catch((error) => {
        console.log('Error sending Email', error);
      });
  };

  return (
    <>
      <div className='formheading'>
        <h1>Contact Me</h1>
       
      </div>
      
      <div className='formcontainer'>
      <span className='ContactDesc'>Please fill out the form below to discuss any work oppourtunities. </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name' >Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            className='n'
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            placeholder='your name'
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            className='e'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            placeholder='your email'
          />

          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={message}
            className='t'
            onChange={(e) => setmessage(e.target.value)}
            required
            placeholder='Write a message'
          ></textarea>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
