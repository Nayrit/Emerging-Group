import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  if (variant === "dark") {
    return (
      <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
        <Image
          src="/brand/logo-mark.svg"
          alt="Emerging Group"
          width={42}
          height={42}
          className="h-9 w-9"
          priority
        />
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Emerging Group
          </span>
          <span className="text-[11px] text-white/65">Bangladesh</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/logo.png"
        alt="Emerging Group Bangladesh"
        width={180}
        height={32}
        className="h-8 w-auto md:h-9"
        priority
      />
    </Link>
  );
}
