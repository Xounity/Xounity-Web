import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/app/connectDB";
import { User } from "@/app/models/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB(process.env.MONGO_URL);

        try {
          const user = await User.findOne({email: credentials.email});
          if (!user) {
            throw new Error("Invalid email or password");
          } else {
            const isPasswordCorrect = await User.matchPassword(credentials.email, credentials.password);
            if(isPasswordCorrect){
              return user;
            }
            else{
              throw new Error("Invalid email or password");
            }
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
    updateAge: 24 * 60 * 60 // 1 day
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  secret: process.env.NEXTAUTH_SECRET
};
