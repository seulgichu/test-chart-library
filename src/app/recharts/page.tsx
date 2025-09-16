"use client";

import Navigation from "@/components/Navigation";
import { useDashboardData } from "@/hooks/useDashboardData";
import RechartsCombo from "@/components/charts/RechartsCombo";
import RechartsPie from "@/components/charts/RechartsPie";
import RechartsBar from "@/components/charts/RechartsBar";

export default function RechartsPage() {
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 h-96 bg-gray-300 rounded"></div>
              <div className="col-span-4 h-80 bg-gray-300 rounded"></div>
              <div className="col-span-4 h-80 bg-gray-300 rounded"></div>
              <div className="col-span-4 h-80 bg-gray-300 rounded"></div>
              <div className="col-span-12 h-80 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto p-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-red-800 font-semibold">데이터 로딩 오류</h3>
            <p className="text-red-600 mt-2">
              대시보드 데이터를 불러오는 중 오류가 발생했습니다.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto p-8">
        {/* 헤더 */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 mb-2">
              Recharts 대시보드
            </h1>
            <p className="text-gray-600">
              실시간 교통 통계 대시보드 (1분마다 자동 갱신)
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">마지막 업데이트</p>
            <p className="text-lg font-semibold text-gray-700">
              {new Date(data.lastUpdated).toLocaleTimeString("ko-KR")}
            </p>
          </div>
        </div>

        {/* 대시보드 그리드 */}
        <div className="grid grid-cols-12 gap-6">
          {/* 상단: 시간대별 복합 차트 */}
          <div className="col-span-12">
            <RechartsCombo data={data.timeStats} />
          </div>

          {/* 중단: 3개의 파이/도넛 차트 */}
          <div className="col-span-12 lg:col-span-4">
            <RechartsPie
              data={data.byDirection}
              title="방향별 차량 분포"
              showAsDonut={true}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <RechartsPie
              data={data.byCarType}
              title="차종별 분포"
              showAsDonut={true}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-center mb-4">
                라이브러리 특징
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">장점</h4>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>• React 컴포넌트 기반</li>
                    <li>• 선언적 문법</li>
                    <li>• TypeScript 지원</li>
                    <li>• 반응형 디자인</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">단점</h4>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>• 제한적인 차트 유형</li>
                    <li>• 큰 번들 사이즈</li>
                    <li>• 복잡한 커스터마이징</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 하단: 이벤트 바 차트 */}
          <div className="col-span-12">
            <RechartsBar data={data.eventStats} />
          </div>
        </div>

        {/* 실시간 상태 표시 */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
            실시간 데이터 수신 중 (다음 갱신: 60초 후)
          </div>
        </div>
      </div>
    </div>
  );
}
