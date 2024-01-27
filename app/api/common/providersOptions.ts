import GithubPrvider from "next-auth/providers/github";
import { GithubProfile } from "next-auth/providers/github";

export const githubProviders = [
    GithubPrvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
    })
]