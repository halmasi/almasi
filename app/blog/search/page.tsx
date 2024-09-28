"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function useSearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  return <h1 className="text-2xl">{search}</h1>;
}
