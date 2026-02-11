import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ColorSchemeScript, MantineColorScheme } from "@mantine/core";
import { cookies } from "next/headers";
import BaseLayout from "@/components/layouts/base-layout";
import BaseProvider from "@/components/providers/base-provider";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Permisos de trabajo | Sergio López",
    description: "Demo del proyecto Permisos de trabajo por Sergio López",
};

function getColorScheme(value?: string): MantineColorScheme {
    return value === "dark" ? "dark" : "light";
}

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    const cookieStore = await cookies();
    const colorScheme = getColorScheme(
        cookieStore.get("mantine-color-scheme")?.value
    );

    return (
        <html
            lang="es"
            data-mantine-color-scheme={colorScheme}
            className={colorScheme === "dark" ? "dark" : ""}
        >
            <head>
                <ColorSchemeScript defaultColorScheme={colorScheme} />
            </head>
            <body
                className={`${roboto.variable} ${robotoMono.variable} antialiased`}
            >
                <BaseProvider defaultColorScheme={colorScheme}>
                    <BaseLayout>
                        {children}
                    </BaseLayout>
                </BaseProvider>
            </body>
        </html>
    );
}
