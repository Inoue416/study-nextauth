import NextAuth from "next-auth/next";
import { githubProviders } from "../common/providersOptions";

export const authOptions = {
    providers: [
        githubProviders,
    ],
}

export default NextAuth(authOptions);