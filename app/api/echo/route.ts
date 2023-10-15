import { NextRequest } from "next/server";
// example api route
// route is siteurl/api/echo
// returns req
export default function GET(req: NextRequest) {
    return req.json();
}