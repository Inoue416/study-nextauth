import { githubProviders } from "../../common/providersOptions";
import NextAuth from "next-auth";

const handler = NextAuth({
    providers: githubProviders,
    pages: { signIn: "/auth/login" },
    session: { strategy: "jwt" },
    callbacks: {
        jwt: ({ token, user }) => {
            if(user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                };
            }
            return token;
        },
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            };
        },
    }
});
export { handler as GET, handler as POST };