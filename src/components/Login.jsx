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
  console.log(values);
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
      <FlexboxGrid>
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          md={11}
          className="a8-logo"
        ></FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={13} className="login-form">
          <p className="title">Voltaic Login </p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId={'username'}>
              <InputGroup inside>
                <Form.Control
                  name="username"
                  placeholder="Username"
                  onChange={(v, e) => handleInputChange(v, e)}
                />
                <InputGroup.Addon></InputGroup.Addon>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId={'password'}>
              <InputGroup inside>
                <Form.Control
                  name="password"
                  placeholder="Password"
                  type={visible ? 'text' : 'password'}
                  onChange={(v, e) => handleInputChange(v, e)}
                />
              </InputGroup>
            </Form.Group>

            {/* <p className='reset'>Reset Password?</p> */}

            <Button
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              className="custom-btn btn-green"
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
