import { Globe } from "lucide-react";

export default function ScrAi026V2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {/* Page title */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, background: "#e6f1fb",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, color: "#185fa5", marginTop: 1,
        }}>
          <Globe size={17} />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a18", lineHeight: 1.3 }}>
            SKY-POS 온톨로지 AI 가격비교 챗봇 어시스턴트
          </div>
          <div style={{ fontSize: 11, color: "#5a5a56", marginTop: 3 }}>
            한국공항공사 차세대 SKY-POS 구축 — 임대ERP 신규 품목 등록 지원 시나리오
          </div>
        </div>
      </div>

      {/* iframe */}
      <iframe
        src="/skypos-chatbot.html"
        style={{
          width: "100%",
          height: "calc(100vh - 220px)",
          minHeight: 480,
          border: "0.5px solid rgba(0,0,0,0.12)",
          borderRadius: 14,
          display: "block",
        }}
        title="SKY-POS 온톨로지 AI 챗봇"
      />
    </div>
  );
}
