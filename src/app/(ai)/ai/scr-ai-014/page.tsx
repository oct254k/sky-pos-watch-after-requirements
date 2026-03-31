"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const dummyResults = [
  { code: "STD-BEV-030", category: "음료>커피>콜드브루", confidence: 95 },
  { code: "STD-BEV-031", category: "음료>커피>아이스커피", confidence: 88 },
  { code: "STD-BEV-032", category: "음료>음료>아이스드링크", confidence: 72 },
];

export default function ScrAi014() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof dummyResults>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setResults(dummyResults);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">LLM 품목코드 추천/생성</h2>

      <Card>
        <CardHeader><CardTitle className="text-sm">품목명 입력</CardTitle></CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="품목명을 입력하세요 (예: 콜드브루 아이스)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? "분석중..." : "추천 받기"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">추천 결과</h3>
          {results.map((r, i) => (
            <Card key={r.code} className={i === 0 ? "border-blue-300 bg-blue-50" : ""}>
              <CardContent className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-sm font-medium">{r.category}</p>
                  <p className="text-xs text-muted-foreground">코드: {r.code}</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${r.confidence >= 90 ? "text-green-600" : r.confidence >= 80 ? "text-yellow-600" : "text-red-600"}`}>
                    {r.confidence}%
                  </p>
                  <p className="text-xs text-muted-foreground">신뢰도</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
