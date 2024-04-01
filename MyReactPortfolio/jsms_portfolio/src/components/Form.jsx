import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form_Style.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const inputs = form.current.querySelectorAll('input[type="text"], input[type="email"], textarea');
    let isFormComplete = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isFormComplete = false;
      }
    });

    if (isFormComplete) {
      emailjs
        .sendForm('jassim_gmail', 'jassim_gmail', form.current, 'NieNRKSfL0orL1yRH')
        .then((result) => {
          console.log(result.text);
          console.log('email sent successfully');
          window.alert('Message sent successfully');
          form.current.reset(); // Clear form fields
        })
        .catch((error) => {
          console.log(error.text);
          window.alert('Error code please try again later');

        });
    } else {
      window.alert('Please complete the form before submitting.');
    }
  };

  return (
    <div className="form">
     
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="to_name" required/>

        <label>Email</label>
        <input type="email" name="there_email" required />

        <label>Subject</label>
        <input type="text" name="subj_name" required/>

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message"required />
re
        <button className="btn-card" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
