import Image from "next/image";

export default function Works() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* 各作品カード */}
        {[
          { src: "/img/works/web01.png", alt: "作品1 Webサイト制作", label: "Webサイト制作" },
          { src: "/img/works/web02.png", alt: "作品2 Webサイト制作", label: "Webサイト制作" },
          { src: "/img/works/web03.png", alt: "作品3 Webサイトデザイン制作", label: "Webサイトデザイン制作" },
          { src: "/img/works/mv01.png", alt: "作品4 メインビジュアル制作", label: "メインビジュアル制作" },
          { src: "/img/works/mv02.png", alt: "作品5 メインビジュアル制作", label: "メインビジュアル制作" },
          { src: "/img/works/mv03.png", alt: "作品6 メインビジュアル制作", label: "メインビジュアル制作" },
          { src: "/img/works/ill01.png", alt: "作品7 3Dイラスト制作", label: "3Dイラスト制作" },
          { src: "/img/works/ill02.png", alt: "作品8 3Dイラスト制作", label: "3Dイラスト制作" },
          { src: "/img/works/bl01.png", alt: "作品9 3Dモデリング制作", label: "3Dモデリング制作" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="w-full h-[200px] relative overflow-hidden rounded">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
