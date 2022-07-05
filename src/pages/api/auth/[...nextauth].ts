import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        maxAge: 30 * 24 * 60 * 60,  // 30 days
        updateAge: 24 * 60 * 60,    // 24 hours
    },
    pages: {
        signIn: '/auth/signin',
    },
    // callbacks: {
    //     async signIn() {
    //         return true
    //     },
    //     async session({ session }) {
    //         return session
    //     },
    // }
})