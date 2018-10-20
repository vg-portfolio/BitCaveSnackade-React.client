//Data
import { merchData, promoData, galleryImages } from './data';

const siteData = {
  header: "BitCave",
  aboutSection: "this is the body. There is more info here",

  locationHeading: "Come find us...",
  location: "16 Branch St, Lowell, MA 01851",
  hours: '10:30am - 8pm',
  hours2: '11am - 7pm',

  contactHeading: "Contact us",
  phone: "(978) 710-5559",
  facebook:"https://www.facebook.com/BitcaveSnackade/",
  instagram:"https://www.instagram.com/bit_cave/",

}


//TYPES
export const FETCH_SITE_INFO = 'FETCH_SITE_INFO';
export const FETCH_MERCH_DATA = 'FETCH_MERCH_DATA';
export const UPDATE_MERCH_ITEM = 'UPDATE_MERCH_ITEM';
export const FETCH_GALLERY = 'FETCH_GALLERY';
export const FETCH_PROMOS = 'FETCH_PROMOS';

//Action creators
export function fetchMainSiteInfo(){
  const request = siteData;
  return {
    type: FETCH_SITE_INFO,
    payload: request
  };
}

export function fetchGalleryImages(){
  const request = galleryImages;
  return {
    type: FETCH_GALLERY,
    payload: request
  };
}

export function fetchMerchData(){
  const request = merchData;
  return {
    type: FETCH_MERCH_DATA,
    payload: request
  };
}

//Currently does the same thing as fetchMerchData()
// export function updateMerchItem(){
//   const request = merchData;
//   return {
//     type: UPDATE_MERCH_ITEM,
//     payload: request
//   };
// }

export function fetchPromoData(){
  const request = promoData;
  return {
    type: FETCH_PROMOS,
    payload: request
  }
}
