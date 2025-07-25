import Image from "next/image";
import Link from "next/link";  // ← これを追加

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfa] to-[#f1f1f1] text-black flex flex-col items-center px-4 py-10">
      {/* ヘッダー */}
      <header className="text-center space-y-4">
        <Image
          src="/img/cat.png"
          alt="logo"
          width={120}
          height={120}
          className="mx-auto rounded-full shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Sae</h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Web Design / Illustrator / Photoshop / Figma
        </p>
      </header>

      {/* 自己紹介 */}
      <section className="mt-8 max-w-xl bg-white p-8 rounded-2xl shadow-lg text-left space-y-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-pink-200 pb-2">PROFILE</h2>

        <dl className="grid grid-cols-2 gap-y-6 gap-x-8">
          <div>
            <dt className="text-pink-300 font-semibold mb-1">name</dt>
            <dd className="text-gray-800 text-lg">飯島 さえら - Saera IIjima</dd>
          </div>
          <div>
            <dt className="text-pink-300 font-semibold mb-1">location</dt>
            <dd className="text-gray-800 text-lg">東京都 - Japan,Tokyo</dd>
          </div>
          <div>
            <dt className="text-pink-300 font-semibold mb-1">hobbies</dt>
            <dd>
              <span className="inline-block bg-pink-100 text-pink-400 rounded-full px-3 py-1 text-sm mr-2">🎵 音楽</span>
              <span className="inline-block bg-pink-100 text-pink-400 rounded-full px-3 py-1 text-sm">🎀 可愛いもの集め</span>
            </dd>
          </div>
          <div>
            <dt className="text-pink-300 font-semibold mb-1">mbti</dt>
            <dd className="text-gray-800 text-lg">ENTP</dd>
          </div>
          <div>
            <dt className="text-pink-300 font-semibold mb-1">favorite color</dt>
            <dd className="text-gray-800 text-lg">パステルピンク</dd>
          </div>
        </dl>

        <div>
          <h3 className="text-pink-300 font-semibold mb-2">skill</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/html.svg" alt="HTML" width={48} height={48} />
              <span className="mt-2 text-sm">HTML</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/css.svg" alt="CSS" width={48} height={48} />
              <span className="mt-2 text-sm">CSS</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/javascript.svg" alt="JavaScript" width={48} height={48} />
              <span className="mt-2 text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/illustrator.svg" alt="Illustrator" width={48} height={48} />
              <span className="mt-2 text-sm">Illustrator</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/photoshop.svg" alt="Photoshop" width={48} height={48} />
              <span className="mt-2 text-sm">Photoshop</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/figma.svg" alt="Figma" width={48} height={48} />
              <span className="mt-2 text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/blender.svg" alt="blender" width={48} height={48} />
              <span className="mt-2 text-sm">blender</span>
            </div>
            <div className="flex flex-col items-center w-20">
              <Image src="/img/icons/github.svg" alt="GitHub" width={48} height={48} />
              <span className="mt-2 text-sm">GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* 作品誘導ボックス */}
      <section className="mt-10 w-full max-w-sm text-center">
        <Link href="/works">
          <a className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            View Works
          </a>
        </Link>
      </section>

      {/* フッター */}
      <footer className="mt-auto text-sm text-gray-500 text-center pt-10">
        © 2025 Sae.Design. All rights reserved.
      </footer>
    </div>
  );
}
