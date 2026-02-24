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
                "no-underline text-xl font-bold rounded-t-lg p-2 transition-colors duration-50 border-white text-white " +
                (isActive
                    ? "border-b-3 hover:bg-white hover:text-cyan-800 "
                    : "hover:border-b-3 hover:bg-white/10")
            }
        >
            {name}
        </Link>
    );
}
