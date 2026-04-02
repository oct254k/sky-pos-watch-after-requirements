"use client";

import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";

type NumberInputProps = Omit<InputProps, "type" | "value" | "onChange"> & {
  value: string | number;
  onValueChange: (rawValue: string) => void;
  comma?: boolean;
};

const normalizeNumeric = (value: string) => value.replace(/[^\d]/g, "");

const formatWithComma = (value: string) => {
  if (!value) return "";
  return Number(value).toLocaleString("ko-KR");
};

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onValueChange, comma = false, inputMode = "numeric", ...props }, ref) => {
    const raw = normalizeNumeric(String(value ?? ""));
    const displayValue = comma ? formatWithComma(raw) : raw;

    return (
      <Input
        {...props}
        ref={ref}
        type="text"
        inputMode={inputMode}
        value={displayValue}
        onChange={(e) => onValueChange(normalizeNumeric(e.target.value))}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";
