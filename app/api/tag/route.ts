import { db } from "@/db";
import { tags, tagsSchema } from "@/db/schema/tables/tags";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parse = tagsSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json(
      {
        error: parse.error.format(),
        message: "Invalid data formate"
      },
      { status: 400 }
    )
  }
  const tag = parse.data;

  try {
    const [insert] = await db.insert(tags).values({
      title: tag.title
    })

    return NextResponse.json({
      message: "New tag added",
      id: insert.insertId
    })
  } catch (e) {
    return NextResponse.json({
      message: "somthing wrong"
    }, { status: 500 })
  }
}
