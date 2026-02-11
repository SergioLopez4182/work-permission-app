"use client";

import { ReactNode } from "react";
import { MantineProvider, MantineColorScheme } from "@mantine/core";
import { theme } from "@/theme";

export default function BaseProvider({
    children,
    defaultColorScheme,
}: {
    children: ReactNode,
    defaultColorScheme: MantineColorScheme;
}) {
    return (
        <MantineProvider
            theme={theme}
            defaultColorScheme={defaultColorScheme}
            withCssVariables
        >
            {children}
        </MantineProvider>
    );
}
