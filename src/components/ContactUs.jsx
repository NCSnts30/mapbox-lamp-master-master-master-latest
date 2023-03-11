import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function ContactUs() {
  return (
    <div className="p-6 bg-slate-900 text-white">
      <div className="p-6 bg-slate-900 md:p-12 lg:p-20 xl:p-32">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <Form>
          <FormGroup>
            <Label for="name" className="font-bold">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              className="p-3 rounded-lg border border-gray-400"
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
              className="p-3 rounded-lg border border-gray-400"
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
              className="p-3 rounded-lg border border-gray-400"
            />
          </FormGroup>
          <FormGroup className="text-right mt-6">
            <button
              className="bg-emerald-700 hover:bg-emerald-500 text-white font-medium py-2 px-4 text-lg rounded-lg"
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
