import { FETCH_MERCH_DATA } from '../actions';

const INITIAL_STATE = {
  merchData: "",
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_MERCH_DATA:
      return {
        ...state,
        merchData: { ...action.payload },
      };
    default:
      return { ...state };
  }
}
