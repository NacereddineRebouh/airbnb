export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/messages", "/account", "/wishlists", "/trips"],
};
