// import { withAuth } from "next-auth/middleware";
// // import { default } from "next-auth/middleware";
// // import { useRouter } from "next/navigation";
// // https://github.com/nextauthjs/next-auth/discussions/4078
// // export default withAuth({});

// // export default withAuth({
// // 	pages: {
// // 		signIn: "/login",
// // 	},
// // });
// export default withAuth(
// 	function middleware(req) {
// 		// some actions here
// 	},
// 	{
// 		callbacks: {
// 			authorized: ({ req, token }) => {
// 				// `/admin` requires admin role
// 				if (req.nextUrl.pathname === "/jobs") {
// 					return !!token;
// 				}
// 				// `/me` only requires the user to be logged in
// 				return true;
// 				// return true;
// 			},
// 		},
// 	},
// );
// // callbacks: {
// // 	async redirect({ url, baseUrl }) {
// // 		// Allows relative callback URLs
// // 		if (url.startsWith("/")) return `${baseUrl}${url}`;
// // 		// Allows callback URLs on the same origin
// // 		else if (new URL(url).origin === baseUrl) return url;
// // 		return baseUrl;
// // 	},
// // },
// // });

// // export const config = { matcher: [] };

// // export default function withAuth() {}
// // https://next-auth.js.org/configuration/pages
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	var userToken = request.cookies.get("next-auth.session-token")?.value;

	if (!userToken) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/profile", "/apply", "/api/apply"],
};
// export const config = {
// 	matcher: "/jobs/:path*",
// };
