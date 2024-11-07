"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  return <h1 className="text-2xl">{search}</h1>;
}

export default function useSearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
