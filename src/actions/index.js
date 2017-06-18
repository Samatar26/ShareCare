const ROOT_URL = 'http://localhost:4000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    console.log('action creator');
    fetch(`${ROOT_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
}
