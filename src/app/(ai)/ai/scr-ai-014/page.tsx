"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { SearchPanel } from "@/components/common/SearchPanel";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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

      <SearchPanel
        title="품목코드 추천 조건"
        onSearch={handleSearch}
        onReset={() => {
          setQuery("");
          setResults([]);
        }}
        loading={loading}
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#64748b]">품목명</label>
          <Input
            placeholder="품목명을 입력하세요 (예: 콜드브루 아이스)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-9 bg-white"
          />
        </div>
      </SearchPanel>

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
