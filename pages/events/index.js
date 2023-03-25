import EventList from "@/components/events/event-list";
import SearchEvent from "@/components/events/event-search";
import { getAllEvents, getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  const onSearchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <SearchEvent onSearch={onSearchHandler} />
      <EventList items={events} />;
    </>
  );
};

export default AllEvents;
