"use client";

import { useState } from "react";
import { MockBanner } from "@/components/common/MockBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TreeNode {
  label: string;
  code: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    label: "식음료", code: "L1-01", children: [
      {
        label: "음료", code: "L2-01", children: [
          {
            label: "커피", code: "L3-01", children: [
              { label: "아메리카노", code: "L4-01", children: [{ label: "ICE 아메리카노", code: "L5-01" }, { label: "HOT 아메리카노", code: "L5-02" }] },
              { label: "라떼", code: "L4-02", children: [{ label: "카페라떼", code: "L5-03" }, { label: "바닐라라떼", code: "L5-04" }] },
            ],
          },
          { label: "차", code: "L3-02", children: [{ label: "녹차", code: "L4-03", children: [{ label: "녹차라떼", code: "L5-05" }] }] },
        ],
      },
      {
        label: "식품", code: "L2-02", children: [
          { label: "한식", code: "L3-03", children: [{ label: "밥류", code: "L4-04", children: [{ label: "비빔밥세트", code: "L5-06" }] }] },
          { label: "베이커리", code: "L3-04", children: [{ label: "페이스트리", code: "L4-05", children: [{ label: "크로와상", code: "L5-07" }] }] },
        ],
      },
    ],
  },
  {
    label: "면세", code: "L1-02", children: [
      { label: "주류", code: "L2-03", children: [{ label: "위스키", code: "L3-05", children: [{ label: "JW블랙", code: "L4-06" }] }] },
      { label: "화장품", code: "L2-04", children: [{ label: "향수", code: "L3-06", children: [{ label: "샤넬No5", code: "L4-07" }] }] },
    ],
  },
];

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: depth * 16 }}>
      <div
        className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-sm hover:bg-muted"
        onClick={() => setOpen(!open)}
      >
        {hasChildren && <span className="text-xs">{open ? "▼" : "▶"}</span>}
        {!hasChildren && <span className="text-xs text-transparent">▶</span>}
        <span className="font-mono text-xs text-muted-foreground">[{node.code}]</span>
        <span>{node.label}</span>
      </div>
      {open && node.children?.map((c) => <TreeItem key={c.code} node={c} depth={depth + 1} />)}
    </div>
  );
}

export default function ScrAi012() {
  return (
    <div className="space-y-4">
      <MockBanner message="AI 분석 결과 - Mock 데이터" />
      <h2 className="text-lg font-bold">표준 분류체계 관리</h2>
      <p className="text-sm text-muted-foreground">5단계 계층 분류 트리 (클릭하여 펼침/접기)</p>
      <Card>
        <CardHeader><CardTitle className="text-sm">표준 분류 트리</CardTitle></CardHeader>
        <CardContent>
          {treeData.map((n) => <TreeItem key={n.code} node={n} />)}
        </CardContent>
      </Card>
    </div>
  );
}
