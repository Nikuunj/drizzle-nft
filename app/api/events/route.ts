import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    msg: `hi rom event/router get`
  })
}

export function POST(req: NextRequest) {
  return NextResponse.json({
    msg: `hi rom event/router post `
  })
}
