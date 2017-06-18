import { AUTH_USER } from './Types';
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
        dispatch({ type: AUTH_USER });
        history.push('/feature');
      })
      .catch(err => console.log(err));
  };
}
