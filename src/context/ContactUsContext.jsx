import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import { post } from '../api';
import toast, { Toaster } from 'react-hot-toast';

const ContactContext = createContext();

const useContact = () => useContext(ContactContext);

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'SENDING_EMAIL':
      return { ...state, isLoading: true };
    case 'EMAIL_SENT':
      return { ...state, isLoading: false };
    case 'ERROR':
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading } = state;

  const handleEmail = useCallback(async (data) => {
    dispatch({ type: 'SENDING_EMAIL' });
    console.log('data', data);
    const { email, name, message } = data;

    dispatch({ type: 'EMAIL_SENT', message, name, email });
    // try {
    //   let resp = {};
    //   const request = {
    //     url: `${import.meta.env.VITE_API_ENDPOINT}/authenticate`,
    //     data,
    //   };
    //   resp = await post(request);
    //   if ([200].includes(resp.status)) {
    //     window.location.replace('/');
    //     let { token } = resp.data;
    //     document.cookie = `user_token=${token}`;
    //     toast.success(
    //       <p>
    //         Welcome <b>System Admin!</b>
    //       </p>
    //     );
    //     localStorage.setItem('isLoggedIn', true);
    //     dispatch({ type: 'LOGGED_IN' });
    //   } else {
    //     dispatch({
    //       type: 'ERROR',
    //       errorMsg: 'Something went wrong when logging in',
    //     });
    //     toast.error('Username and password does not match!');
    //   }

    //   return isLoggedIn;
    // } catch (err) {
    //   toast.error(`${err} Username and password does not match!`);
    //   dispatch({ type: 'ERROR' });
    // }
  }, []);

  return (
    <ContactContext.Provider
      value={{
        ...state,
        dispatch,
        handleEmail,
      }}
    >
      <Toaster />
      {children}
    </ContactContext.Provider>
  );
}

export { ContactProvider, useContact };
