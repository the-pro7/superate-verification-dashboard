// import styles from "./page.module.css";
import Link from "next/link";


export default async function Home() {


  return (
    <main className="flex items-center justify-center gap-9 flex-col h-dvh">
      <h1 className="font-bold text-gray-800 text-5xl mt-4">Superate App</h1>
    <div className="inline">
      <Link href="/verification" className="btn rounded-xl p-4 bg-sky-700 text-white">Go to verification dashboard</Link>
    </div>
    </main>
  );
}
