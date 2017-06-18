import { AUTH_USER, FORBID_USER, AUTH_ERROR } from './../actions/Types';
export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case FORBID_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
