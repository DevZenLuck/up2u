import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{ textAlign: 'center', padding: '10px 0', background: '#330708' }}>
      <p style={{ color: '#ebcd9b' }}>
        &copy; {new Date().getFullYear()} UP2U. All rights reserved.
      </p>
      <Link
        to="/PrivacyPolicy"
        style={{
          color: '#ebcd9b',
          textDecoration: 'none',
          fontSize: '12px',
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
        onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
      >
        Privacy Policy
      </Link>
    </div>
  );
}

export default Footer;
