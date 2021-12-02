import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent, fetchEvents } from '../utils/apiRequests';
import { setEvent, setEvents, setFetchingEvents } from '../redux/appSlice';

export const useGetEvents = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.events.length <= 1) {
      dispatch(setFetchingEvents());
      fetchEvents().then(({ data }) => dispatch(setEvents(data)));
    }
  }, []);

  return events;
}

export const useGetEvent = (id) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.events.loading);
  const event = useSelector((state) => {
    return state.events.events.find((i) => i.id === id);
  });

  useEffect(() => {
      dispatch(setFetchingEvents());
      fetchEvent(id).then(({ data }) => dispatch(setEvent(data)));  
  }, []);

  return { event, loading };
}

