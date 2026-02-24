"use client";

import Image from "next/image";
import NavButton from "../base/buttons/nav-button";
import ProfileMenu from "../base/buttons/profile/menu";
import LogoButton from "../base/buttons/logo-button";

export default function Navbar() {
    const sections = [
        {
            name: "Permisos",
            url: "/dashboard/permissions",
        },
        {
            name: "Administración",
            url: "/dashboard/admin",
        },
    ];

    return (
        <nav className="px-8 h-16 flex items-center justify-between gap-4 bg-cyan-800 dark:bg-neutral-800">
            <section className="flex h-full gap-4 items-center">
                <LogoButton />

                <div className="w-1 h-8 bg-white" />

                {/* Desktop */}
                <div className="hidden lg:block">
                    <section className="flex gap-4">
                        {
                            sections.map((section, i) => (
                                <NavButton
                                    key={i}
                                    name={section.name}
                                    href={section.url}
                                />
                            ))
                        }
                    </section>
                </div>
            </section>
            
            <section>
                <ProfileMenu />
            </section>

        </nav>
    );
}