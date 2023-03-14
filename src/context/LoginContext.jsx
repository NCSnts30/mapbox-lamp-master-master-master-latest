import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import { post } from '../api';
import toast, { Toaster } from 'react-hot-toast';

const LoginContext = createContext();

const useLogin = () => useContext(LoginContext);

const initialState = {
  isLoading: false,
  isLoggedIn: false,
};

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'LOGGING_IN':
      return { ...state, isLoading: true };
    case 'LOGGED_IN':
      return { ...state, isLoading: false };
    case 'ERROR':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, isLoggedIn } = state;

  const handleLogin = useCallback(async (data) => {
    dispatch({ type: 'LOGGING_IN' });
    try {
      let resp = {};
      const request = {
        url: `${import.meta.env.VITE_API_ENDPOINT}/authenticate`,
        data,
      };
      resp = await post(request);
      if ([200].includes(resp.status)) {
        window.location.replace('/');
        let { token } = resp.data;
        document.cookie = `user_token=${token}`;
        toast.success(
          <p>
            Welcome <b>System Admin!</b>
          </p>
        );
        localStorage.setItem('isLoggedIn', true);
        dispatch({ type: 'LOGGED_IN' });
      } else {
        dispatch({
          type: 'ERROR',
          errorMsg: 'Something went wrong when logging in',
        });
        toast.error('Username and password does not match!');
      }

      return isLoggedIn;
    } catch (err) {
      toast.error(`${err} Username and password does not match!`);
      dispatch({ type: 'ERROR' });
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        ...state,
        dispatch,
        handleLogin,
      }}
    >
      <Toaster />
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, useLogin };
