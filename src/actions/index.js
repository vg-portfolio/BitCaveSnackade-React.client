//Data
import { merchData } from './data';

const siteData = {
  header: "BitCave",
  aboutSection: "this is the body. There is more info here",

  locationHeading: "Come find us...",
  location: "123 Fake St, Lowell MA 01851",

  contactHeading: "Contact us",
  phone: "(978)999-9999",
  email: "123Fakemail@fake.com",
  facebook:"facebook.com",
  instagram:"instagram.com",

  images: ['first', 'second', 'third', 'fourth'],

  promotionHeading: "Things are happening!",
  promotionDescription: "Come do stuff with us and stuff",

  merchHeading: "Check out our Merch!",
  merchDescription: "Buy our stuff yo and you will be kool in skool",

}


//TYPES
export const FETCH_SITE_INFO = 'FETCH_SITE_INFO';
export const FETCH_MERCH_DATA = 'FETCH_MERCH_DATA';
export const UPDATE_MERCH_ITEM = 'UPDATE_MERCH_ITEM';
export const FETCH_GALLERY = 'FETCH_GALLERY';

//Action creators
export function fetchMainSiteInfo(){
  const request = siteData;
  return {
    type: FETCH_SITE_INFO,
    payload: request
  };
}

export function fetchGalleryImages(){
  const request = siteData;
  return {
    type: FETCH_GALLERY,
    payload: request.images
  };
}

export function fetchMerchData(){
  const request = merchData;
  console.log("REQUEST", request);
  return {
    type: FETCH_MERCH_DATA,
    payload: request
  };
}

//Currently does the same thing as fetchMerchData()
export function updateMerchItem(){
  const request = merchData;
  return {
    type: UPDATE_MERCH_ITEM,
    payload: request
  };
}
