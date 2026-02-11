import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

interface Props {
    isMobile?: boolean;
    href: string;
}

export default function GoBackButton({ isMobile = false, href }: Props) {
    return (
        <Button
            component="a"
            href={href}
            variant="subtle"
            size="compact-md"
            c="cyan.8"
            leftSection={<IconArrowLeft stroke={2} />}
        >
            Volver
        </Button>
    );
}
