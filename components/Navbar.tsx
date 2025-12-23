function Navbar() {
  return (
    <div className={`
      h-[88px]
      w-full
      flex
      justify-between
      items-center
      px-[30px]
      bg-[radial-gradient(111.15%_100%_at_49.9%_0%,_rgba(198,225,255,0.08)_0%,_rgba(198,225,255,0.04)_100%)]
      backdrop-blur-[50px]
      border-l-0
      border-t-[1px]
      border-r-[1px]
      border-b-[1px]
      border-transparent
      [border-image:linear-gradient(180deg,rgba(198,225,255,0.24)_0%,rgba(198,225,255,0.04)_100%)_1]
    `}>
      <p className="text-[16px] font-[500] ">
        <span className="font-[400] text-[#A4A7AA]">Event Management / </span>Events
      </p>
      <div>
        1
      </div>
    </div>
  )
}

export default Navbar
