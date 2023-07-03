import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', currentForm, 'YOUR_PUBLIC_KEY').then(
      (result: { text: any }) => {
        console.log(result.text);
      },
      (error: { text: any }) => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <input type="submit" value="Send" />
    </form>
  );
};
