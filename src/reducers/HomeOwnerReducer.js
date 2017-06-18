import { FETCH_HOMEOWNERS } from './../actions/Types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_HOMEOWNERS:
      return { ...state, homeOwners: action.payload };
  }
  console.log(action.payload);
  return state;
}
