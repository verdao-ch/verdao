"use client";

import Image from "next/image";

type LogoVariant = "black" | "white" | "verdao";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

export function Logo({ className = "", variant = "black" }: LogoProps) {
  const src =
    variant === "white"
      ? "/bamboogo-white-logo.png"
      : variant === "verdao"
      ? "/verdao-green-logo.png"
      : "/bamboogo-black-logo.png";
  const size = variant === "verdao" ? 1000 : variant === "white" ? 1000 : 500;

  return (
    <Image
      src={src}
      alt={variant === "verdao" ? "VERDAO" : "Bamboogo"}
      width={size}
      height={size}
      className={className}
    />
  );
}
