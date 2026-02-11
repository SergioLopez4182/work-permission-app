"use client";

import { Button, Stack, Drawer, Text, Group, Divider, Burger } from "@mantine/core";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import NavButton from "../base/buttons/nav-button";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [opened, { close, toggle }] = useDisclosure(false);

    const sections = [
        {
            name: "Inicio",
            url: "/dashboard",
        },
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
        <nav className="px-4 h-16 flex items-center justify-between gap-4 bg-cyan-800 dark:bg-neutral-800">
            <section className="flex h-full gap-4 items-center">
                <Image
                    src="/nav-logo.svg"
                    alt="Logo"
                    width={180}
                    height={80}
                    priority
                />

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
                Profile button
            </section>

        </nav>
    );
}

// {/* Mobile */}
//             <div className="block lg:hidden">
//                 <Drawer
//                     opened={opened}
//                     onClose={close}
//                     title={<Text size="xl" fw={700}>Navegación</Text>}
//                 >
//                     <Stack gap="xs">
//                         {
//                             sections.map((section, i) => (
//                                 <Button
//                                     key={i}
//                                     variant={calculateActive(section.url, true)}
//                                     size="compact-md"
//                                     className="whitespace-nowrap"
//                                     onClick={() => {
//                                         router.push(section.url);
//                                         close();
//                                     }}
//                                 >
//                                     {section.name}
//                                 </Button>
//                             ))
//                         }

//                         <Divider size="sm" my="xs" color="dimmed" />
//                     </Stack>
//                 </Drawer>

//                 <Burger
//                     size="md"
//                     opened={opened}
//                     onClick={toggle}
//                     aria-label="toggle-navigation-drawer"
//                 />
//             </div>