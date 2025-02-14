import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const session = await getToken({req: request});

  if(!session && request.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  if((session && request.nextUrl.pathname.startsWith('/signin')) || (session && request.nextUrl.pathname.startsWith('/signup'))){
    return NextResponse.redirect(new URL("/", request.url));
  }

  if(session?.role !== 'admin' && request.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.rewrite(new URL("/denied", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/signup"],
};