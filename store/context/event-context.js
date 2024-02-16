// Importing necessary modules
import { createContext, useState } from "react";

// Creating the context with default values
const EventContext = createContext({
  events: [],
  addEvent: (event) => {},
  removeEvent: (eventId) => {},
});

// Provider component to provide the context to other components
const EventContextProvider = (props) => {
  // State for storing the events
  const [events, setEvents] = useState([]);

  // Function to add an event
  const addEvent = (event) => {
    setEvents((currentEvents) => {
      const newEvents = [...currentEvents, event];
      return newEvents;
    });
  };

  // Function to remove an event
  const removeEvent = (eventId) => {
    setEvents((currentEvents) => {
      return currentEvents.filter((event) => event.id !== eventId);
    });
  };

  // The context value
  const context = {
    events,
    addEvent,
    removeEvent,
  };

  // Providing the context to children components
  return (
    <EventContext.Provider value={context}>
      {props.children}
    </EventContext.Provider>
  );
};

// Exporting the context and the provider
export { EventContext, EventContextProvider };
