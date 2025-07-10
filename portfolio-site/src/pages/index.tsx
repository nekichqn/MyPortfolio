import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="text-center mt-8">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="mt-2 text-gray-600">Web Design / Illustrator / Photoshop</p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <Image
          src="/img/logo2.png"
          alt="My Logo"
          width={120}
          height={120}
        />
        <a
          href="/works"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          作品を見る
        </a>
      </main>

      <footer className="text-sm text-gray-500 text-center mb-4">
        © 2025 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
