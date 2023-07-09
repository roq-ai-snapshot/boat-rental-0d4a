import axios from 'axios';
import queryString from 'query-string';
import { BoatInterface, BoatGetQueryInterface } from 'interfaces/boat';
import { GetQueryInterface } from '../../interfaces';

export const getBoats = async (query?: BoatGetQueryInterface) => {
  const response = await axios.get(`/api/boats${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBoat = async (boat: BoatInterface) => {
  const response = await axios.post('/api/boats', boat);
  return response.data;
};

export const updateBoatById = async (id: string, boat: BoatInterface) => {
  const response = await axios.put(`/api/boats/${id}`, boat);
  return response.data;
};

export const getBoatById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/boats/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBoatById = async (id: string) => {
  const response = await axios.delete(`/api/boats/${id}`);
  return response.data;
};
