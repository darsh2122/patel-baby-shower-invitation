import { NextResponse } from "next/server";
import { icsContent } from "@/lib/event";
export function GET(){return new NextResponse(icsContent(),{headers:{"content-type":"text/calendar; charset=utf-8","content-disposition":"attachment; filename=patel-baby-shower.ics","cache-control":"public, max-age=3600"}})}
