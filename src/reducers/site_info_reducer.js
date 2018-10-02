import { FETCH_SITE_INFO, FETCH_GALLERY } from '../actions';

const INITIAL_STATE = {
  siteData: "",
  gallery: []
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_SITE_INFO:
    console.log("FETCHING SITE INFO IN REDUCER");
    console.log(action.payload);
      return {
        ...state,
        siteData: action.payload };

      case FETCH_GALLERY:
      console.log("FETCHING GALLERY");
      console.log(action.payload);
        return {
          ...state,
          gallery: [...action.payload] };
    default:
      return { ...state };
  }
}
