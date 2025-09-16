import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full bg-gray-100 p-4 mb-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
        <Link href="/">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors">
            홈
          </button>
        </Link>
        <Link href="/recharts">
          <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium transition-colors">
            Recharts
          </button>
        </Link>
        <Link href="/echarts">
          <button className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-medium transition-colors">
            ECharts
          </button>
        </Link>
        <Link href="/chartjs">
          <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-medium transition-colors">
            Chart.js
          </button>
        </Link>
        <Link href="/comparison">
          <button className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition-colors">
            비교
          </button>
        </Link>
      </div>
    </nav>
  );
}
