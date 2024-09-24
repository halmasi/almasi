"use client";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  return <h1 className="text-2xl">{search}</h1>;
}
