import { hotels as data } from '../utils/data/mockup.json';

let hotels = [];

export function load() {
  hotels = data;
}

export function getHotels() {
  return hotels;
}
