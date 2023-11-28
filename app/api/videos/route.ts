import { Video, baseVideoUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(baseVideoUrl)
  const searchParams = request.nextUrl.searchParams
  searchParams.forEach((value, key) => url.searchParams.append(key, value))

  const data = await fetch(url);
  const videos: Video[] = (await data.json()).data;

  return NextResponse.json(videos || {})
}