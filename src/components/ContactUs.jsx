import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './css/home.css';

function ContactUs() {
  return (
    <div className="p-32 bg text-white">
      <div
        id="contact-us"
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-3xl p-20"
      >
        <h1 className="text-2xl font-bold text-center mb-6 drop-shadow-3xl">
          Contact Us
        </h1>
        <Form>
          <FormGroup>
            <Label for="name" className="font-bold drop-shadow-3xl">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              className="p-3 rounded-lg drop-shadow-3xl"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="font-bold">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              className="p-3 rounded-lg drop-shadow-3xl"
            />
          </FormGroup>
          <FormGroup>
            <Label for="message" className="font-bold">
              Message
            </Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              rows={5}
              className="p-3 rounded-lg"
            />
          </FormGroup>
          <FormGroup className="text-right">
            <button
              className="bg-emerald-700 hover:bg-emerald-500 text-white font-medium py-6 px-8 text-xl rounded-lg mt-24"
              type="button"
            >
              Submit
            </button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;
