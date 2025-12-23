import Event from "@/components/home/Event";
import EventOverView from "@/components/home/EventOverView";

export default async function Home() {
  return (
    <div className="px-[30px] py-4 gap-5 flex flex-col">
      <EventOverView />
      <Event />
    </div>
  );
}
