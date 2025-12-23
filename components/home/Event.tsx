import { LucideGripHorizontal } from "lucide-react"

function Event() {
  return (
    <div className="
      px-[24px] py-[20px]
      gap-[8px]
      rounded-[12px]
      border
      backdrop-blur-[50px]
      border-[#C6E1FF29]
      bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%),radial-gradient(69.98%_541.77%_at_100%_0%,rgba(35,98,201,0.06)_0%,rgba(35,98,201,0)_100%)]
      "
    >
      <p className="text-[16px] font-[600] h-[32px]">
        Event <span className="font-[400]">(1,200)</span>
      </p>
      <div className="flex flex-col gap-1">
        <div className="font-[400] text-[12px] text-[#A4A7AA] h-[50px] grid grid-flow-col grid-cols-5 justify-between text-start  py-8">
          <p>Event Name        </p>
          <p>Date & Time        </p>
          <p>Location        </p>
          <p>Tickets Sold        </p>
          <p>Status</p>

        </div>
        <div className=" gap-1 ">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

    </div>
  )
}

function EventCard() {
  return (
    <div className="relative grid grid-flow-col py-2 grid-cols-5 items-center justify-between text-[14px]">
      <div className="gap-3 flex items-center">
        <div className="size-7.5 rounded-full bg-zinc-700">      </div>
        <p>
          Seattle Sand Dogs vs Nashville Sounds
        </p>
      </div>
      <div>
        Jun 22, 6:00 PM
      </div>
      <div>
        Dehler Park
      </div>
      <div>
        4,200
      </div>
      <div className="flex justify-between items-center">
        <div className="opacity-100
        w-fit
        px-2 py-0.5
        gap-2 flex items-center 
        rounded-[50px]
        border
        border-[#C6E1FF3D]
        bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%)]
        backdrop-blur-[50px]"
        >
          <div className="size-[6px] rounded-full bg-green-400">
          </div>
          <div className="">Upcoming</div>
        </div>
        <span><LucideGripHorizontal /></span>
      </div>

      <div className="bg-gradient-to-r absolute bottom-0 from-zinc-950 via-zinc-800  to-zinc-950 h-[1px] w-full" />
      <div className="bg-gradient-to-r absolute top-0 from-zinc-950 via-zinc-800  to-zinc-950 h-[1px] w-full" />
    </div>
  )
}

export default Event
