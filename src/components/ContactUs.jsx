import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { useContact } from '../context/ContactUsContext';

function ContactUs() {
  const { isLoading, handleEmail } = useContact();
  const { handleSubmit } = useForm();
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmit = () => {
    handleEmail(values);
  };
  return (
    <div className="p-6 bg-slate-900 text-white ">
      {isLoading && (
        <Spinner style={{ width: '2rem', height: '2rem' }} children={false} />
      )}
      <div className="p-6 bg-slate-900 md:p-12 lg:p-20 xl:p-32">
        <Form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
          <FormGroup>
            <Label for="name" className="font-bold">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              className="p-3 rounded-lg border border-gray-400"
              onChange={(e) => handleInputChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="font-bold">
              Email
            </Label>
            <Input
              onChange={(event) => handleInputChange(event)}
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
              onChange={(v, e) => handleInputChange(v, e)}
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
              type="submit"
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
