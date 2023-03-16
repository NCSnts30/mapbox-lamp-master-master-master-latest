import React from 'react';
import { ContactProvider } from './ContactUsContext';
import ContactUs from '../components/ContactUs';
const ContactUsProvider = () => {
  return (
    <ContactProvider>
      <ContactUs />
    </ContactProvider>
  );
};

export default ContactUsProvider;
