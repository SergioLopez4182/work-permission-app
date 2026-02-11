"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    isMobile?: boolean;
    name: string;
    href: string;
}

export default function NavButton({ name, href }: Props) {
    const pathname = usePathname();

    const isActive =
        href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={
                "no-underline text-2xl font-bold rounded-t-lg px-4 pt-2 pb-1 transition-colors duration-150 border-white text-white " +
                (isActive
                    ? "border-b-4 hover:bg-white hover:text-cyan-800 "
                    : "hover:border-b-4 hover:bg-white/50")
            }
        >
            {name}
        </Link>
    );
}
