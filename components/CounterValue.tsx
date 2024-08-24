"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

export default function CounterValue() {
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}
