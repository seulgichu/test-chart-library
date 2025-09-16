import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">차트 라이브러리 테스트</h1>
      </header>

      <main className="flex flex-col gap-6 items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          <Link href="/recharts">
            <button className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
              Recharts
            </button>
          </Link>

          <Link href="/echarts">
            <button className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors">
              ECharts
            </button>
          </Link>

          <Link href="/chartjs">
            <button className="w-full px-6 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
              Chart.js
            </button>
          </Link>
        </div>

        <Link href="/comparison">
          <button className="px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors mt-4">
            라이브러리 비교
          </button>
        </Link>
      </main>

      <footer className="text-sm text-gray-500">
        Chart Library Comparison Demo
      </footer>
    </div>
  );
}
