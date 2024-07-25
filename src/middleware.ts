import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/new-blog(.*)",
  "/profile(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/new-blog(.*)",
    "/",
    "/(api|trpc)(.*)",
    "/posts(.*)",
    "/profile(.*)",
  ],
};
