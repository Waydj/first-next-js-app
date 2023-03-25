import ErrorAlert from "@/components/error-alert/error-alert";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/results-title/results-title";
import Button from "@/components/ui/button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const [numYear, numMonth] = slug;
  const year = +numYear;
  const month = +numMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > 2030
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({ year, month });

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found.</p>
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1, 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />;
    </>
  );
};

export default FilteredEvents;
