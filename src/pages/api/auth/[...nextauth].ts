import { NextApiHandler } from "next";
import NextAuth from "next-auth";


import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";

import EmailProvider from "next-auth/providers/email";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "../../../lib/prismadb";

// we will define `options` up next
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;


const options = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      TwitchProvider({
        clientId: process.env.TWITCH_ID,
        clientSecret: process.env.TWITCH_SECRET
      }),
      DiscordProvider({
        clientId: process.env.DISCORD_ID,
        clientSecret: process.env.DISCORD_SECRET
      }),
      EmailProvider({
        server: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
        from: process.env.SMTP_FROM, // The "from" address that you want to use
      }),
    ],
    pages: {
      signIn: '/login',
      signOut: '/logout',
      error: '/error', // Error code passed in query string as ?error=
      verifyRequest: '/verify-request', // (used for check email message)
      newUser: '/profile' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
  };
  