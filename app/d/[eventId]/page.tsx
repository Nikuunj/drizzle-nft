import { NEXT_PUBLIC_BASE_URL } from "@/config";

async function EventDetailsPage({ params }: { params: Promise<{ eventId: string }> }) {

  const { eventId } = await params;
  return (
    <div>hif from event details page eventId is ------  {eventId}
      <br />
      {NEXT_PUBLIC_BASE_URL}
    </div>
  )
}

export default EventDetailsPage
