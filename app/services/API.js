import { hotels as data } from '../utils/data/mockup.json';

let hotels = [];

/**
 * @name load
 * @description Load Hotels by Mockup
 * @author Miguel Mendoza
 */
export function load() {
  hotels = data;
}

/**
 * @name getHotels
 * @description Get Hotels
 * @author Miguel Mendoza
 */
export function getHotels() {
  return hotels;
}

/**
 * @name getHotelByID
 * @description Get Hotel by ID
 * @param ID
 * @author Miguel Mendoza
 */
export function getHotelByID(ID) {
  const hotel = hotels.find(hotel => +hotel.uid === +ID);
  return hotel ? hotel : null;
}
