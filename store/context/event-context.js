import { createContext, useState } from "react";

const EventContext = createContext({
  events: [],
  addEvent: (event) => {},
  removeEvent: (eventId) => {},
});

const EventContextProvider = (props) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((currentEvents) => {
      const newEvents = [...currentEvents, event];
      return newEvents;
    });
  };

  const removeEvent = (eventId) => {
    setEvents((currentEvents) => {
      return currentEvents.filter((event) => event.id !== eventId);
    });
  };

  const context = {
    events,
    addEvent,
    removeEvent,
  };

  return (
    <EventContext.Provider value={context}>
      {props.children}
    </EventContext.Provider>
  );
};

export { EventContext, EventContextProvider };
