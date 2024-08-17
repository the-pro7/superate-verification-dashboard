"use client";
import LoginForm from "@/components/form/login-form/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>("");

  useEffect(() => {
    // Make sure were on the client not the server
    if (typeof window != "undefined") {
      // Then access token
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  // Open HTML dialog element
  function openDialog() {
    dialogRef.current?.showModal();
  }

  // Close HTML dialog element
  function closeDialog() {
    dialogRef.current?.close();
  }

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
        {/* <Link href="/verification" className="btn rounded-xl p-4 bg-sky-700 text-white">Go to verification dashboard</Link> */}
        <button
          className="btn bg-sky-500 p-4 rounded-lg text-white tracking-wider font-semibold font-poppins"
          type="button"
          title="Go to admin verifications dashboard"
          onClick={() => {
            if (accessToken && typeof accessToken !== null) {
              router.push("/admin-dashboard");
            }

            openDialog();
          }}
        >
          Go to verification dashboard
        </button>
      </div>
      <dialog ref={dialogRef} className="p-4 w-4/12 overflow-clip rounded-lg">
       <div className="flex items-end justify-end">
       <Button
          type="button"
          onClick={closeDialog}
          title="Close Dialog"
          className="font-light bg-gray-500 text-white hover:bg-black mb-3 rounded-full"
        >
          <IoClose className="text-2xl" />
        </Button>
       </div>
        <div className="my-2 flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold tracking-wider">
            Superate Authorization
          </h2>
          <p className="text-sm font-medium tracking-wide text-center text-neutral-500">
            Let's verify that you're an admin.
          </p>
        </div>
        <LoginForm />
      </dialog>
    </main>
  );
}
