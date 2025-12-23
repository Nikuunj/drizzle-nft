import OverviewCard from "./OverviewCard"

function EventOverView() {
  return (
    <div className="flex flex-col gap-4">
      <div className={`flex justify-between `}>
        <p>
          Event Overview
        </p>
        <div>
          3
        </div>
      </div>
      <div className=" grid grid-flow-col  gap-8">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
    </div>
  )
}

export default EventOverView
