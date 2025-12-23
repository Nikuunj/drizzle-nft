import { db } from "@/db";
import { status } from "@/db/schema";
import { events, eventsSchema, eventsTags } from "@/db/schema/tables/event";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { crypto } from "next/dist/compiled/@edge-runtime/primitives";

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get("page") ?? 1)
  const limit = 10;
  const offset = (page - 1) * limit;
  const eventsList = await db
    .select({
      id: events.id,
      userId: events.userId,
      title: events.title,
      organizationName: events.organizationName,
      description: events.description,
      location: events.location,
      price: events.price,
      dateTime: events.dateTime,
      createAt: events.createAt,
      status: status.title,
    })
    .from(events)
    .innerJoin(status, eq(events.statusId, status.id))
    .orderBy(desc(events.dateTime))
    .limit(limit)
    .offset(offset);
  return NextResponse.json({
    eventsList,
    page,
    limit
  })
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const eventData = eventsSchema.safeParse(body);

  if (!eventData.success) {
    return NextResponse.json(
      {
        error: eventData.error.format(),
        message: "Invalid data formate"
      },
      { status: 400 }
    )
  }
  try {
    const newEventId = crypto.randomUUID();
    const { tagIds, mode, ...rest } = eventData.data;

    if (mode !== "create") {
      return NextResponse.json({ message: "Only creation allowed on this route" }, { status: 405 });
    }

    await db.transaction(async (tx) => {
      await tx.insert(events).values({
        ...rest,
        id: newEventId,
        dateTime: new Date(rest.dateTime),
      });

      if (tagIds && tagIds.length > 0) {
        const tagEntries = tagIds.map((tagId) => ({
          eventsId: newEventId,
          tagId: tagId,
        }));

        await tx.insert(eventsTags).values(tagEntries);
      }
    });

    return NextResponse.json({
      message: "Event and tags created successfully",
      id: newEventId,
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Failed to create event" },
      { status: 500 }
    );
  }
}
