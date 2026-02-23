"use client";

import { ActionIcon, Card, Grid, Group, Modal, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsDiagonal, IconDots, IconWindowMaximize } from "@tabler/icons-react";
import ViewPermissionDetailModal from "./view-permission-detail-modal";
import PermissionActionsMenu from "./permission-actions-menu";
import { useDisclosure } from "@mantine/hooks";

interface Props {

}

export default function PermissionCard({ }: Props) {
    const [opened, { open, close }] = useDisclosure(false);

    return (<>
        <Modal opened={opened} onClose={close} title="Crear permiso de trabajo" centered>
            View Permission Detail Modal
        </Modal>

        <Card
            onClick={open}
            shadow="lg"
            className="border-2 border-transparent hover:border-cyan-800 hover:bg-cyan-100/50 cursor-pointer"
        >
            <Card.Section withBorder px="md" py="xs" className="border-b-2 border-cyan-800">
                <Group justify="space-between" preventGrowOverflow={false} wrap="nowrap">
                    <Text fw={700} size="lg" c='cyan'>
                        Folio #1000000
                    </Text>
                    <Group gap={0}>
                        <PermissionActionsMenu />
                    </Group>
                </Group>
            </Card.Section>

            <Card.Section px="md" py="xs">
                <Grid grow>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Proyecto
                            </Text>
                            <Text c="dimmed" size="sm">
                                PROYECTO DEMO
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Local
                            </Text>
                            <Text c="dimmed" size="sm">
                                LOCAL D-1
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Tipo
                            </Text>
                            <Text c="dimmed" size="sm">
                                Actividades de Marketing
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Periodo
                            </Text>
                            <Text c="dimmed" size="sm">
                                2025/10/01 - 2025/10/31
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Stack gap={0}>
                            <Text fw={700} c="dimmed" size="sm">
                                Descripción
                            </Text>
                            <Text c="dimmed" size="sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu dolor vel odio bibendum efficitur ac maximus leo. Nunc pretium blandit tempus. In vehicula lacus eu elit rhoncus, et ornare libero pretium. Curabitur gravida quis justo ut pretium. Praesent dapibus dui ante, bibendum imperdiet augue euismod eu. Praesent sit amet finibus lacus. Maecenas lacinia laoreet sodales.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    </>);
}