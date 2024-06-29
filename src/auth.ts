import NextAuth, { Session } from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google";
import { NextRequest } from "next/server"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github,google],
  callbacks: {
    'authorized': ({request,auth}) => {
      
      console.log('pathname -> ',request.nextUrl.pathname);
      console.log('auth -> ',auth);
      
      return true
    }
  }
})