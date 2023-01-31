import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function ContactUs() {
  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <div id="contact-us">
        <h1 className="text-2xl font-medium text-center mb-6">Contact Us</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              className="p-3 rounded-lg"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              className="p-3 rounded-lg"
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              rows={5}
              className="p-3 rounded-lg"
            />
          </FormGroup>
          <FormGroup className="text-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
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
