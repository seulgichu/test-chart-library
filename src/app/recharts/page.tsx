import Navigation from "@/components/Navigation";

export default function RechartsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Recharts</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-600">
            React 전용 차트 라이브러리
          </h2>
          <p className="text-gray-600 mb-6">
            Recharts는 React와 D3를 기반으로 한 선언적 차트 라이브러리입니다.
          </p>

          {/* 여기에 차트 컴포넌트가 들어갈 예정 */}
        </div>
      </div>
    </div>
  );
}
