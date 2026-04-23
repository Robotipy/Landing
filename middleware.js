import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|favicon.ico|icon.png|opengraph-image.png|twitter-image.png|robots.txt|sitemap.xml|images|fonts|.*\\..*).*)",
  ],
};
