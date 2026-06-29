"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import styles from "./chatbot.module.css";
import {
  Brain,
  User,
  Database,
  BarChart3,
  Calculator,
  ShieldCheck,
  Shield,
  AlertTriangle,
  Info,
  Check,
  X,
  MessageSquare,
  CheckCircle2,
  FileText,
  TrendingUp,
  Send,
  Globe,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type MsgRole = "user" | "ai" | "typing";
interface Msg {
  id: number;
  role: MsgRole;
  content: ReactNode;
}

let msgCounter = 0;
const nextId = () => ++msgCounter;

// ── Shared sub-components ──────────────────────────────────────────────────
function KvRow({ label, children, variant }: { label: string; children: ReactNode; variant?: "accent" | "success" | "warning" | "danger" }) {
  const valClass = variant === "accent" ? styles.kvValAccent
    : variant === "success" ? styles.kvValSuccess
    : variant === "warning" ? styles.kvValWarning
    : variant === "danger" ? styles.kvValDanger
    : styles.kvVal;
  return (
    <div className={styles.kvRow}>
      <span className={styles.kvKey}>{label}</span>
      <span className={valClass}>{children}</span>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardHeader}>{icon}{title}</div>
      <div className={styles.infoCardBody}>{children}</div>
    </div>
  );
}

function InlineRef({ children }: { children: ReactNode }) {
  return <div className={styles.inlineRef}><Info size={11} />{children}</div>;
}

function StepItem({ color, bg, label, children }: { color: string; bg: string; label: string; children: ReactNode }) {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepNum} style={{ background: bg, color }}>{label}</div>
      <span>{children}</span>
    </div>
  );
}

// ── Static initial messages ───────────────────────────────────────────────
function AiGreeting() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      안녕하세요. SKY-POS 온톨로지 AI입니다.<br />
      품목 등록, 가격 비교, 수수료 산정 등 임대 업무 전반을 지원합니다.<br />
      신규 품목 등록 요청을 입력해 주세요.
    </div>
  );
}

function AiItemInfo() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      온톨로지 추론을 시작합니다. 연관 노드를 자동 탐색 중…
      <InfoCard icon={<Database size={12} />} title="품목 기준정보 자동 조회 결과">
        <KvRow label="브랜드">파스쿠찌 (PASCUCCI)</KvRow>
        <KvRow label="업종 분류">F&amp;B &gt; 커피·음료 &gt; 시그니처음료</KvRow>
        <KvRow label="품목 코드 (예상)" variant="accent">FB-COF-SIG-0391</KvRow>
        <KvRow label="사이즈">L (Large) — 355ml 이상</KvRow>
        <KvRow label="원재료 분류">콜드브루 원액 + 망고 퓨레 + 우유</KvRow>
        <KvRow label="부가세 유형">과세 (10%)</KvRow>
        <KvRow label="매핑 업종요율 적용 기준" variant="accent">비교징수 (고정 vs 변동)</KvRow>
      </InfoCard>
      <InlineRef>온톨로지 참조: MST_ITEM_CLASS ↔ MST_BRAND ↔ SAL_RECEIPT_ITEM</InlineRef>
    </div>
  );
}

const priceData = [
  { label: "파스쿠찌 직영점", width: "55%", color: "#1D9E75", val: "6,600원" },
  { label: "파스쿠찌 가맹점", width: "62%", color: "#5DCAA5", val: "6,900원" },
  { label: "스타벅스 동급", width: "82%", color: "#B4B2A9", val: "7,400원" },
  { label: "투썸플레이스", width: "70%", color: "#B4B2A9", val: "7,000원" },
  { label: "폴바셋", width: "76%", color: "#B4B2A9", val: "7,200원" },
  { label: "병원 내 카페", width: "65%", color: "#B4B2A9", val: "6,800원" },
];

function AiPriceCompare() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      품목 분류를 확인했습니다. 이어서 <strong>가격 비교 분석</strong>을 자동 수행합니다.
      <InfoCard icon={<BarChart3 size={12} />} title="시장 가격 비교 — 동급 브랜드 기준 (L사이즈)">
        {priceData.map((d) => (
          <div key={d.label} className={styles.barRow}>
            <div className={styles.barLabel}>{d.label}</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: d.width, background: d.color }} />
            </div>
            <div className={styles.barVal}>{d.val}</div>
          </div>
        ))}
        <div className={styles.barRow}>
          <div className={styles.barLabel} style={{ fontWeight: 500, color: "#185fa5" }}>▶ 공항 신청가</div>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: "70%", background: "#378ADD" }} />
          </div>
          <div className={styles.barVal} style={{ color: "#185fa5", fontWeight: 500 }}>7,000원</div>
        </div>
      </InfoCard>
      <div className={styles.tagRow}>
        <span className={styles.tag + " " + styles.tagGreen}>시장 중간값 6,950원</span>
        <span className={styles.tag + " " + styles.tagBlue}>신청가 +0.7%</span>
        <span className={styles.tag + " " + styles.tagAmber}>공항 프리미엄 10~15% 범위 내</span>
        <span className={styles.tag + " " + styles.tagGreen}>적정 범위 ✓</span>
      </div>
      <InlineRef>온톨로지 참조: PRICE_COMPARE_GRAPH ↔ MARKET_CHANNEL_NODE ↔ LOCATION_TYPE</InlineRef>
    </div>
  );
}

function AiFeeCalc() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      다음으로 <strong>수수료(임대료) 자동 산정</strong>을 수행합니다. 해당 매장 계약 조건 기준입니다.
      <InfoCard icon={<Calculator size={12} />} title="영업요율 기반 수수료 시뮬레이션">
        <KvRow label="적용 산정 방식">비교징수 — 고정임대료 vs 변동임대료</KvRow>
        <KvRow label="영업요율 (업종기준)" variant="accent">11.0% (커피·음료 F&amp;B)</KvRow>
        <KvRow label="예상 판매 수량/월">300잔 (과거 유사품목 분석)</KvRow>
        <KvRow label="월 예상 매출액">7,000원 × 300 = <strong>2,100,000원</strong></KvRow>
        <KvRow label="변동임대료 (매출×요율)" variant="success">2,100,000 × 11% = <strong>231,000원/월</strong></KvRow>
        <KvRow label="고정임대료 (계약 기준)">185,000원/월</KvRow>
        <KvRow label="적용 임대료 (max)" variant="success">231,000원/월 (변동 적용)</KvRow>
        <KvRow label="추가임대료 (차액)" variant="warning">+46,000원/월 → 연 552,000원</KvRow>
      </InfoCard>
      <div className={styles.feeBox}>
        <div className={styles.feeMain}>연간 공항공사 수입 기여: +552,000원</div>
        <div className={styles.feeSub}>신제품 1개 추가 시 / 변동임대료 비교징수 방식 적용 기준</div>
      </div>
      <div className={styles.warnBox}>
        <AlertTriangle size={13} style={{ marginTop: 1, flexShrink: 0 }} />
        <span>실제 매출이 확정되면 차기년도 2~3월 최종 정산됩니다 (ZRTR0160 자동 연동 예정)</span>
      </div>
      <InlineRef>온톨로지 참조: RENTAL_RATE_NODE ↔ CONTRACT_MASTER ↔ SALE_VOLUME_ESTIMATE</InlineRef>
    </div>
  );
}

function AiRegCheck({ onApprove, onReject, onAsk, actionDone }: {
  onApprove: () => void; onReject: () => void; onAsk: () => void; actionDone: boolean;
}) {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <strong>품목 제한 규정 자동 검토</strong> 결과입니다.
      <InfoCard icon={<ShieldCheck size={12} />} title="규정 적합성 체크리스트">
        <div className={styles.stepList}>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">독점·경쟁 품목 충돌 없음 — 해당 공항 내 동일 메뉴 판매 업체 없음</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">비교 기준 상권 적합 — 특수상권(강남 고가 매장)이 아닌 동급 프랜차이즈 기준 적용</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">품목 분류 코드 자동 매핑 완료 — 미매핑 위험 없음</StepItem>
          <StepItem bg="#faeeda" color="#854f0b" label="!">가격 차이 모니터링 권고 — 직영점 대비 +6.1%, 30일 후 자동 알림 설정</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">SKY-NET 전자결재 자동 연동 — 승인 즉시 SAP 임대ERP 반영</StepItem>
        </div>
        <div className={styles.tagRow}>
          <span className={styles.tag + " " + styles.tagGreen}>4개 항목 적합</span>
          <span className={styles.tag + " " + styles.tagAmber}>1개 항목 모니터링</span>
          <span className={styles.tag + " " + styles.tagBlue}>종합: 등록 권장</span>
        </div>
      </InfoCard>
      <div className={styles.aiOpinionBox}>
        <strong style={{ color: "#1a1a18" }}>💡 AI 종합 의견</strong><br />
        신청가 7,000원은 시장 적정 범위 내이며, 품목 제한 규정에도 문제 없습니다.<br />
        변동임대료 기준 연간 <strong>+552,000원</strong>의 추가 수입이 기대됩니다.<br />
        <em style={{ color: "#9a9994" }}>최종 결정은 담당자가 수행하며, AI는 보조 의견을 제공합니다.</em>
      </div>
      {!actionDone && (
        <div className={styles.approveRow}>
          <button className={styles.btnApprove} onClick={onApprove}><Check size={13} /> 등록 승인</button>
          <button className={styles.btnAsk} onClick={onAsk}><MessageSquare size={13} /> 추가 질문</button>
          <button className={styles.btnReject} onClick={onReject}><X size={13} /> 반려</button>
        </div>
      )}
    </div>
  );
}

function AiApproved() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <div className={styles.approvedBanner}>
        <CheckCircle2 size={20} color="#3b6d11" />
        <div>
          <div className={styles.approvedTitle}>등록 완료 — 품목코드 FB-COF-SIG-0391</div>
          <div className={styles.approvedSub}>파스쿠찌 트로피카나 망고 콜드브루 라떼 (L) · 7,000원 · SKY-POS 반영 완료</div>
        </div>
      </div>
      <div className={styles.stepList} style={{ marginTop: 10 }}>
        <StepItem bg="#e6f1fb" color="#185fa5" label="1">SKY-POS 품목 마스터 등록 완료 (MST_ITEM)</StepItem>
        <StepItem bg="#e6f1fb" color="#185fa5" label="2">영업요율 11% 자동 매핑 — 변동임대료 대상 지정</StepItem>
        <StepItem bg="#e6f1fb" color="#185fa5" label="3">SKY-NET 전자결재 양식 생성 완료 (ZRTR0160)</StepItem>
        <StepItem bg="#e6f1fb" color="#185fa5" label="4">30일 후 가격 모니터링 알림 자동 설정</StepItem>
        <StepItem bg="#e6f1fb" color="#185fa5" label="5">SAP SD/FI 분기엔진 연동 — 차기 정산 반영 예약</StepItem>
      </div>
    </div>
  );
}

function AiRejected() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      반려 처리되었습니다. 담당자 재검토 후 재신청 시 동일 온톨로지 분석을 다시 수행합니다.<br />
      <span style={{ fontSize: 11, color: "#9a9994" }}>AI 의견: 6,800~7,200원 범위 내 재신청 시 적정 범위로 판단됩니다.</span>
    </div>
  );
}

// ── Dynamic response cards ─────────────────────────────────────────────────
function ResPriceSim() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <strong>6,500원 시나리오 수수료 재산정 결과</strong>
      <InfoCard icon={<Calculator size={12} />} title="가격 변경 시뮬레이션 — 6,500원">
        <KvRow label="월 예상 매출">6,500 × 300 = 1,950,000원</KvRow>
        <KvRow label="변동임대료 (×11%)" variant="warning">214,500원/월</KvRow>
        <KvRow label="고정임대료">185,000원/월</KvRow>
        <KvRow label="적용 임대료 (max)" variant="warning">214,500원/월 (변동 적용)</KvRow>
        <KvRow label="7,000원 대비 차이" variant="danger">-16,500원/월 (연 -198,000원)</KvRow>
      </InfoCard>
      <div className={styles.aiOpinionBox}>
        6,500원으로 낮추면 연간 수입이 <strong style={{ color: "#a32d2d" }}>198,000원 감소</strong>합니다.
        시장 하단가보다 낮아 가격 경쟁력은 높아지지만 수익성은 감소합니다.
      </div>
    </div>
  );
}

function ResVariableRent() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <strong>변동임대료 산정 방식 (비교징수) 안내</strong>
      <InfoCard icon={<FileText size={12} />} title="변동임대료 산정 공식">
        <KvRow label="변동임대료">= 월 매출액 × 영업요율</KvRow>
        <KvRow label="비교징수 원칙">max(고정임대료, 변동임대료)</KvRow>
        <KvRow label="추가임대료">= 변동임대료 - 고정임대료 (양수일 경우)</KvRow>
        <KvRow label="정산 시점">차기년도 2~3월 확정 고지</KvRow>
        <KvRow label="SKY-POS 연동" variant="accent">ZRTR0160 자동 수신</KvRow>
        <KvRow label="면세점 특수 요율" variant="warning">전자기기 vs 기타상품 요율 상이 — 품목매핑 필수</KvRow>
      </InfoCard>
      <InlineRef>참조: 임대ERP 매뉴얼 §6.1.1 / ZRTR0160 / ZRTR0161</InlineRef>
    </div>
  );
}

function ResPastSales() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <strong>유사 품목 과거 매출 분석 결과</strong>
      <InfoCard icon={<TrendingUp size={12} />} title="시그니처 라떼류 월 평균 매출 (과거 36개월)">
        <KvRow label="바닐라 콜드브루 라떼 (L)" variant="success">312잔 / 2,184,000원</KvRow>
        <KvRow label="망고 요거트 쉐이크 (L)">287잔 / 1,978,800원</KvRow>
        <KvRow label="슈크림 딸기 쉐이크 (L)">256잔 / 1,766,400원</KvRow>
        <KvRow label="평균 (시그니처 L류)" variant="accent">285잔 / 1,976,400원</KvRow>
        <KvRow label="AI 예측 (신제품)">300잔 (출시 초기 20% 상향 적용)</KvRow>
      </InfoCard>
      <InlineRef>참조: ANA_DAY_SALE_ITEM ↔ SAL_RECEIPT_ITEM (과거 36개월)</InlineRef>
    </div>
  );
}

function ResRegFull() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      <strong>품목 제한 규정 전체 항목</strong>
      <InfoCard icon={<Shield size={12} />} title="품목 제한 규정 체크 항목 (임대ERP 기준)">
        <div className={styles.stepList}>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">독점 판매권 충돌 — 계약서 내 독점 품목 제한 조항 확인</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">동일 업종 경쟁 품목 — 동일 공항 내 동일 메뉴 중복 여부</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">비교 상권 적합성 — 특수상권(고가 백화점) 배제 기준 적용</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">품목 분류 코드 자동 매핑 완료 여부</StepItem>
          <StepItem bg="#eaf3de" color="#3b6d11" label="✓">부가세 과세/면세 구분 적합성</StepItem>
          <StepItem bg="#faeeda" color="#854f0b" label="!">직영가 대비 가격 괴리율 10% 이상 시 추가 검토 필요</StepItem>
        </div>
      </InfoCard>
    </div>
  );
}

function ResDefault() {
  return (
    <div className={styles.bubble + " " + styles.bubbleAi}>
      온톨로지 그래프에서 관련 노드를 탐색 중입니다.<br />
      <span style={{ fontSize: 11, color: "#9a9994" }}>
        더 구체적인 질문(예: &quot;변동임대료 기준&quot;, &quot;과거 매출&quot;, &quot;품목 제한 규정&quot;, &quot;6,500원으로 낮추면?&quot;)을 입력하시면 정확한 분석 결과를 드릴 수 있습니다.
      </span>
    </div>
  );
}

function getAiResponse(text: string): ReactNode {
  if (text.includes("6,500") || text.includes("낮추면")) return <ResPriceSim />;
  if (text.includes("변동임대료") || text.includes("산정 기준") || text.includes("산정기준")) return <ResVariableRent />;
  if (text.includes("과거") || text.includes("매출")) return <ResPastSales />;
  if (text.includes("제한") || text.includes("규정")) return <ResRegFull />;
  return <ResDefault />;
}

// ── Sidebar nodes ─────────────────────────────────────────────────────────
const sidebarNodes = [
  { ctx: "item", color: "#378ADD", label: "품목기준정보", section: "품목 도메인" },
  { ctx: "category", color: "#1D9E75", label: "업종·분류체계" },
  { ctx: "price", color: "#BA7517", label: "가격비교 분석" },
  { ctx: "rate", color: "#D85A30", label: "영업요율 기준", section: "수수료 도메인" },
  { ctx: "calc", color: "#7F77DD", label: "임대료 산정" },
  { ctx: "erp", color: "#E24B4A", label: "ERP 연계" },
  { ctx: "restrict", color: "#888780", label: "품목제한 규정", section: "규정 도메인" },
  { ctx: "approval", color: "#1D9E75", label: "승인 프로세스" },
];

// ── Main component ────────────────────────────────────────────────────────
export default function ScrAi026() {
  const [activeNode, setActiveNode] = useState("item");
  const [input, setInput] = useState("");
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [dynamicMsgs, setDynamicMsgs] = useState<Msg[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(scrollBottom, [dynamicMsgs, approved, rejected, scrollBottom]);

  const doApprove = () => {
    setActionDone(true);
    setApproved(true);
  };

  const doReject = () => {
    setActionDone(true);
    setRejected(true);
  };

  const doAskMode = () => {
    setInput("이 품목의 판매 가격을 6,500원으로 낮추면 수수료가 얼마나 되나요?");
  };

  const sendMsg = useCallback((text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput("");

    const userMsg: Msg = { id: nextId(), role: "user", content: msg };
    const typingId = nextId();
    const typingMsg: Msg = {
      id: typingId, role: "typing",
      content: <div className={`${styles.bubble} ${styles.bubbleAi}`}><div className={styles.typing}><span /><span /><span /></div></div>,
    };
    setDynamicMsgs((prev) => [...prev, userMsg, typingMsg]);

    setTimeout(() => {
      const aiMsg: Msg = { id: nextId(), role: "ai", content: getAiResponse(msg) };
      setDynamicMsgs((prev) => prev.filter((m) => m.id !== typingId).concat(aiMsg));
    }, 850);
  }, [input]);

  const triggerChip = (text: string) => sendMsg(text);
  const handleKey = (e: React.KeyboardEvent) => { if (e.key === "Enter") sendMsg(); };

  return (
    <div className={styles.root}>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <div className={styles.pageTitleIcon}><Globe size={17} /></div>
        <div>
          <div className={styles.pageTitleText}>SKY-POS 온톨로지 AI 가격비교 챗봇 어시스턴트</div>
          <div className={styles.pageTitleSub}>한국공항공사 차세대 SKY-POS 구축 — 임대ERP 신규 품목 등록 지원 시나리오</div>
        </div>
      </div>

      <div className={styles.chatRoot}>
        {/* ── Sidebar ── */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarLabel}>온톨로지 컨텍스트</div>
            <div className={styles.sidebarBrand}>SKY-POS AI</div>
          </div>
          <div className={styles.ontoTree}>
            {sidebarNodes.map((n) => (
              <div key={n.ctx}>
                {n.section && <div className={styles.ontoSection}>{n.section}</div>}
                <div
                  className={`${styles.ontoNode} ${activeNode === n.ctx ? styles.ontoNodeActive : ""}`}
                  onClick={() => setActiveNode(n.ctx)}
                >
                  <span className={styles.dot} style={{ background: n.color }} />
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main ── */}
        <div className={styles.main}>
          {/* Topbar */}
          <div className={styles.chatTopbar}>
            <div className={styles.aiAvatar}><Brain size={15} /></div>
            <div className={styles.topbarInfo}>
              <div className={styles.topbarName}>SKY-POS 온톨로지 AI 어시스턴트</div>
              <div className={styles.topbarStatus}>● 온라인 — 임대ERP · SKY-POS · 규정DB 연결됨</div>
            </div>
            <span className={styles.ontoBadge}>Ontology v2.1</span>
          </div>

          {/* Messages */}
          <div className={styles.chatMessages} ref={messagesRef}>
            <div className={styles.dividerLabel}>2026년 6월 29일 오전 10:14</div>

            {/* AI 인사 */}
            <div className={styles.msg}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
              <div><AiGreeting /></div>
            </div>

            {/* 사용자 요청 */}
            <div className={`${styles.msg} ${styles.msgUser}`}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarUser}`}><User size={12} /></div>
              <div className={`${styles.bubble} ${styles.bubbleUser}`}>
                파스쿠찌 신제품 &apos;트로피카나 망고 콜드브루 라떼&apos; L사이즈를 7,000원에 등록하고 싶어요.
              </div>
            </div>

            {/* 품목 기준정보 */}
            <div className={styles.msg}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
              <div style={{ maxWidth: "88%" }}><AiItemInfo /></div>
            </div>

            {/* 가격 비교 */}
            <div className={styles.msg}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
              <div style={{ maxWidth: "92%" }}><AiPriceCompare /></div>
            </div>

            {/* 수수료 산정 */}
            <div className={styles.msg}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
              <div style={{ maxWidth: "92%" }}><AiFeeCalc /></div>
            </div>

            {/* 규정 체크 + 버튼 */}
            <div className={styles.msg}>
              <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
              <div style={{ maxWidth: "90%" }}>
                <AiRegCheck
                  onApprove={doApprove}
                  onReject={doReject}
                  onAsk={doAskMode}
                  actionDone={actionDone}
                />
              </div>
            </div>

            {/* 승인 결과 */}
            {approved && (
              <>
                <div className={`${styles.msg} ${styles.msgUser}`}>
                  <div className={`${styles.msgAvatar} ${styles.msgAvatarUser}`}><User size={12} /></div>
                  <div className={`${styles.bubble} ${styles.bubbleUser}`}>승인합니다. 7,000원으로 등록해 주세요.</div>
                </div>
                <div className={styles.msg} style={{ marginTop: 12 }}>
                  <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
                  <div style={{ maxWidth: "88%" }}><AiApproved /></div>
                </div>
              </>
            )}

            {/* 반려 결과 */}
            {rejected && (
              <>
                <div className={`${styles.msg} ${styles.msgUser}`}>
                  <div className={`${styles.msgAvatar} ${styles.msgAvatarUser}`}><User size={12} /></div>
                  <div className={`${styles.bubble} ${styles.bubbleUser}`}>반려 처리해 주세요. 가격을 재검토하겠습니다.</div>
                </div>
                <div className={styles.msg} style={{ marginTop: 12 }}>
                  <div className={`${styles.msgAvatar} ${styles.msgAvatarAi}`}><Brain size={12} /></div>
                  <div style={{ maxWidth: "82%" }}><AiRejected /></div>
                </div>
              </>
            )}

            {/* Dynamic messages */}
            {dynamicMsgs.map((m) => (
              <div
                key={m.id}
                className={`${styles.msg} ${m.role === "user" ? styles.msgUser : ""}`}
                style={{ marginTop: 12 }}
              >
                <div className={`${styles.msgAvatar} ${m.role === "user" ? styles.msgAvatarUser : styles.msgAvatarAi}`}>
                  {m.role === "user" ? <User size={12} /> : <Brain size={12} />}
                </div>
                {m.role === "user" ? (
                  <div className={`${styles.bubble} ${styles.bubbleUser}`}>{m.content}</div>
                ) : (
                  <div style={{ maxWidth: "90%" }}>{m.content}</div>
                )}
              </div>
            ))}
          </div>

          {/* Suggest chips (hidden after approval) */}
          {!approved && (
            <div className={styles.suggestChips}>
              <button className={styles.chip} onClick={() => triggerChip("변동임대료 산정 기준을 자세히 설명해 주세요")}>변동임대료 기준 설명</button>
              <button className={styles.chip} onClick={() => triggerChip("이 품목의 판매 가격을 6,500원으로 낮추면 수수료가 얼마나 되나요?")}>가격 낮추면 수수료는?</button>
              <button className={styles.chip} onClick={() => triggerChip("비슷한 품목의 과거 매출 실적을 보여주세요")}>과거 유사 품목 매출</button>
              <button className={styles.chip} onClick={() => triggerChip("품목 제한 규정 전체 항목을 보여주세요")}>품목 제한 규정 전체</button>
            </div>
          )}

          {/* Input */}
          <div className={styles.inputRow}>
            <input
              className={styles.chatInput}
              type="text"
              placeholder="추가 질문을 입력하세요…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className={styles.sendBtn} onClick={() => sendMsg()}>
              <Send size={13} /> 전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
