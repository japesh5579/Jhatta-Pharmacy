import React from 'react';

const ContactUs = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '1200px',
      margin: '20px auto'
    }}>
      {/* Left Side: Detailed Location */}
      <div style={{
        flex: 1,
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#333'
      }}>
        <h1 style={{ color: '#007BFF' }}>Contact Us</h1>
        <p style={{ marginBottom: '10px', lineHeight: '1.6' }}>
          <strong>Address:</strong><br />
          Jhatta Pharmcy,<br />
          Near Shiv Confectionary,<br />
          Aery Mill Road,Mandi Gobindgarh, Punjab, India - 147301
        </p>
        <p style={{ marginBottom: '10px', lineHeight: '1.6' }}>
          <strong>Email:</strong> <a href="mailto:jhattapharmacy@gmail.com" style={{ color: '#007BFF', textDecoration: 'none' }}>jhattapharmacy@gmail.com</a>
        </p>
        <p style={{ marginBottom: '10px', lineHeight: '1.6' }}>
          <strong>Phone:</strong> <a href="tel:+919914850758" style={{ color: '#007BFF', textDecoration: 'none' }}>+91-9914850758</a>
        </p>
      </div>

      {/* Right Side: Map */}
      <div style={{ flex: 1 }}>
        <iframe
          title="Jhatta Laboratory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.9868030450847!2d76.20318732516365!3d30.660532146306827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101bf2dbce4c0f%3A0xf82ada67c021f218!2sAery%20Mill%20Road%2C%20Near%20Shiv%20Confectionery%2C%20Gandhi%20Nagar%2C%20Mandi%20Gobindgarh%2C%20Punjab%20147301!5e0!3m2!1sen!2sin!4v1688374835207!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0', borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
