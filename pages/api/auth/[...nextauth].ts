// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);

// import Auth0Provider from "next-auth/providers/auth0";
// import GoogleProvider from "next-auth/providers/google";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// https://next-auth.js.org/configuration/providers/oauth

// GoogleProvider({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_SECRET,
// }),

// import { NextApiHandler } from "next";
// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import GitHubProvider from "next-auth/providers/github";
// import prisma from "../../../lib/prisma";

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

// const options = {
//   debug: true,
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.SECRET,
// };
// Auth0Provider({
//   clientId: process.env.AUTH0_ID,
//   clientSecret: process.env.AUTH0_SECRET,
//   issuer: process.env.AUTH0_ISSUER,
// }),
