import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import { IconArrowsDiagonal } from "@tabler/icons-react";

interface Props {

}

export default function ViewPermissionDetailModal({ }: Props) {
    const [opened, { open, close }] = useDisclosure(false);

    return (<>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
            Oh hi
        </Modal>

        <ActionIcon variant="subtle" onClick={open}>
            <IconArrowsDiagonal size={20}/>
        </ActionIcon>
    </>);
}