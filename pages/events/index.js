import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { getEvents } from "../../utils/client";
import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="All Events"></meta>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  );
}

export async function getStaticProps(context) {
  const allEvents = await getEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
