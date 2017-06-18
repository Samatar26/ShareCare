import localforage from 'localforage';
import { AUTH_USER, AUTH_ERROR } from './Types';
const ROOT_URL = 'http://localhost:4000';

export function signinUser({ email, password }, history) {
  return function(dispatch) {
    console.log('action creator');

    fetch(`${ROOT_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          switch (data.error) {
            case 'database error':
              return authError(
                'Sorry, there was a problem connecting to the database!'
              );
            case 'bcrypt':
              return authError(
                'Sorry, there was a problem checking your password!'
              );
            case 'User not found':
              return authError("Sorry, the user doesn't exist!");
          }
          return;
        } else {
          localforage.setItem('token', data.token);
          dispatch({ type: AUTH_USER });
          history.push('/feature');
        }
      })
      .catch(err => dispatch(authError('Network Problem sorry!')));
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
