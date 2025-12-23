import { db } from "@/db";
import { events, eventsSchema, eventsTags } from "@/db/schema/tables/event";
import { eq } from "drizzle-orm";
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

  return NextResponse.json({
    eventDetails,
    message: `hi from event/id/router get ${id}`,
  });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const body = await req.json();
  const eventData = eventsSchema.safeParse(body);
  const { id } = await params;
  if (!eventData.success) {
    return NextResponse.json(
      {
        error: eventData.error.format(),
        message: "Invalid data formate"
      },
      { status: 400 }
    )
  }

  const { tagIds, mode, ...rest } = eventData.data;
  if (mode !== "edit") {
    return NextResponse.json({ message: "Only edit allowed on this route" }, { status: 405 });
  }

  try {
    await db.transaction(async (tx) => {

      await tx
        .update(events)
        .set({
          ...rest,
          dateTime: new Date(rest.dateTime),
        })
        .where(eq(events.id, id));

      await tx.delete(eventsTags).where(eq(eventsTags.eventsId, id));

      if (tagIds && tagIds.length > 0) {
        const tagEntries = tagIds.map((tagId) => ({
          eventsId: id,
          tagId: tagId,
        }));
        await tx.insert(eventsTags).values(tagEntries);
      }
    });

    return NextResponse.json({
      message: "Event updated successfully",
      id: id,
    });

  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { message: "Failed to update event" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await db.transaction(async (tx) => {
      await tx.delete(eventsTags).where(eq(eventsTags.eventsId, id));

      const result = await tx.delete(events).where(eq(events.id, id));

      if (result[0].affectedRows === 0) {
        throw new Error("Event not found");
      }
    });

    return NextResponse.json({
      message: "Event and associated tags deleted successfully",
      id: id,
    });
  } catch (error) {
    console.error("Delete Error:", error);

    return NextResponse.json(
      { message: "Failed to delete event" },
      { status: 500 }
    );
  }
}
