"use client";

import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  showMenuButton: boolean;
  onMenuClick?: () => void;
}

export default function Header({ showMenuButton }: HeaderProps) {
  return (
    <header className="w-full px-6 py-4 bg-[#040F16] border-b border-[#393D3F] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/media/Gears.png"
          alt="Robostore Icon"
          width={32}
          height={32}
        />
        <h1 className="text-lg font-semibold tracking-tight text-white">Robostore G1 SDK</h1>
      </div>
      <div>
        <Link href="/">
          <span className="text-sm px-4 py-2 rounded bg-[#DB9D47] text-[#040F16] hover:bg-[#c88e3d] transition cursor-pointer">
            Home
          </span>
        </Link>
      </div>
    </header>
  );
}
