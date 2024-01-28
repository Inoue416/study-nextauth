"use client";
import { SessionProvider } from "next-auth/react";
import Auth from "../components/Auth";

export default function Home() {
  return (
    <>
      <div className="mt-3">
        <SessionProvider>
          <Auth />
        </SessionProvider>
      </div>
    </>
  );
}
