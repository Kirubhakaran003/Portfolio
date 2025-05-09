import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <hr style={{ width: '100%', borderColor: '#444' }} />
      <div className="footer">
        <p className="footer-left">
          &copy; {new Date().getFullYear()} Kirubhakaran. All rights reserved.
        </p>
        <div className="footer-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
