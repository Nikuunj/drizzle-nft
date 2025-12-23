import Image from "next/image"
import star from "@/public/start.png"
import { ArrowUp, Calendar } from "lucide-react";

function OverviewCard() {
  return (
    <div className="
      relative
      w-[309px]
      min-h-[149px]
      p-[20px]
      flex flex-col
      gap-[32px]
      rounded-[12px]
      backdrop-blur-[50px]
      bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%),radial-gradient(50%_77.89%_at_50%_0%,rgba(244,179,1,0.05)_0%,rgba(244,179,1,0)_100%)]
      border-[1px]
      border-[#C6E1FF29]
      "
    >
      <Image
        src={star}
        alt="start icon"
        width={100}
        height={100}
        className=" w-full  absolute bottom-11 right-1 -z-10 rotate-12"
      />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 font-[400] items-center">
          <div className="w-6 h-6 rounded-lg bg-red-500 flex justify-center items-center">
            <Calendar className="size-3 fill-amber-50" />
          </div>
          <p className="text-[14px] text-[#A4A7AA]">
            Total events
          </p>
        </div>
        <p className="text-[24px] font-[600]">
          1,205
        </p>
      </div>
      <div>
        <p className="flex gap-2 text-[12px] items-center">
          <ArrowUp className="size-3 text-green-500" />
          <span className="font-[400]">10%</span>
          <span className="font-[400]">From last week</span>
        </p>
      </div>
    </div>
  )
}

export default OverviewCard
