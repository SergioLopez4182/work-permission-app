import { Menu, ActionIcon, Text } from '@mantine/core';
import {
    IconDots,
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
    IconFileX,
    IconFileCheck,
    IconEdit,
    IconCancel,
} from '@tabler/icons-react';

interface Props {

}

export default function PermissionActionsMenu({ }: Props) {
    return (
        <Menu shadow="lg" position="bottom-start" offset={4} withArrow>
            <Menu.Target>
                <ActionIcon variant="subtle">
                    <IconDots size={20} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Acciones</Menu.Label>
                <Menu.Item leftSection={<IconFileCheck size={18} />} c="green">
                    Aprobar permiso
                </Menu.Item>
                <Menu.Item leftSection={<IconFileX size={18} />} c="red">
                    Rechazar permiso
                </Menu.Item>
                <Menu.Item leftSection={<IconEdit size={18} />} c="gray">
                    Editar
                </Menu.Item>

                <Menu.Divider />
                <Menu.Label>Precaución</Menu.Label>
                <Menu.Item leftSection={<IconCancel size={18} />} c="red">
                    Cancelar
                </Menu.Item>

            </Menu.Dropdown>
        </Menu>
    )
}