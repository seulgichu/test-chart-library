import { useQuery } from "@tanstack/react-query";

// Mock 데이터 타입 정의
export interface TimeStats {
  time: string;
  vehicleCount: number;
  averageSpeed: number;
  trafficVolume: number;
}

export interface DirectionStats {
  name: string;
  value: number;
  color: string;
}

export interface CarTypeStats {
  name: string;
  value: number;
  color: string;
}

export interface EventStats {
  event: string;
  count: number;
  color: string;
}

export interface DashboardData {
  timeStats: TimeStats[];
  byDirection: DirectionStats[];
  byCarType: CarTypeStats[];
  eventStats: EventStats[];
  lastUpdated: string;
}

// Mock 데이터 생성 함수
function generateMockData(): DashboardData {
  const now = new Date();
  const timeStats: TimeStats[] = [];

  // 지난 24시간 데이터 생성
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    timeStats.push({
      time: time.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      vehicleCount: Math.floor(Math.random() * 200) + 100,
      averageSpeed: Math.floor(Math.random() * 40) + 40,
      trafficVolume: Math.floor(Math.random() * 1000) + 500,
    });
  }

  const byDirection: DirectionStats[] = [
    {
      name: "상행",
      value: Math.floor(Math.random() * 500) + 300,
      color: "#3b82f6",
    },
    {
      name: "하행",
      value: Math.floor(Math.random() * 500) + 300,
      color: "#ef4444",
    },
    {
      name: "좌회전",
      value: Math.floor(Math.random() * 200) + 100,
      color: "#22c55e",
    },
    {
      name: "우회전",
      value: Math.floor(Math.random() * 200) + 100,
      color: "#f59e0b",
    },
  ];

  const byCarType: CarTypeStats[] = [
    {
      name: "승용차",
      value: Math.floor(Math.random() * 800) + 600,
      color: "#8b5cf6",
    },
    {
      name: "버스",
      value: Math.floor(Math.random() * 100) + 50,
      color: "#06b6d4",
    },
    {
      name: "트럭",
      value: Math.floor(Math.random() * 150) + 100,
      color: "#84cc16",
    },
    {
      name: "오토바이",
      value: Math.floor(Math.random() * 80) + 30,
      color: "#f97316",
    },
    {
      name: "기타",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#6b7280",
    },
  ];

  const eventStats: EventStats[] = [
    {
      event: "과속",
      count: Math.floor(Math.random() * 50) + 10,
      color: "#dc2626",
    },
    {
      event: "급정거",
      count: Math.floor(Math.random() * 30) + 5,
      color: "#ea580c",
    },
    {
      event: "차선변경",
      count: Math.floor(Math.random() * 80) + 20,
      color: "#ca8a04",
    },
    {
      event: "신호위반",
      count: Math.floor(Math.random() * 20) + 2,
      color: "#9333ea",
    },
    {
      event: "주차위반",
      count: Math.floor(Math.random() * 15) + 3,
      color: "#0891b2",
    },
  ];

  return {
    timeStats,
    byDirection,
    byCarType,
    eventStats,
    lastUpdated: now.toISOString(),
  };
}

// Mock API 함수
async function fetchDashboardStats(): Promise<DashboardData> {
  // 실제 환경에서는 API 호출
  // const res = await fetch('/api/dashboard/stats');
  // return res.json();

  // Mock 데이터 반환 (실제 API 지연 시뮬레이션)
  await new Promise((resolve) => setTimeout(resolve, 300));
  return generateMockData();
}

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchDashboardStats,
    refetchInterval: 60_000, // 1분마다 자동 갱신
    staleTime: 50_000, // 50초 동안 fresh 상태 유지
  });
}
