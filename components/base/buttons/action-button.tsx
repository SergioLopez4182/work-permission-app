import { ActionIcon, Tooltip, ActionIconProps, ElementProps } from "@mantine/core";
import { ReactNode } from "react"

interface Props extends ActionIconProps, ElementProps<'button', keyof ActionIconProps> {
    icon: ReactNode;
    label: string;
};

export default function ActionButton({
    icon,
    label,
    ...actionIconProps
}: Props) {
    return (
        <Tooltip label={label}>
            <ActionIcon {...actionIconProps}>
                {icon}
            </ActionIcon>
        </Tooltip>
    )
}