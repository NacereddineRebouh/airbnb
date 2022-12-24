import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { usePathname } from "next/navigation";
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "cred",
      name: "Credentials",
      async authorize(credentials) {
        try {
          // @ts-ignore
          const { username, password } = credentials;

          const result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          let user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
          const result2 = await result.json();
          console.log(
            "logged in ? :",
            result2.success,
            " res:",
            result2.status
          );
          // Add logic here to look up the user from the credentials supplied
          if (result2.success) {
            user.id = String(result2.success.id);
            user.name = result2.success.username;
            user.email = result2.success.email;
            return user;
          } else if (result2.error) {
            return null;
          }
          return null;
          // if (user) {
          //   // Any object returned will be saved in `user` property of the JWT

          // } else {
          //   // If you return null then an error will be displayed advising the user to check their details.
          //   return null;

          //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          // }
        } catch (e) {
          return null;
        }
      },
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
};
// @ts-ignore
export default NextAuth(authOptions);
