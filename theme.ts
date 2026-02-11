"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: "indigo",
    defaultRadius: "md",
    colors: {
        primary: [
            "#e7f0ff",
            "#d0e2ff",
            "#a1c4ff",
            "#72a6ff",
            "#4388ff",
            "#1c6cff",
            "#1555cc",
            "#0f3e99",
            "#092766",
            "#031033",
        ],
        neutral: [
            "#fffbea",
            "#fff3bf",
            "#ffe98f",
            "#ffdf5f",
            "#ffd42f",
            "#ffca00",
            "#d4a700",
            "#a88400",
            "#7c6100",
            "#503e00",
        ],
    },
    other: {
        light: {
            body: "#ffffff",
            text: "#020617",
            dimmed: "#64748b",
            border: "#cbd5f5",
        },
        dark: {
            body: "#020617",
            text: "#f8fafc",
            dimmed: "#94a3b8",
            border: "#1e293b",
        },
    },
});