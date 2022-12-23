import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "cred",
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      // },
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
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    // @ts-ignore
    async signIn({ account, profile }) {
      console.log("::" + account.provider);
      console.log("::" + profile);
      if (account.provider === "google") {
        // we can do DB queries here
        console.log({
          name: profile.name,
          email: profile.email,
          image: profile.image,
        });
        return true;
      }
    },
  },
};
// @ts-ignore
export default NextAuth(authOptions);
