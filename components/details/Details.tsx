import { Calendar, MapPin, Volleyball } from "lucide-react"

function Details() {
  return (
    <div className={` w-[1158px]
      h-[505.45px]
      p-[20px_24px]
      gap-8
      border
      rounded-xl
      border-[#C6E1FF29] backdrop-blur-[50px]
      bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%),radial-gradient(59.96%_88.85%_at_100%_99.92%,rgba(0,133,254,0.1)_0%,rgba(0,133,254,0)_100%)]
    `}>
      <div className={`flex flex-col gap-6`}>

        <div className=" w-[708px] h-[267px] relative">
          <div id="image bg" className="w-full h-[196px] bg-zinc-700 rounded-[15px]" />
          <div id="logo image" className="w-[103px] h-[103px] rounded-full bg-zinc-600 absolute top-[164px] left-[18px] border-[5px] border-black block" />
          <div className="flex w-[571px] absolute right-0 pt-2 justify-between ">
            <p className="text-[24px] font-bold w-[294px]">
              Gastonia Ghost Peppers vs. Charleston Dirty Bir...
            </p>
            <span className="w-[66px] h-6 p-2 rounded-[50px] flex gap-2 items-center bg-[#C6E1FF29] border-[#C6E1FF3D] border">
              <span className="size-2 bg-zinc-600 rounded-full" />
              <span>
                Draf
              </span>
            </span>
          </div>
        </div>

        <div>
          <p className="font-[400] text-[12px] text-[#A4A7AA] leading-[]">
            The Gastonia Ghost Peppers are a professional baseball team based in Gastonia, NC, bringing exciting games and a passionate fan experience to the local community.
          </p>
        </div>

        <div className="flex gap-3 h-full">
          <div className="flex flex-col gap-4 p-4 w-[874px] h-[140px]  rounded-[8px] border border-[#FFFFFF1A] text-[14px] font-[400] text-[#F1F1F1]
            bg-[linear-gradient(91.18deg,rgba(255,255,255,0.04)_2.64%,rgba(255,255,255,0.02)_95.85%)]
            ">
            <p className="gap-3 flex items-center">
              <span>
                <Calendar className="size-4 fill-blue-500 text-blue-500" />
              </span>
              <span>
                26 July, 2025 - 30 July, 2025 (GMT-6 Central Time)
              </span>
            </p>
            <p className="gap-3 flex items-center">
              <span>
                <Volleyball className="size-4 fill-blue-500 text-blue-500" />
              </span>
              <span>
                First Horizon Park, Jr Gilliam Wy, Nashville, TN
              </span>
            </p>
            <p className="gap-3 flex items-center">
              <span>
                <MapPin className="size-4 fill-blue-500 text-blue-500" />
              </span>
              <span>
                Sports, Baseball
              </span>
            </p>

          </div>
          <div className="grid grid-flow-row w-[224px] gap-3">
            <div className="
              border rounded-[8px]
              border-[#FFFFFF1A]
              flex flex-col
              justify-center
              gap-3
              ps-[10px]
              bg-[linear-gradient(91.18deg,rgba(255,255,255,0.04)_2.64%,rgba(255,255,255,0.02)_95.85%)]
              ">
              <span className="font-[400] text-[12px] text-[#A4A7AA]">
                Policy
              </span>
              <span className="text-[14px] text-[#F1F1F1] ">
                Gastonia Ghost Peppers Policy
              </span>
            </div>
            <div className="
              border rounded-[8px]
              border-[#FFFFFF1A]
              flex flex-col
              justify-center
              ps-[10px]
              gap-3
              bg-[linear-gradient(91.18deg,rgba(255,255,255,0.04)_2.64%,rgba(255,255,255,0.02)_95.85%)]
              ">
              <span className="font-[400] text-[12px] text-[#A4A7AA]">
                Organizer
              </span>
              <span className="text-[14px] text-[#F1F1F1] flex gap-2">
                <span className="size-[20px] rounded-full bg-zinc-600" />
                <span>
                  Gastonia Ghost Peppers
                </span>
              </span>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Details
