export const getEvents = async () => {
  const response = await fetch(
    "https://eventspage-7551e-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export async function getFeaturedEvents() {
  const allEvents = await getEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getEvents();
  return allEvents.find((event) => id === event.id);
}

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
