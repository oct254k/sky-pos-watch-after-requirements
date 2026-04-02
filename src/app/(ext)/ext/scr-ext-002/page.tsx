"use client";

import { useRef, useState } from "react";
import { ModalPopup } from "@/components/common/ModalPopup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

type PopupTone = "warning" | "success";

export default function ScrExt002() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({});
  const [popup, setPopup] = useState<{
    open: boolean;
    title: string;
    message: string;
    tone: PopupTone;
    onConfirm?: (() => void) | null;
  }>({
    open: false,
    title: "",
    message: "",
    tone: "success",
    onConfirm: null,
  });
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const openPopup = (title: string, message: string, tone: PopupTone, onConfirm?: (() => void) | null) => {
    setPopup({ open: true, title, message, tone, onConfirm: onConfirm ?? null });
  };

  const handleLogin = () => {
    const nextErrors: { userId?: string; password?: string } = {};

    if (!userId.trim()) {
      nextErrors.userId = "아이디를 입력해주세요.";
    }

    if (!password.trim()) {
      nextErrors.password = "비밀번호를 입력해주세요.";
    }

    if (nextErrors.userId || nextErrors.password) {
      openPopup(
        "입력 확인",
        "필수 입력 항목을 확인해주세요.",
        "warning",
        () => {
          setErrors(nextErrors);

          if (nextErrors.userId) {
            userIdRef.current?.focus();
          } else if (nextErrors.password) {
            passwordRef.current?.focus();
          }
        }
      );
      return;
    }

    setErrors({});
    openPopup("로그인 완료", `${userId} 계정으로 로그인되었습니다.`, "success");
  };

  const popupMeta =
    popup.tone === "warning"
      ? {
          icon: AlertTriangle,
          iconClassName: "text-[#dc2626]",
          iconWrapClassName: "border-[#fecaca] bg-[#fef2f2]",
          eyebrow: "입력값 확인 필요",
          panelClassName: "border-[#e5edf5] bg-white",
        }
      : {
          icon: CheckCircle2,
          iconClassName: "text-[#16a34a]",
          iconWrapClassName: "border-[#bbf7d0] bg-[#f0fdf4]",
          eyebrow: "처리가 정상적으로 완료되었습니다",
          panelClassName: "border-[#e5edf5] bg-white",
        };
  const PopupIcon = popupMeta.icon;

  return (
    <>
      <div className="min-h-[calc(100vh-220px)] bg-[linear-gradient(180deg,#f4f7fb_0%,#eef3f8_100%)] px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto flex min-h-[540px] w-full max-w-[560px] items-center">
          <section className="w-full rounded-[28px] border border-[#d7e2ee] bg-white px-5 py-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-8">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-[#e5edf5] pb-5">
                <div className="text-sm font-semibold text-[#1d4f91]">SKY-POS</div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#0f172a] sm:text-[26px]">외부 사용자 로그인</h3>
                <p className="text-sm leading-6 text-[#52657a]">등록된 계정으로 바로 업무를 시작할 수 있습니다.</p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1e293b]">아이디</label>
                  <Input
                    ref={userIdRef}
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                      setErrors((prev) => ({ ...prev, userId: undefined }));
                    }}
                    placeholder="회사에서 발급한 아이디를 입력하세요"
                    className={`h-12 bg-[#f8fbfe] text-[15px] focus-visible:ring-[#1d4f91]/20 ${
                      errors.userId
                        ? "border-[#ef4444] bg-[#fff5f5] focus-visible:border-[#ef4444] focus-visible:ring-[#ef4444]/15"
                        : "border-[#cfd9e5] focus-visible:border-[#1d4f91]"
                    }`}
                  />
                  {errors.userId && <p className="text-sm font-medium text-[#dc2626]">{errors.userId}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1e293b]">비밀번호</label>
                  <Input
                    ref={passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    placeholder="비밀번호를 입력하세요"
                    className={`h-12 bg-[#f8fbfe] text-[15px] focus-visible:ring-[#1d4f91]/20 ${
                      errors.password
                        ? "border-[#ef4444] bg-[#fff5f5] focus-visible:border-[#ef4444] focus-visible:ring-[#ef4444]/15"
                        : "border-[#cfd9e5] focus-visible:border-[#1d4f91]"
                    }`}
                  />
                  {errors.password && <p className="text-sm font-medium text-[#dc2626]">{errors.password}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="h-12 w-full bg-[#0f3560] text-[15px] font-semibold text-white hover:bg-[#0b2a4a]"
                  onClick={handleLogin}
                >
                  로그인
                </Button>
                <div className="flex flex-col gap-3 text-sm text-[#607489] sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#cfd9e5]" />
                    <span>아이디 저장</span>
                  </label>
                  <button type="button" className="font-medium text-[#1d4f91] hover:text-[#143c70]">
                    비밀번호 찾기
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ModalPopup
        open={popup.open}
        onClose={() => setPopup((prev) => ({ ...prev, open: false }))}
        title={popup.title}
      >
        <div className="space-y-4">
          <div className={`rounded-[14px] border px-4 py-4 ${popupMeta.panelClassName}`}>
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border ${popupMeta.iconWrapClassName}`}>
                <PopupIcon className={`h-[18px] w-[18px] ${popupMeta.iconClassName}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b8da1]">
                  {popupMeta.eyebrow}
                </div>
                <p className="mt-2 text-[14px] font-medium leading-6 text-[#334155]">{popup.message}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end border-t border-[#e7eef5] pt-3">
            <Button
              className="min-w-[92px] bg-[#0f3560] text-white hover:bg-[#0b2a4a]"
              onClick={() => {
                popup.onConfirm?.();
                setPopup((prev) => ({ ...prev, open: false, onConfirm: null }));
              }}
            >
              확인
            </Button>
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
