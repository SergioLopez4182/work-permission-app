"use client";

import Link from "next/link";
import Image from "next/image";

export default function LogoButton() {

    return (
        <Link
            href="/dashboard"
            className="flex px-2 py-1 transition-opacity hover:bg-white/10 rounded-lg"
        >
            <Image
                src="/nav-logo.svg"
                alt="app-logo"
                width={180}
                height={40}
                priority
            />
        </Link>
    );
}
