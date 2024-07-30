"use client";
import LoginForm from "@/components/form/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import {IoClose} from "react-icons/io5"

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>("");


  useEffect(() => {
    if (typeof window != "undefined") {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <main className="flex items-center justify-center gap-9 flex-col h-dvh">
      <Image
        src="/logo.png"
        width={75}
        height={75}
        alt="Superate logo main"
        className="rounded-full bg-red-100 shadow-lg"
      />
      <h1 className="font-bold text-gray-800 text-5xl mt-4">Superate App</h1>
      <div className="inline">
        {/* <Link href="/verification" className="btn rounded-xl p-4 bg-sky-700 text-white">Go to verification dashboard</Link> */}
        <button
          className="btn bg-sky-500 p-4 rounded-lg text-white tracking-widest"
          type="button"
          onClick={() => {
            if (accessToken) {
              router.push("/admin");
            }

            openDialog();
          }}
        >
          Go to verification dashboard
        </button>
      </div>
      <dialog ref={dialogRef} className="p-4 w-4/12 overflow-clip rounded-lg">
        <Button
          type="button"
          onClick={closeDialog}
          title="Close Dialog"
          className="font-light bg-gray-500 text-white hover:bg-black !ml-auto mb-3"
        >
          <IoClose className="text-xl"/>
        </Button>
        <h2 className="text-xl font-semibold tracking-wider">Authentication</h2>
        <LoginForm />
      </dialog>
    </main>
  );
}
