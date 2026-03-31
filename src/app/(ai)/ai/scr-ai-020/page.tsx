"use client";

import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hours = ["09시", "12시", "15시", "18시", "21시"];
const days = ["월", "화", "수", "목", "금"];

const heatmapData: number[][] = [
  [30, 55, 40, 80, 65],
  [35, 60, 45, 85, 70],
  [25, 50, 35, 75, 60],
  [40, 70, 55, 90, 75],
  [45, 75, 60, 95, 80],
];

function getColor(value: number): string {
  if (value >= 90) return "bg-red-600 text-white";
  if (value >= 75) return "bg-red-400 text-white";
  if (value >= 60) return "bg-orange-400 text-white";
  if (value >= 45) return "bg-yellow-400 text-gray-800";
  if (value >= 30) return "bg-yellow-200 text-gray-800";
  return "bg-green-200 text-gray-800";
}

export default function ScrAi020() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">히트맵 분석</h2>

      <Card>
        <CardHeader><CardTitle className="text-sm">요일/시간대별 매출 강도 (5x5 히트맵)</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <div className="inline-grid gap-1" style={{ gridTemplateColumns: `60px repeat(${hours.length}, 80px)` }}>
              <div />
              {hours.map((h) => (
                <div key={h} className="text-center text-xs font-medium text-muted-foreground py-1">{h}</div>
              ))}
              {days.map((day, di) => (
                <>
                  <div key={`label-${day}`} className="flex items-center text-xs font-medium text-muted-foreground">{day}</div>
                  {heatmapData[di].map((val, hi) => (
                    <div
                      key={`${di}-${hi}`}
                      className={`flex items-center justify-center rounded p-2 text-sm font-bold ${getColor(val)}`}
                    >
                      {val}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span>낮음</span>
            <div className="flex gap-1">
              {["bg-green-200", "bg-yellow-200", "bg-yellow-400", "bg-orange-400", "bg-red-400", "bg-red-600"].map((c) => (
                <div key={c} className={`h-4 w-8 rounded ${c}`} />
              ))}
            </div>
            <span>높음</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
