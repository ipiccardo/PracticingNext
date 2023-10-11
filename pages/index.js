import { getFeaturedEvents } from "../utils/client";
import EventList from "../components/events/event-list";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>EventsPage</title>
        <meta name="description" content="A page of Events"></meta>
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
