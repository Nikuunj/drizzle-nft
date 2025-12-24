function Tags() {
  return (
    <div className={`  w-[1048px]
    p-[20px_24px_0px_20px]
    gap-3 flex flex-col
    border border-[#C6E1FF29]
    rounded-xl
    backdrop-blur-[50px]
    bg-[radial-gradient(111.15%_100%_at_49.9%_0%,rgba(198,225,255,0.08)_0%,rgba(198,225,255,0.04)_100%),radial-gradient(59.96%_88.85%_at_100%_99.92%,rgba(0,133,254,0.1)_0%,rgba(0,133,254,0)_100%)]
    `}>
      <div>
        <span className="text-[12px] font-[400] text-[#A4A7AA]">
          Tags
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <TagCm />
        <TagCm />
        <TagCm />
        <TagCm />
      </div>
    </div>
  )
}

function TagCm() {
  return <span
    className="p-2 border 
          flex gap-0.5
          text-[14px]
          text-[#F1F1F1]
          rounded-[50px]
          border-[#F15150] bg-[linear-gradient(91.18deg,rgba(241,81,80,0.1)_2.64%,rgba(241,81,80,0.05)_95.85%)]
          ">
    <span>Fire Works          </span>
    <span className="font-semibold">(2)</span>
  </span>

}

export default Tags
