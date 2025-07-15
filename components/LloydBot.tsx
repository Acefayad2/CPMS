"use client";
import dynamic from "next/dynamic";
const LloydBotClient = dynamic(() => import("./LloydBotClient"), { ssr: false });

export default function LloydBot() {
  return <LloydBotClient />;
} 