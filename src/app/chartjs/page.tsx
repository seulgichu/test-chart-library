import Navigation from "@/components/Navigation";

export default function ChartJSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Chart.js</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-600">
            간단하고 유연한 차트 라이브러리
          </h2>
          <p className="text-gray-600 mb-6">
            Chart.js는 HTML5 Canvas를 사용하여 간단하면서도 유연한 차트를
            제공합니다.
          </p>
          {/* 여기에 차트 컴포넌트가 들어갈 예정 */}
        </div>
      </div>
    </div>
  );
}
