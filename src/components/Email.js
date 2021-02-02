import React from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom'


export default function ContactUs() {
  const history = useHistory()

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rrzlo1i', 'template_r8pfzqm', e.target, 'user_sa7Oug4IuHerMJnhC6CCX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" onClick={(e) => {
        
        history.push('/')
      }}>

      </input>
                
        
    </form>
  );
}
    

