import { FETCH_SITE_INFO, FETCH_GALLERY } from '../actions';

const INITIAL_STATE = {
  siteData: "",
  gallery: []
}

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_SITE_INFO:
      return {
        ...state,
        siteData: action.payload };

      case FETCH_GALLERY:
        return {
          ...state,
          gallery: [...action.payload] };
    default:
      return { ...state };
  }
}
