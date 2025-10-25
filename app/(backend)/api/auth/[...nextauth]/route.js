import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongo from "@/db/db";
import { Admin } from "@/models/adminModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectMongo();
        const user = await Admin.findOne({ email: credentials.email });
        if (!user) throw new Error("Invalid email");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Incorrect password");

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // session base (cookie + JWT)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
