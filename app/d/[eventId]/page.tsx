import Details from "@/components/details/Details"
import EventSummary from "@/components/details/EventSummary";
import Tags from "@/components/details/Tags";
import Teams from "@/components/details/Teams";

async function EventDetailsPage({ params }: { params: Promise<{ eventId: string }> }) {

  const { eventId } = await params;
  return (
    <div className="px-[30px] py-4 gap-5 flex flex-col">
      <div className="gap-5 flex flex-col">
        <div className="gap-5 flex">
          <Details />
          <EventSummary />
        </div>
        <div className="gap-3 flex ">
          <Teams />
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default EventDetailsPage
