"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function HomePage() {
  useEffect(() => {
    const welcome = localStorage.getItem("welcome");
    if (welcome === "true") {
      redirect("/magda/store");
    } else {
      redirect("/welcome");
    }
  }, []);

  return null;
}