"use client";
import LoginForm from "@/components/form/login-form/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>("");

  useEffect(() => {
    // Make sure were on the client not the server
    if (typeof window != "undefined") {
      // Then access token
      setAccessToken(sessionStorage.getItem("accessToken"));

      if (!localStorage.getItem("role")) {
        localStorage.setItem("role", "Moderator");
      }
    }
  }, []);

  // Open HTML dialog element

  // Close HTML dialog element
  return (
    <main className="flex items-center justify-center gap-5 flex-col h-dvh">
      <Image
        src="/logo.png"
        width={75}
        height={75}
        alt="Superate logo main"
        className="rounded-full bg-red-100 shadow-lg"
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-black text-gray-800 text-5xl mt-4">Superate App</h1>
        <p className="text-xl text-center text-neutral-500 font-light tracking-wide">
          Welcome to the Superate app admin verifications dashboard
        </p>
      </div>
      <div className="inline">
        {accessToken ? (
          <button
            className="btn bg-sky-500 p-4 rounded-lg text-white tracking-wider font-semibold font-poppins"
            type="button"
            title="Go to admin verifications dashboard"
            onClick={() => {
              if (accessToken && typeof accessToken !== "undefined") {
                router.push("/admin-dashboard/verifications-overview");
              }
            }}
          >
            Go to verification dashboard
          </button>
        ) : (
          <Link
            href="/login"
            className="capitalize bg-sky-500 text-white p-3 rounded-lg mt-3"
          >
            Login as admin
          </Link>
        )}
      </div>
    </main>
  );
}
