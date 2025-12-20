import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    msg: 'hi from evernt/id/router get'
  })
}

export function PUT(req: NextRequest) {
  return NextResponse.json({
    msg: 'hi from evernt/id/router put'
  })
}

export function DELETE(req: NextRequest) {
  return NextResponse.json({
    msg: 'hi from evernt/id/router delete'
  })
}
