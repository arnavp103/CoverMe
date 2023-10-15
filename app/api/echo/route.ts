import { NextRequest, NextResponse } from "next/server";
// example api route
// route is siteurl/api/echo
// returns req
export async function GET(req: NextRequest) {
    return NextResponse.json(req);
}