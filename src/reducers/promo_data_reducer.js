import { FETCH_PROMOS,
         // UPDATE_PROMO_ITEM
       } from '../actions';

const INITIAL_STATE = {
  promoData: "",
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PROMOS:
    console.log("FETCHING PROMO INFO IN REDUCER");
    console.log(action.payload);
      return {
        ...state,
        promoData: { ...action.payload },
      };
    default:
      return { ...state };
  }
}
