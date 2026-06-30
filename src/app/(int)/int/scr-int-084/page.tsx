"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SearchPanel } from "@/components/common/SearchPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./floorPlan.module.css";
import {
  UNITS, STATUS, FLOORS,
  type Unit,
  fmtSales, dday,
} from "./data";

// ── 필터 상태 ──────────────────────────────────────────────────────────────────
type FilterKey = "vacant" | "expiring" | "incoming" | "food" | "duty";

const FILTER_CHIPS: { key: FilterKey; label: string }[] = [
  { key: "vacant",   label: "공실만"   },
  { key: "expiring", label: "만료 임박" },
  { key: "incoming", label: "입점 예정" },
  { key: "food",     label: "업종: F&B" },
  { key: "duty",     label: "업종: 면세" },
];

function matchesFilters(u: Unit, term: string, filters: Set<FilterKey>): boolean {
  if (term) {
    const hay = [(u.tenant ?? ""), (u.biz ?? ""), u.id].join(" ").toLowerCase();
    if (!hay.includes(term)) return false;
  }
  if (filters.size) {
    let ok = false;
    if (filters.has("vacant")   && u.status === "vacant")   ok = true;
    if (filters.has("expiring") && u.status === "expiring") ok = true;
    if (filters.has("incoming") && u.status === "incoming") ok = true;
    if (filters.has("food")     && u.cat    === "food")     ok = true;
    if (filters.has("duty")     && u.cat    === "duty")     ok = true;
    if (!ok) return false;
  }
  return true;
}

// ── 인포카드 ────────────────────────────────────────────────────────────────────
interface CardPos { left: number; top: number }

interface InfoCardProps {
  unit: Unit;
  pos: CardPos;
  onClose: () => void;
}

function InfoCard({ unit: u, pos, onClose }: InfoCardProps) {
  const st = STATUS[u.status];
  const d = dday(u.end);

  return (
    <div
      className={`${styles.infocard} ${styles.show}`}
      style={{ left: pos.left, top: pos.top }}
      onClick={(e) => e.stopPropagation()}
    >
      {u.status === "vacant" ? (
        <>
          <div className={styles.icHead}>
            <div>
              <div className={styles.icTenant}>공실</div>
              <div className={styles.icUnit}>{u.id}</div>
              <span
                className={styles.icBadge}
                style={{ background: `${st.hex}33`, color: "#5b6b7a" }}
              >
                {st.label}
              </span>
            </div>
            <button className={styles.icClose} onClick={onClose} aria-label="닫기">×</button>
          </div>
          <div className={styles.icBody}>
            <div className={styles.icVacantNote}>
              현재 임차인이 없는 구획입니다.<br />임대 영업 대상으로 등록할 수 있어요.
            </div>
          </div>
          <div className={styles.icActions}>
            <button className={styles.icBtn} disabled>계약 바로가기</button>
            <button className={`${styles.icBtn} ${styles.ghost}`} disabled>POS 분석</button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.icHead}>
            <div>
              <div className={styles.icTenant}>{u.tenant}</div>
              <div className={styles.icUnit}>{u.id} · {u.biz ?? ""}</div>
              <span
                className={styles.icBadge}
                style={{
                  background: `${st.hex}22`,
                  color: st.hex,
                  border: `1px solid ${st.hex}66`,
                }}
              >
                {st.label}
              </span>
            </div>
            <button className={styles.icClose} onClick={onClose} aria-label="닫기">×</button>
          </div>
          <div className={styles.icBody}>
            <div className={styles.icRow}>
              <span className={styles.k}>점포</span>
              <span className={styles.v}>김포공항 1층</span>
            </div>
            <div className={styles.icRow}>
              <span className={styles.k}>계약기간</span>
              <span className={styles.v}>{u.start} ~ {u.end}</span>
            </div>
            <div className={styles.icRow}>
              <span className={styles.k}>잔여</span>
              <span className={`${styles.v}${u.status === "expiring" ? ` ${styles.warn}` : ""}`}>
                {d == null ? "—" : d < 0 ? `만료 ${-d}일 경과` : `D-${d}`}
              </span>
            </div>
            <div className={styles.icRow}>
              <span className={styles.k}>월평균 매출</span>
              <span className={styles.v}>
                {u.status === "incoming" ? "입점 전" : fmtSales(u.sales)}
              </span>
            </div>
          </div>
          <div className={styles.icActions}>
            <button className={styles.icBtn}>계약 바로가기</button>
            <button
              className={`${styles.icBtn} ${styles.ghost}`}
              disabled={u.status === "incoming"}
            >
              POS 분석
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ── 메인 페이지 ────────────────────────────────────────────────────────────────
export default function ScrInt084() {
  // 검색 조건
  const [group, setGroup]       = useState("한국공항공사");
  const [bizUnit, setBizUnit]   = useState("여객터미널 운영");
  const [terminal, setTerminal] = useState("김포국제공항");
  const [floor, setFloor]       = useState("1층");
  const [keyword, setKeyword]   = useState("");

  // 필터 칩
  const [activeFilters, setActiveFilters] = useState<Set<FilterKey>>(new Set());

  // 활성 필터 term (조회 버튼 누를 때 반영)
  const [appliedTerm, setAppliedTerm]       = useState("");
  const [appliedFilters, setAppliedFilters] = useState<Set<FilterKey>>(new Set());

  // 결과 select
  const [selectedFloor, setSelectedFloor] = useState("gimpo-1f");

  // 인포카드
  const [selectedUnit, setSelectedUnit]   = useState<Unit | null>(null);
  const [cardPos, setCardPos]             = useState<CardPos>({ left: 0, top: 0 });
  const stageRef                          = useRef<HTMLDivElement>(null);
  const svgRef                            = useRef<SVGSVGElement>(null);

  // 캘리브레이션 모드
  const [calibMode, setCalibMode]   = useState(false);
  const [calibCoord, setCalibCoord] = useState<{x: number; y: number} | null>(null);
  const [calibLog, setCalibLog]     = useState<string[]>([]);

  // ── 인포카드 포지셔닝 ──────────────────────────────────────────────────────
  const positionCard = useCallback((u: Unit) => {
    const stage = stageRef.current;
    if (!stage) return;
    const vbWidth = 1935;
    const rectW = stage.clientWidth - 20;
    const scale = rectW / vbWidth;
    const pad = 10;
    const cardW = 270;
    let px = pad + (u.x + u.w) * scale + 10;
    let py = pad + u.y * scale;
    if (px + cardW > stage.clientWidth - 8) px = pad + u.x * scale - cardW - 10;
    if (px < 8) px = 8;
    const maxY = stage.clientHeight - 330;
    if (py > maxY) py = Math.max(8, maxY);
    setCardPos({ left: px, top: py });
  }, []);

  const openUnit = useCallback((u: Unit) => {
    if (calibMode) return;
    if (selectedUnit?.id === u.id) { setSelectedUnit(null); return; }
    setSelectedUnit(u);
    positionCard(u);
  }, [calibMode, selectedUnit, positionCard]);

  const closeCard = useCallback(() => setSelectedUnit(null), []);

  useEffect(() => {
    const handler = () => { if (selectedUnit) positionCard(selectedUnit); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [selectedUnit, positionCard]);

  // ── SVG 좌표 변환 (getScreenCTM 사용) ──────────────────────────────────────
  const toSvgCoord = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    const svgPt = pt.matrixTransform(ctm.inverse());
    return { x: Math.round(svgPt.x), y: Math.round(svgPt.y) };
  }, []);

  const handleSvgMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!calibMode) return;
    const coord = toSvgCoord(e.clientX, e.clientY);
    if (coord) setCalibCoord(coord);
  }, [calibMode, toSvgCoord]);

  const handleSvgCalibClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!calibMode) return;
    e.stopPropagation();
    const coord = toSvgCoord(e.clientX, e.clientY);
    if (!coord) return;
    setCalibLog(prev => [...prev, `(${coord.x}, ${coord.y})`]);
  }, [calibMode, toSvgCoord]);

  // ── 필터 칩 토글 ───────────────────────────────────────────────────────────
  const toggleChip = (key: FilterKey) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  // ── 조회 / 초기화 ──────────────────────────────────────────────────────────
  const handleSearch = () => {
    setAppliedTerm(keyword.trim().toLowerCase());
    setAppliedFilters(new Set(activeFilters));
    closeCard();
  };

  const handleReset = () => {
    setGroup("한국공항공사");
    setBizUnit("여객터미널 운영");
    setTerminal("김포국제공항");
    setFloor("1층");
    setKeyword("");
    setActiveFilters(new Set());
    setAppliedTerm("");
    setAppliedFilters(new Set());
    closeCard();
  };

  // ── 범례 카운트 ─────────────────────────────────────────────────────────────
  const counts = UNITS.reduce<Record<string, number>>((acc, u) => {
    acc[u.status] = (acc[u.status] ?? 0) + 1;
    return acc;
  }, {});

  // ── 선택된 층 표시 레이블 ────────────────────────────────────────────────────
  const currentFloor = FLOORS.find((f) => f.value === selectedFloor);

  // ── 공통 select 스타일 ───────────────────────────────────────────────────────
  const selectCls =
    "h-10 w-full rounded border border-[#d6e0ea] bg-white px-2 text-sm text-[#334155] focus:outline-none focus:border-[#1d4f91]";

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">층별 도면 (임대구획 관리)</h2>

      {/* ── 검색 조건 ── */}
      <SearchPanel onSearch={handleSearch} onReset={handleReset} title="조회 조건">
        {/* 그룹 */}
        <div className="flex flex-col gap-1">
          <label>그룹</label>
          <select className={selectCls} value={group} onChange={(e) => setGroup(e.target.value)}>
            <option>한국공항공사</option>
            <option>인천국제공항공사</option>
          </select>
        </div>

        {/* 사업부 */}
        <div className="flex flex-col gap-1">
          <label>사업부</label>
          <select className={selectCls} value={bizUnit} onChange={(e) => setBizUnit(e.target.value)}>
            <option>여객터미널 운영</option>
            <option>화물터미널 운영</option>
          </select>
        </div>

        {/* 터미널 */}
        <div className="flex flex-col gap-1">
          <label>터미널</label>
          <select className={selectCls} value={terminal} onChange={(e) => setTerminal(e.target.value)}>
            <option>김포국제공항</option>
            <option>인천국제공항 T1</option>
            <option>인천국제공항 T2</option>
          </select>
        </div>

        {/* 층 */}
        <div className="flex flex-col gap-1">
          <label>층</label>
          <select className={selectCls} value={floor} onChange={(e) => setFloor(e.target.value)}>
            <option>1층</option>
            <option>2층</option>
            <option>3층 (출국장)</option>
          </select>
        </div>

        {/* 키워드 */}
        <div className="flex flex-col gap-1">
          <label>임차인 · 브랜드 · 업종</label>
          <Input
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
          />
        </div>
      </SearchPanel>

      {/* ── 상태 필터 칩 ── */}
      <div className="flex flex-wrap gap-2 items-center">
        {FILTER_CHIPS.map(({ key, label }) => (
          <Button
            key={key}
            variant={activeFilters.has(key) ? "default" : "outline"}
            size="sm"
            className={
              activeFilters.has(key)
                ? "bg-[#002D56] text-white border-[#002D56] hover:bg-[#001a33] rounded-full px-4"
                : "border-[#d6e0ea] text-[#5b6b7a] hover:border-[#002D56] hover:text-[#002D56] rounded-full px-4"
            }
            onClick={() => toggleChip(key)}
          >
            {label}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto text-[#93a1ad] hover:text-[#334155] text-xs"
          onClick={handleReset}
        >
          초기화
        </Button>
      </div>

      {/* ── 결과 select box (검색 결과 위치 선택) ── */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#64748b] shrink-0">도면 선택</span>
        <select
          className="h-9 rounded-[8px] border border-[#d6e0ea] bg-white px-3 text-sm text-[#334155] focus:outline-none focus:border-[#1d4f91] min-w-[200px]"
          value={selectedFloor}
          onChange={(e) => {
            const opt = FLOORS.find((f) => f.value === e.target.value);
            if (opt && !opt.ready) {
              // 준비중 옵션 선택 시 도로 첫번째로 복귀
              return;
            }
            setSelectedFloor(e.target.value);
          }}
        >
          {FLOORS.map((f) => (
            <option key={f.value} value={f.value} disabled={!f.ready}>
              {f.label}{!f.ready ? " (준비중)" : ""}
            </option>
          ))}
        </select>
        {currentFloor && (
          <span className="text-xs text-[#7b8da1]">
            {currentFloor.label} · 임대구획 {UNITS.length}개
          </span>
        )}
        <button
          onClick={() => { setCalibMode(m => !m); setCalibLog([]); setCalibCoord(null); }}
          className={`ml-auto text-[11px] px-2 py-1 rounded border ${calibMode ? "bg-red-50 border-red-300 text-red-600" : "border-[#d6e0ea] text-[#93a1ad] hover:text-[#334155]"}`}
        >
          {calibMode ? "📐 좌표모드 OFF" : "📐 좌표모드"}
        </button>
      </div>

      {/* ── 캘리브레이션 좌표 패널 ── */}
      {calibMode && (
        <div className="rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[12px] text-red-700 space-y-1">
          <div className="font-semibold">📐 좌표 확인 모드 — 도면 위 클릭 시 SVG 좌표가 기록됩니다</div>
          <div>현재 커서: <span className="font-mono font-bold" id="calib-live">
            {calibCoord ? `x=${calibCoord.x}, y=${calibCoord.y}` : "—"}
          </span></div>
          {calibLog.length > 0 && (
            <div className="mt-1">
              <div className="font-semibold mb-0.5">클릭 기록 ({calibLog.length}개):</div>
              <div className="font-mono bg-white border border-red-100 rounded p-2 max-h-32 overflow-y-auto whitespace-pre">
                {calibLog.join("\n")}
              </div>
              <button
                className="mt-1 text-[11px] underline"
                onClick={() => navigator.clipboard.writeText(calibLog.join("\n"))}
              >복사</button>
              {" · "}
              <button className="text-[11px] underline" onClick={() => setCalibLog([])}>초기화</button>
            </div>
          )}
        </div>
      )}

      {/* ── 도면 스테이지 ── */}
      <div
        className={styles.stage}
        ref={stageRef}
        onClick={calibMode ? undefined : closeCard}
        style={calibMode ? { cursor: "crosshair" } : undefined}
      >
        <svg
          ref={svgRef}
          className={styles.plan}
          viewBox="0 0 1935 812"
          xmlns="http://www.w3.org/2000/svg"
          onMouseMove={handleSvgMouseMove}
          onClick={calibMode ? handleSvgCalibClick : undefined}
        >
          {/* 도면 배경 이미지 */}
          <image href="/floorplan/gimpo-1f.png" x={0} y={0} width={1935} height={812} />

          {/* 구획 박스 */}
          {UNITS.map((u) => {
            const st = STATUS[u.status];
            const visible = matchesFilters(u, appliedTerm, appliedFilters);
            const isSelected = selectedUnit?.id === u.id;
            return (
              <g
                key={u.id}
                className={[
                  styles.unit,
                  !calibMode && !visible ? styles.dim : "",
                  !calibMode && isSelected ? styles.sel : "",
                ].join(" ")}
                tabIndex={calibMode ? -1 : 0}
                role="button"
                aria-label={(u.tenant ?? "공실") + " " + u.id}
                onClick={(e) => { e.stopPropagation(); openUnit(u); }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openUnit(u); }
                }}
              >
                <rect
                  x={u.x} y={u.y} width={u.w} height={u.h}
                  rx={2}
                  fill={calibMode ? "transparent" : st.hex}
                  stroke={calibMode ? "#ef4444" : st.hex}
                  strokeWidth={calibMode ? 2 : 1.5}
                  fillOpacity={calibMode ? 0 : undefined}
                />
                {(() => {
                  const cx = u.x + u.w / 2;
                  const cy = u.y + u.h / 2;
                  const fill = calibMode ? "#ef4444" : (u.status === "vacant" ? "#3a444d" : "#13351f");
                  if (calibMode) {
                    return (
                      <text className={styles.unitLabel} x={cx} y={cy} fill={fill} fontSize={12}>
                        {u.id}
                      </text>
                    );
                  }
                  const raw = u.tenant ?? "공실";
                  // 좁은 박스(w<55): 세로 회전 — 사용 가능 길이=h 기준 fontSize 계산
                  if (u.w < 55) {
                    const label = raw.length > 6 ? raw.slice(0, 5) + "…" : raw;
                    const fs = Math.min(15, Math.max(9, Math.floor((u.h - 10) / label.length * 0.95)));
                    return (
                      <text
                        className={styles.unitLabel}
                        x={cx} y={cy}
                        fill={fill}
                        fontSize={fs}
                        transform={`rotate(90, ${cx}, ${cy})`}
                      >
                        {label}
                      </text>
                    );
                  }
                  // 중간 박스(w 55~90, 4자 초과): 두 줄 — 줄당 글자수 기준 fontSize
                  if (u.w < 90 && raw.length > 4) {
                    const mid = Math.ceil(raw.length / 2);
                    const fs = Math.min(14, Math.max(9, Math.floor((u.w - 8) / mid * 0.85)));
                    return (
                      <text className={styles.unitLabel} x={cx} y={cy} fill={fill} fontSize={fs}>
                        <tspan x={cx} dy={-Math.round(fs * 0.65)}>{raw.slice(0, mid)}</tspan>
                        <tspan x={cx} dy={Math.round(fs * 1.3)}>{raw.slice(mid)}</tspan>
                      </text>
                    );
                  }
                  // 넓은 박스: 한 줄 — 글자수 기준 fontSize, 5자 초과 말줄임
                  const label = raw.length > 5 ? raw.slice(0, 4) + "…" : raw;
                  const fs = Math.min(15, Math.max(10, Math.floor((u.w - 6) / label.length * 0.95)));
                  return (
                    <text className={styles.unitLabel} x={cx} y={cy} fill={fill} fontSize={fs}>
                      {label}
                    </text>
                  );
                })()}
              </g>
            );
          })}

          {/* 캘리브레이션 크로스헤어 */}
          {calibMode && calibCoord && (
            <g pointerEvents="none">
              <line x1={calibCoord.x} y1={0} x2={calibCoord.x} y2={812} stroke="#ef4444" strokeWidth={1} strokeDasharray="4 4" opacity={0.7}/>
              <line x1={0} y1={calibCoord.y} x2={1935} y2={calibCoord.y} stroke="#ef4444" strokeWidth={1} strokeDasharray="4 4" opacity={0.7}/>
              <circle cx={calibCoord.x} cy={calibCoord.y} r={4} fill="#ef4444" opacity={0.9}/>
              <rect x={calibCoord.x + 6} y={calibCoord.y - 18} width={120} height={18} fill="rgba(0,0,0,0.65)" rx={3}/>
              <text x={calibCoord.x + 10} y={calibCoord.y - 5} fill="white" fontSize={12} fontFamily="monospace">
                {calibCoord.x}, {calibCoord.y}
              </text>
            </g>
          )}
        </svg>

        {/* 인포카드 (캘리브레이션 모드 off일 때만) */}
        {!calibMode && selectedUnit && (
          <InfoCard unit={selectedUnit} pos={cardPos} onClose={closeCard} />
        )}
      </div>

      {/* ── 범례 ── */}
      <div className={styles.legend}>
        {Object.entries(STATUS).map(([k, v]) => (
          <div key={k} className={styles.legendItem}>
            <span className={styles.legendSwatch} style={{ background: v.hex }} />
            {v.label}
            <span className={styles.legendCount}>({counts[k] ?? 0})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
