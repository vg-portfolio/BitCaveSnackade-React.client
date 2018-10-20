import { FETCH_PROMOS } from '../actions';

const INITIAL_STATE = {
  promoData: "",
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PROMOS:
      return {
        ...state,
        promoData: { ...action.payload },
      };
    default:
      return { ...state };
  }
}
