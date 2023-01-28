import React, { useState } from 'react';
import { useEffect } from 'react';

function Login() {
  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^ [^\s@] + @[^\s@] +\.[^\s@]{2,}$/;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4)
      errors.password = 'Password must be more than 4 characters';
    return errors;
  };

  return (
    <div className="bg-cover bg-center bg-opacity-47 bg-loginbg h-screen">
      <div className="container" id="login">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success"> Sign In Successful </div>
        ) : (
          <pre>{JSON.stringify()}</pre>
        )}
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="ui divider">
            <div className="ui form">
              <div className="field">
                <label>
                  Username
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <p>{formErrors.username}</p>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <button className="fluid ui button green">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
