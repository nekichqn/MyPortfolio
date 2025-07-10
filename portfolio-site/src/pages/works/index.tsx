import Image from "next/image";

export default function Works() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">作品一覧</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* 作品1 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
          <Image
            src="/works/work1.jpg"
            alt="作品1"
            width={400}
            height={300}
            className="rounded"
          />
          <p className="mt-2 text-sm text-gray-600">Illustrator / チラシデザイン</p>
        </div>

        {/* 作品2 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
          <Image
            src="/works/work2.jpg"
            alt="作品2"
            width={400}
            height={300}
            className="rounded"
          />
          <p className="mt-2 text-sm text-gray-600">Photoshop / バナー制作</p>
        </div>

        {/* 作品3 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
          <Image
            src="/works/work3.jpg"
            alt="作品3"
            width={400}
            height={300}
            className="rounded"
          />
          <p className="mt-2 text-sm text-gray-600">Webデザイン / LP</p>
        </div>
      </div>
    </main>
  );
}
