import { db } from "@/db";
import { status } from "@/db/schema";
import { events, eventsSchema } from "@/db/schema/tables/event";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

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

  await db.insert(events).values(eventData.data);

  return NextResponse.json({
    msg: `hi rom event/router event created`
  })
}
