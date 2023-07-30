import NextAuth, {getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from 'next-auth/providers/credentials'
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
const adminEmails = ['seyedmahmoodhosseini@gmail.com', 'samisalazar786@gmail.com'];

export const authOptions = {
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "Dave", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: ({session, token, user}) => {
            if (adminEmails.includes(session?.user?.email)) {
                return session;
            } else {
                return false;
            }
        }
    }
};