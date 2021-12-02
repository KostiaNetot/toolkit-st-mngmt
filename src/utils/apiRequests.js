import { apiClient } from '../apiClient';

export const fetchEvent = (id) => {
  return apiClient.get(`/events/${id}`);
}

export const fetchEvents = () => {
  return apiClient.get('/events');
}
