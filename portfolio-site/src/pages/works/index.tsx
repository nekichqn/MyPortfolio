import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  const works = [
    {
      src: "/img/works/web01.png",
      alt: "作品1 Webサイト制作",
      label: "宇都宮に行こう！",
      description:
        "レスポンシブ対応のWebサイト制作。\n\nHTML、CSS、JavaScriptを使用し、宇都宮のおすすめ情報を紹介するサイトです。\nユーザーが簡単に情報を得られるように、シンプルで直感的なデザインを心掛けました。\nすべてオリジナルの画像と素材で制作しています。\n何度も先生からアドバイスをもらいながら制作し、自信が付いた作品です。",
      url: "https://nekichqn.github.io/Utsunomiya/",
    },
    {
      src: "/img/works/web02.png",
      alt: "作品2 Webサイト制作",
      label: "MBTI愛性診断",
      description:
        "授業でJSを学習し、課題として制作したサイトです。\n\n短期間でデザインを重視して制作したので、\n個人でより正確な愛性が診断できるように改良しました。",
      url: "https://nekichqn.github.io/mbti-site/",
    },
    {
      src: "/img/works/web04.png",
      alt: "作品3 Webサイト制作",
      label: "美味しいレストランを見つけよう",
      description:
        "HotPepperのAPIを使用して、近くのレストランを検索するサイトです。\n\nHTML、CSS、JavaScriptを使用し、レスポンシブ対応で制作しました。\nまた、GoogleMapAPIを使用し地図の表示もしています。\nこの作品では、APIの活用方法やデータの取得・表示について学びました。",
        url: "https://nekichqn.github.io/RestaurantSearch/index.html",
    },
    {
      src: "/img/works/mv01.png",
      alt: "作品4 メインビジュアル制作",
      label: "メインビジュアル制作",
      description:
        "Illustratorの授業で先生に教わりながら制作したメインビジュアルです。\n\nこの作品を通じて、色彩やレイアウトの重要性を学びました。\nまた、ビジュアル制作の基礎を身につけることができました。",
    },
    {
      src: "/img/works/mv02.png",
      alt: "作品5 メインビジュアル制作",
      label: "メインビジュアル制作",
      description:
        "Illustratorの授業で自身で考え制作したメインビジュアルです。\n\nこれまでの制作で学んだメインビジュアル制作の基礎を活かし、\n色彩やレイアウトを自身で考えながら制作しました。",
    },
    {
      src: "/img/works/mv03.png",
      alt: "作品6 メインビジュアル制作",
      label: "メインビジュアル制作",
      description:
        "Illustratorの授業で自身で考え制作したメインビジュアルです。\n\nこの作品では、食べ物の魅力を引き出すために、色彩や構図に特に注意を払い、\n視覚的に訴えるデザインを心掛けました。",
    },
    {
      src: "/img/works/ill02.png",
      alt: "作品8 3Dイラスト制作",
      label: "初めての3Dイラスト制作",
      description:
        "Illustratorの基礎を学んでから自身でツールを調べ、3Dイラストを制作しました。\n\nこの作品では、猫が魚を思い浮かべている様子を表現しています。\n初めて制作した3Dイラストだったのでマテリアルの設定やライティングに苦労し、\nもっと改善したい点もありますが、全体的に立体感と奥行きを感じさせる作品に仕上げています。",
    },
    {
      src: "/img/works/ill01.png",
      alt: "作品7 3Dイラスト制作",
      label: "3Dイラスト制作",
      description:
        "Illustratorの基礎を学んでから自身でツールを調べ、3Dイラストを制作しました。\n\nこの作品では、3Dアートの基本的な技術やツールの使い方を学び、\n立体的な表現を通じて、より深い視覚的なインパクトを与えることを目指しました。\nまた、色彩や形状のバランスにも注意を払い、全体的に調和のとれた作品に仕上げています。",
    },
    {
      src: "/img/works/bl01.png",
      alt: "作品9 3Dモデリング制作",
      label: "初めての3Dモデリング制作",
      description:
        "初めてblenderを使用して3Dキャラクターの制作をしました。\n\nモデリングからテクスチャ、照明やカメラの設定まで動画を参考に制作しました。\nこの作品では、blenderの基本的な操作や3Dモデリングの技術を学び、\n立体的なオブジェクトを作成する楽しさを体験しました。\nもっときれいに形を整えたり、テクスチャを工夫したりする余地がありますが、\n3Dモデリングの基礎を理解する良いスタートとなりました。",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedWork = selectedIndex !== null ? works[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < works.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {works.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="w-full h-[200px] relative overflow-hidden rounded">
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </a>
      </div>

      {/* モーダル */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* ＜ 前 */}
          {selectedIndex !== null && selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl text-white hover:text-gray-300 z-50"
              aria-label="前へ"
            >
              &lt;
            </button>
          )}

          {/* ＞ 次 */}
          {selectedIndex !== null && selectedIndex < works.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl text-white hover:text-gray-300 z-50"
              aria-label="次へ"
            >
              &gt;
            </button>
          )}

          {/* モーダル本体 */}
          <div
            className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto p-6 z-40"
            onClick={(e) => e.stopPropagation()}
          >

            {/* 内容 */}
            <div className="relative w-full h-[400px] sm:h-[500px] mb-4">
              <Image src={selectedWork.src} alt={selectedWork.alt} fill className="object-contain" />
            </div>

            <h2 className="text-xl font-semibold">{selectedWork.label}</h2>

            <p className="mt-2 text-gray-700 whitespace-pre-line">{selectedWork.description}</p>

            {selectedWork.url && (
              <p className="mt-4">
                <a
                  href={selectedWork.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Go WebSite
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
