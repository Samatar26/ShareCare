import { AUTH_USER, FORBID_USER } from './../actions/Types';
export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case FORBID_USER:
      return { ...state, authenticated: false };
  }
  return state;
}
