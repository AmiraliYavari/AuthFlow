import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/80
      backdrop-blur-md
      p-8
      shadow-2xl
    "
    >
      {children}
    </div>
  );
}