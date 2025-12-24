function Teams() {
  return (
    <div className={`w-[320px]
      p-[20px_24px_0px_20px]
      gap-3 flex flex-col
      border border-[#C6E1FF29]
      rounded-xl
      backdrop-blur-[50px]
      bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%),radial-gradient(59.96%_88.85%_at_100%_99.92%,rgba(0,133,254,0.1)_0%,rgba(0,133,254,0)_100%)]
    `}>
      <div className="text-[12px] font-[400] text-[#A4A7AA] flex justify-between">
        <span>
          Teams
        </span>
        <span>
          See all
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <TeamCard />
        <TeamCard />
      </div>
      <div>
      </div>
    </div>
  )
}


function TeamCard() {
  return (
    <div className="flex gap-2 items-center">
      <div className="size-[30px] bg-zinc-600 rounded-full" />
      <span className="font-[400] text-[14px] text-[#F1F1F1]">
        Gastonia Ghost Peppers
      </span>
    </div>

  )
}
export default Teams
