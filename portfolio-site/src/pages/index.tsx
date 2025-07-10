import Image from "next/image";

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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Profile</h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Web Design / Illustrator / Photoshop / Figma
        </p>
      </header>

      {/* 自己紹介 */}
      <section className="mt-8 max-w-xl bg-white p-6 rounded-xl shadow-md text-left space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
          <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li><strong>名前：</strong> Sae</li>
            <li><strong>誕生日：</strong> 2003.04.07</li>
            <li><strong>出身地：</strong> 東京都</li>
            <li><strong>趣味：</strong> 音楽、ダンス、コスメ、かわいいもの集め</li>
            <li><strong>MBTI：</strong> ENTP</li>
            <li><strong>好きな色：</strong> パステルカラー</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">スキル</h3>
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
          </div>
        </div>
      </section>


      {/* 作品誘導ボックス */}
      <section className="mt-10 w-full max-w-sm text-center">
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
