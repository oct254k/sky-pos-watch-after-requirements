"use client";

import { useState } from "react";
import { ActionBar, ActionButton } from "@/components/common/ActionBar";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useConfirm } from "@/components/common/ConfirmProvider";

interface TreeNode { id: string; label: string; children?: TreeNode[]; }

const treeData: TreeNode[] = [
  {
    id: "CAT01", label: "음료", children: [
      { id: "CAT0101", label: "커피", children: [
        { id: "CAT010101", label: "아메리카노" },
        { id: "CAT010102", label: "라떼" },
        { id: "CAT010103", label: "에스프레소" },
      ] },
      { id: "CAT0102", label: "차", children: [
        { id: "CAT010201", label: "녹차" },
        { id: "CAT010202", label: "홍차" },
      ] },
      { id: "CAT0103", label: "음료(기타)", children: [
        { id: "CAT010301", label: "주스" },
        { id: "CAT010302", label: "스무디" },
      ] },
    ],
  },
  {
    id: "CAT02", label: "식품", children: [
      { id: "CAT0201", label: "한식", children: [
        { id: "CAT020101", label: "밥류" },
        { id: "CAT020102", label: "육류" },
      ] },
      { id: "CAT0202", label: "일식" },
      { id: "CAT0203", label: "베이커리" },
      { id: "CAT0204", label: "간편식" },
    ],
  },
  {
    id: "CAT03", label: "면세", children: [
      { id: "CAT0301", label: "주류" },
      { id: "CAT0302", label: "화장품" },
      { id: "CAT0303", label: "패션잡화" },
      { id: "CAT0304", label: "기타" },
    ],
  },
];

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-muted/50 cursor-pointer"
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={() => setOpen(!open)}
      >
        {hasChildren ? (open ? "▼" : "▶") : "•"}
        <span className="ml-1">{node.label}</span>
        <span className="ml-2 text-xs text-muted-foreground">[{node.id}]</span>
      </div>
      {open && hasChildren && node.children!.map((c) => <TreeItem key={c.id} node={c} depth={depth + 1} />)}
    </div>
  );
}

export default function ScrInt010() {
  const confirm = useConfirm();

  const handleAdd = () => {
    toast.success("분류 추가 화면을 준비했습니다.");
  };

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: "분류 삭제",
      message: "선택한 분류를 삭제하시겠습니까?",
      confirmLabel: "삭제",
      cancelLabel: "취소",
      tone: "danger",
    });
    if (!confirmed) return;
    toast.success("분류가 삭제되었습니다.");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">품목분류 관리</h2>
      <ActionBar>
        <ActionButton label="신규 등록" onClick={handleAdd} />
        <ActionButton label="삭제" variant="destructive" onClick={handleDelete} />
      </ActionBar>
      <Card>
        <CardContent className="pt-4">
          {treeData.map((node) => <TreeItem key={node.id} node={node} />)}
        </CardContent>
      </Card>
    </div>
  );
}
