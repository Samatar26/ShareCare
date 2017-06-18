import localforage from 'localforage';
import { AUTH_USER, AUTH_ERROR, FORBID_USER, FETCH_HOMEOWNERS } from './Types';
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
          console.log(data.error === 'bcrypt error', data.error);
          switch (data.error) {
            case 'database error':
              return dispatch(
                authError(
                  'Sorry, there was a problem connecting to the database!'
                )
              );
            case 'bcrypt error':
              return dispatch(
                authError('Sorry, there was a problem checking your password!')
              );
            case 'wrong password':
              return dispatch(authError('Sorry, you entered a wrong password'));
            case 'User not found':
              return dispatch(authError("Sorry, the user doesn't exist!"));
          }
        } else {
          localforage.setItem('token', data.token).then(keySet => {
            dispatch({ type: AUTH_USER });
            history.push('/searchresults');
          });
        }
      })
      .catch(err => dispatch(authError('There was a network problem sorry!')));
  };
}

export function signupUser({ email, password }, history) {
  return function(dispatch) {
    fetch(`${ROOT_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          return dispatch(authError('User already exists'));
        } else {
          localforage.setItem('token', data.token).then(keySet => {
            dispatch({ type: AUTH_USER });
            history.push('/searchresults');
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(authError('There was a network problem sorry!'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signoutUser() {
  return function(dispatch) {
    localforage
      .removeItem('token')
      .then(() => {
        dispatch({
          type: FORBID_USER,
        });
      })
      .catch(err => console.log(err));
  };
}

export function fetchHomeOwners() {
  return function(dispatch) {
    localforage.getItem('token').then(key => {
      fetch(ROOT_URL, {
        method: 'GET',
        headers: {
          Authorization: key,
        },
      })
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_HOMEOWNERS, payload: data }))
        .catch(err => console.log(err));
    });
  };
}
