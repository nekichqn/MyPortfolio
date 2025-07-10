import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfa] to-[#f1f1f1] text-black flex flex-col items-center px-4 py-10">
      {/* ヘッダー（ロゴ・見出し・説明） */}
      <header className="text-center space-y-4">
        <Image
          src="/img/cat.png" // ← 差し替え自由（public/works/logo.png に画像が必要）
          alt="logo"
          width={120}
          height={120}
          className="mx-auto rounded-full shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">My Portfolio</h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Web Design / Illustrator / Photoshop
        </p>
      </header>

      {/* 中央の作品誘導ボックス */}
      <section className="mt-10 bg-white shadow-lg p-6 sm:p-8 rounded-2xl border w-full max-w-sm text-center space-y-4">
        <p className="text-lg sm:text-xl font-medium">ポートフォリオをご覧ください</p>
        <a
          href="/works"
          className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          作品を見る
        </a>
      </section>

      {/* フッター */}
      <footer className="mt-auto text-sm text-gray-500 text-center pt-10">
        © 2025 Sae.Design. All rights reserved.
      </footer>
    </div>
  );
}
