import NextAuth from "next-auth";
import { authOptions } from "@/libs/next-auth";

const { handlers } = NextAuth(authOptions);

export const { GET, POST } = handlers;
