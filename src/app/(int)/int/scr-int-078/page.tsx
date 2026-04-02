"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const roles = ["시스템관리자", "운영팀", "임대팀", "기술팀", "업체관리자"];
const menus = [
  "운영현황 대시보드", "기준정보 관리", "판매품목 관리", "매출정보 관리",
  "임대료 관리", "매출분석", "모니터링", "임대물건 관리",
  "사용자/권한 관리", "이력 관리", "시스템 관리", "마이페이지",
];

const initMatrix: Record<string, Record<string, boolean>> = {};
roles.forEach((role) => {
  initMatrix[role] = {};
  menus.forEach((menu) => {
    initMatrix[role][menu] = role === "시스템관리자" ? true : Math.random() > 0.3;
  });
});

export default function ScrInt078() {
  const [matrix, setMatrix] = useState(initMatrix);

  const toggle = (role: string, menu: string) => {
    if (role === "시스템관리자") return;
    setMatrix((prev) => ({
      ...prev,
      [role]: { ...prev[role], [menu]: !prev[role][menu] },
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">권한 관리</h2>
      <div className="flex justify-end">
        <Button size="sm" onClick={() => toast.success("권한 정보가 저장되었습니다.")}>저장</Button>
      </div>
      <Card>
        <CardContent className="pt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 text-left font-medium sticky left-0 bg-white">메뉴 / 역할</th>
                {roles.map((r) => <th key={r} className="px-3 py-2 text-center font-medium min-w-[100px]">{r}</th>)}
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu} className="border-b hover:bg-muted/30">
                  <td className="px-3 py-2 sticky left-0 bg-white">{menu}</td>
                  {roles.map((role) => (
                    <td key={role} className="px-3 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={matrix[role][menu]}
                        onChange={() => toggle(role, menu)}
                        disabled={role === "시스템관리자"}
                        className="h-4 w-4"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
