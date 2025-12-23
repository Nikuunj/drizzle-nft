import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const eventDetails = await db.query.events.findFirst({
    where: (events, { eq }) => eq(events.id, id),
    with: {
      user: true,
      status: {
        columns: {
          title: true
        }
      },
      eventsTags: {
        with: {
          tag: {
            columns: {
              title: true
            }
          }
        }
      }
    },
  });

  if (!eventDetails) {
    return NextResponse.json({
      message: "event is not found"
    }, { status: 404 })
  }
  if (eventData.data.mode !== "create") {
    return NextResponse.json(
      { message: "Only create mode is allowed for this endpoint" },
      { status: 400 }
    );
  }
  return NextResponse.json({
    eventDetails,
    message: `hi from event/id/router get ${id}`,
  });
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
