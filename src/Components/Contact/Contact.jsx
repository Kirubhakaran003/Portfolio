import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ab266c8b-a273-48a7-bafd-c106ed7d766f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };
  return (
    <div id="contact" className='contact'>
      <h1>Get in touch</h1>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>
            Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm happy to connect!
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='email' />
              <p>Kirubhakaran249@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='phone' />
              <p>+91 9095156060</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='location' />
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' placeholder='Enter your name' name='name' required />

          <label htmlFor='email'>Email</label>
          <input id='email' type='email' placeholder='Enter your email' name='email' required />

          <label htmlFor='message'>Write your message here</label>
          <textarea id='message' placeholder='Enter your message' rows='6' name='message' required />

          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
