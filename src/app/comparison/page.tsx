import Navigation from "@/components/Navigation";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">
          차트 라이브러리 비교
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 font-semibold text-gray-800">
                    특징
                  </th>
                  <th className="py-4 px-6 font-semibold text-blue-600">
                    Recharts
                  </th>
                  <th className="py-4 px-6 font-semibold text-green-600">
                    ECharts
                  </th>
                  <th className="py-4 px-6 font-semibold text-purple-600">
                    Chart.js
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    React 통합
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    TypeScript 지원
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    차트 종류
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">성능</td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    학습 곡선
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    번들 크기
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    커스터마이징
                  </td>
                  <td className="py-4 px-6 text-orange-500 font-medium">
                    ⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-4 px-6 text-green-600 font-medium">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                Recharts 추천 상황
              </h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• React 프로젝트</li>
                <li>• 간단한 차트가 필요한 경우</li>
                <li>• TypeScript 사용</li>
                <li>• 빠른 개발이 필요한 경우</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-600 mb-3">
                ECharts 추천 상황
              </h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• 복잡한 인터랙티브 차트</li>
                <li>• 대용량 데이터 처리</li>
                <li>• 다양한 차트 유형 필요</li>
                <li>• 고급 커스터마이징</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">
                Chart.js 추천 상황
              </h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• 작은 번들 크기 중요</li>
                <li>• 간단한 설정</li>
                <li>• 애니메이션 중심</li>
                <li>• 초보자 친화적</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
