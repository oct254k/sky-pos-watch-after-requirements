"use client";

import Link from "next/link";
import { ArrowRight, Building2, Cpu, Globe, LayoutGrid, Sparkles } from "lucide-react";
import { AreaType, MenuItem, aiMenu, areaLabels, erpMenu, extMenu, intMenu } from "@/data/menu";

type PortalHubProps =
  | {
      mode: "root";
    }
  | {
      mode: "area";
      area: AreaType;
    };

const areaMeta: Record<
  AreaType,
  {
    icon: typeof Globe;
    title: string;
    description: string;
    color: string;
    entry: string;
  }
> = {
  ext: {
    icon: Globe,
    title: "외부 사용자 포털",
    description: "입점업체와 외부 사용자가 신청, 매출, 임대료, 문의 업무를 처리하는 포털입니다.",
    color: "from-[#0f4c81] to-[#1d6fb8]",
    entry: "/ext",
  },
  int: {
    icon: Building2,
    title: "내부 운영 포털",
    description: "운영 현황, 승인, 기준정보, 모니터링, 시스템 관리 업무를 처리하는 운영 포털입니다.",
    color: "from-[#126e4a] to-[#1a9b6a]",
    entry: "/int",
  },
  ai: {
    icon: Sparkles,
    title: "AI 운영 포털",
    description: "매핑 검토, 이상거래 탐지, 추천, 인사이트 생성 기능을 운영하는 AI 업무 포털입니다.",
    color: "from-[#5a3b97] to-[#8a60d6]",
    entry: "/ai",
  },
  erp: {
    icon: Cpu,
    title: "ERP 업무 포털",
    description: "계약, 품목, 임대료, 대사, 통제, 보고 업무를 조회하고 검증하는 ERP 포털입니다.",
    color: "from-[#a45704] to-[#d97706]",
    entry: "/erp",
  },
};

const areaMenus: Record<AreaType, MenuItem[]> = {
  ext: extMenu,
  int: intMenu,
  ai: aiMenu,
  erp: erpMenu,
};

function topGroups(items: MenuItem[]) {
  return items
    .filter((item) => item.children?.length)
    .slice(0, 4)
    .map((item) => ({
      label: item.label,
      count: item.children?.length ?? 0,
      firstPath: item.children?.[0]?.path ?? "#",
      firstLabel: item.children?.[0]?.label ?? "",
    }));
}

export function PortalHub(props: PortalHubProps) {
  if (props.mode === "root") {
    const areas = (Object.keys(areaMeta) as AreaType[]).map((area) => {
      const meta = areaMeta[area];
      const groups = topGroups(areaMenus[area]);
      const Icon = meta.icon;
      return { area, meta, groups, Icon };
    });

    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fbff_0%,#eef3f8_46%,#e4ebf3_100%)] px-3 py-4 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[24px] border border-[#dbe5ee] bg-white/88 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur-sm sm:rounded-[28px] sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e7edf4] pb-5 sm:gap-6 sm:pb-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e4f0] bg-[#f8fbff] px-3 py-1 text-[11px] font-semibold text-[#4b6480] sm:text-[12px]">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  SKY-POS PORTAL
                </div>
                <div>
                  <h1 className="text-[28px] font-bold tracking-[-0.03em] text-[#0f172a] sm:text-[34px]">SKY-POS 시작하기</h1>
                  <p className="mt-2 text-[14px] leading-6 text-[#475569] sm:text-[15px] sm:leading-7">
                    사용할 포털을 선택하고 바로 업무를 시작할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="grid w-full gap-3 sm:min-w-[280px] sm:grid-cols-2">
                {areas.map(({ area, meta }) => (
                  <Link
                    key={area}
                    href={meta.entry}
                    className="rounded-2xl border border-[#dbe5ee] bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-[#0f172a] transition-all hover:-translate-y-0.5 hover:border-[#b8c9db] hover:bg-white"
                  >
                    {meta.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
              {areas.map(({ area, meta, groups, Icon }) => (
                <Link
                  key={area}
                  href={meta.entry}
                  className="group overflow-hidden rounded-[24px] border border-[#dbe5ee] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
                >
                  <div className={`bg-gradient-to-r ${meta.color} px-4 py-4 text-white sm:px-6 sm:py-5`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          {areaLabels[area]}
                        </div>
                        <h2 className="mt-2 text-[22px] font-bold tracking-[-0.03em] sm:text-[26px]">{meta.title}</h2>
                      </div>
                      <div className="rounded-2xl bg-white/14 p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="mt-4 text-[13px] leading-6 text-white/88 sm:text-[14px]">{meta.description}</p>
                  </div>

                  <div className="space-y-4 px-4 py-4 sm:px-6 sm:py-6">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {groups.map((group) => (
                        <div key={group.label} className="rounded-2xl border border-[#e4ebf3] bg-[#f8fbff] px-4 py-4">
                          <div className="text-[13px] font-semibold text-[#0f172a]">{group.label}</div>
                          <div className="mt-1 text-[12px] text-[#64748b]">{group.count}개 화면</div>
                          <div className="mt-3 text-[13px] text-[#334155]">{group.firstLabel}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 border-t border-[#ecf1f6] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-[13px] font-medium text-[#64748b]">포털 시작 화면으로 이동</div>
                      <div className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0f3560]">
                        시작하기
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const meta = areaMeta[props.area];
  const groups = topGroups(areaMenus[props.area]);
  const Icon = meta.icon;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className={`overflow-hidden rounded-[24px] bg-gradient-to-r ${meta.color} px-4 py-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:px-7 sm:py-7`}>
        <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-5">
          <div className="max-w-3xl">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">{areaLabels[props.area]} 시작 화면</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="rounded-2xl bg-white/14 p-3">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="text-[24px] font-bold tracking-[-0.03em] sm:text-[30px]">{meta.title}</h1>
            </div>
            <p className="mt-4 text-[14px] leading-6 text-white/88 sm:text-[15px] sm:leading-7">{meta.description}</p>
          </div>

          <Link
            href="/"
            className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/16"
          >
            전체 포털 보기
          </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[22px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-5">
          <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7f94]">화면 목적</div>
          <div className="mt-3 text-[18px] font-bold tracking-[-0.02em] text-[#0f172a]">{meta.title}</div>
          <p className="mt-2 text-[14px] leading-6 text-[#52657a]">{meta.description}</p>
        </div>

        <div className="rounded-[22px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-5">
          <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7f94]">현재 상태</div>
          <div className="mt-3 inline-flex items-center rounded-full bg-[#edf7ef] px-3 py-1 text-[12px] font-semibold text-[#15703d]">
            사용 가능
          </div>
          <p className="mt-3 text-[14px] leading-6 text-[#52657a]">
            대표 메뉴와 자주 쓰는 화면으로 바로 이동할 수 있는 시작 화면입니다.
          </p>
        </div>

        <div className="rounded-[22px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-5">
          <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7f94]">주요 액션</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href={groups[0]?.firstPath ?? meta.entry} className="rounded-full bg-[#0f3560] px-3 py-2 text-[13px] font-semibold text-white">
              대표 메뉴 열기
            </Link>
            <Link href={meta.entry === "/ext" ? "/ext/scr-ext-002" : meta.entry === "/int" ? "/int/scr-int-001" : groups[0]?.firstPath ?? meta.entry} className="rounded-full border border-[#d7e2ec] bg-white px-3 py-2 text-[13px] font-semibold text-[#0f172a]">
              {props.area === "ext" ? "로그인" : props.area === "int" ? "내부 로그인" : "대표 화면"}
            </Link>
          </div>
          <p className="mt-3 text-[14px] leading-6 text-[#52657a]">
            시작 화면에서 바로 대표 화면과 주요 업무로 이동할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[24px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#0f172a]">주요 업무 바로가기</h2>
              <p className="mt-1 text-[14px] text-[#64748b]">자주 사용하는 대표 메뉴로 바로 이동할 수 있습니다.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label} className="rounded-[20px] border border-[#e4ebf3] bg-[#f8fbff] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[15px] font-semibold text-[#0f172a]">{group.label}</div>
                    <div className="mt-1 text-[13px] text-[#64748b]">{group.count}개 화면</div>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-1 text-[12px] font-semibold text-[#4b6480]">대표</div>
                </div>
                <div className="mt-4 rounded-2xl border border-[#dfe8f1] bg-white px-4 py-4">
                  <div className="text-[13px] text-[#64748b]">첫 화면</div>
                  <div className="mt-1 text-[15px] font-semibold text-[#0f172a]">{group.firstLabel}</div>
                </div>
                <Link
                  href={group.firstPath}
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0f3560]"
                >
                  화면 열기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="rounded-[24px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0f172a]">주요 업무 영역</h2>
            <div className="mt-4 space-y-3">
              {groups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-[#e6edf5] bg-[#f8fbff] px-4 py-3">
                  <div className="text-[14px] font-semibold text-[#0f172a]">{group.label}</div>
                  <div className="mt-1 text-[13px] text-[#64748b]">{group.count}개 연결 화면</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#dbe5ee] bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0f172a]">바로 이동</h2>
            <div className="mt-4 grid gap-3">
              <Link href={groups[0]?.firstPath ?? meta.entry} className="rounded-2xl bg-[#0f3560] px-4 py-3 text-center text-[14px] font-semibold text-white">
                대표 화면 열기
              </Link>
              <Link href={meta.entry === "/ext" ? "/ext/scr-ext-002" : meta.entry === "/int" ? "/int/scr-int-001" : groups[0]?.firstPath ?? meta.entry} className="rounded-2xl border border-[#d7e2ec] bg-white px-4 py-3 text-center text-[14px] font-semibold text-[#0f172a]">
                {props.area === "ext" ? "외부 로그인 열기" : props.area === "int" ? "내부 로그인 열기" : "대표 메뉴 열기"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
