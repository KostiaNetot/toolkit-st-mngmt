// import loader
// import event-list component

import { useGetEvents } from '../hooks/reduxHooks';

export const EventListContainer = () => {
  const events = useGetEvents();

  return !events?.loading ? <div>Evemt list component</div> : <div>Loading...</div>;
}
