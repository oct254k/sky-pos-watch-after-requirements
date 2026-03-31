"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "ai";
  text: string;
}

const initialMessages: Message[] = [
  { role: "ai", text: "안녕하세요! 데이터 조회를 도와드리겠습니다. 궁금한 점을 자연어로 질문해 주세요." },
  { role: "user", text: "이번 달 매출이 가장 높은 매장은?" },
  { role: "ai", text: "2025년 1월 기준 매출 1위 매장은 '환승구역 D - 듀티프리마트'입니다.\n\n- 총 매출: 4.2억원\n- 전월 대비: +12.5%\n- 주요 품목: 위스키, 향수" },
  { role: "user", text: "이상거래가 많은 업체는?" },
  { role: "ai", text: "이상거래 탐지 건수 기준 상위 업체:\n\n1. 스카이푸드 - 4건 (매출누락, 현금비율이상, 할인남용 등)\n2. 듀티프리마트 - 3건 (매출급감, 이상금액, VAN불일치)\n3. 에어라운지 - 2건 (이상금액, 매출누락)" },
];

const dummyResponses: Record<string, string> = {
  default: "해당 질문에 대한 분석 결과를 준비 중입니다. 잠시 후 다시 시도해 주세요.",
};

export default function ScrAi026() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    const aiMsg: Message = { role: "ai", text: dummyResponses.default };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">자연어 질의 데이터 조회</h2>

      <Card>
        <CardContent className="p-4">
          <div className="h-[400px] overflow-y-auto space-y-3 mb-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="질문을 입력하세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend}>전송</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
