"use client";

import { generateColors } from '@mantine/colors-generator';
import { createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: "cyan",
    defaultRadius: "md",
    colors: {
        primary: generateColors("#731016"),
        neutral: generateColors("#3b3d45"),
        cyan: [
            "oklch(98.4% 0.019 200.873)",
            "oklch(95.6% 0.045 203.388)",
            "oklch(91.7% 0.08 205.041)",
            "oklch(86.5% 0.127 207.078)",
            "oklch(78.9% 0.154 211.53)",
            "oklch(71.5% 0.143 215.221)",
            "oklch(60.9% 0.126 221.723)",
            "oklch(52% 0.105 223.128)",
            "oklch(45% 0.085 224.283)",
            "oklch(39.8% 0.07 227.392)",
        ],
    },
});