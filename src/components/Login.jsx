import React, { useState } from 'react';
import loginbg from '../assets/loginbg.jpg';
import { useForm } from 'react-hook-form';
import { FlexboxGrid, Form, InputGroup, Button, Col } from 'rsuite';
import { useLogin } from '../context/LoginContext';
import toast, { Toaster } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';

function Login() {
  const { handleLogin, isLoading } = useLogin();
  const { handleSubmit } = useForm();
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({});

  const handleInputChange = (v, e) => {
    const { name } = e.target;

    setValues({
      ...values,
      [name]: v,
    });
  };

  const onSubmit = async () => {
    if (!values.password) {
      toast.error('Password is required!');
    }
    if (!values.username) {
      toast.error('Username is required!');
    }
    if (values.username && values.password) {
      handleLogin(values);
    }
  };

  const showPass = () => {
    setVisible(!visible);
  };

  return (
    <div className="grid grid-cols sm:grid-cols-2 h-screen w-full">
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <BeatLoader
            className="text-gray-800"
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="hidden sm:block">
        <img className="w-full h-full object cover" src={loginbg} alt="" />
      </div>

      <Toaster />
      <FlexboxGrid className="flex justify-center items-center bg-gray-900">
        <FlexboxGrid.Item>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] w-full mx-auto bg-gray-800 p-20 px-20 rounded-lg"
          >
            <h2 className="text-6x1 gap-6 text-white font-bold text-center flex flex-col items-center">
              <div className="bg-cover bg-voltaic-icon h-24 w-24"></div>
              Sign In
            </h2>
            <Form.Group
              controlId={'username'}
              className="flex flex-col text-gray-400 py-2"
            >
              <InputGroup inside>
                <Form.Control
                  name="username"
                  placeholder="Username"
                  onChange={(v, e) => handleInputChange(v, e)}
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
                <InputGroup.Addon></InputGroup.Addon>
              </InputGroup>
            </Form.Group>
            <Form.Group
              controlId={'password'}
              className="flex flex-col text-gray-400 py-2"
            >
              <InputGroup inside>
                <Form.Control
                  name="password"
                  placeholder="Password"
                  type={visible ? 'text' : 'password'}
                  onChange={(v, e) => handleInputChange(v, e)}
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </InputGroup>
            </Form.Group>

            {/* <p className='reset'>Reset Password?</p> */}

            <Button
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              c
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal 500/40 text-white font-semibold rounded-lg"
              block
            >
              LOGIN
            </Button>
          </Form>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Login;
