import { FETCH_MERCH_DATA,
         UPDATE_MERCH_ITEM
       } from '../actions';

const INITIAL_STATE = {
  merchData: "",
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_MERCH_DATA:
    console.log("FETCHING MERCH INFO IN REDUCER");
    console.log(action.payload);
      return {
        ...state,
        merchData: { ...action.payload },
      };
    // case UPDATE_MERCH_ITEM:
    // console.log("UPDATE MERCH IN REDUCER");
    // console.log(action.payload);
    //   return {
    //     ...state,
    //     merchData: {
    //       ...action.payload,
    //       items: [ ...action.payload ]
    //     },
    //   };

      // case FETCH_GALLERY:
      // console.log("FETCHING GALLERY");
      // console.log(action.payload);
      //   return {
      //     ...state,
      //     gallery: [...action.payload] };
    default:
      return { ...state };
  }
}
