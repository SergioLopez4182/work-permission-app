"use client";

import { ActionIcon, Card, Grid, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsDiagonal, IconDots, IconWindowMaximize } from "@tabler/icons-react";

interface Props {

}

export default function PermissionCard({ }: Props) {
    return (
        <Card
            shadow="lg"
            className="border-2 border-transparent hover:border-cyan-800"
        >
            <Card.Section withBorder px="md" py="xs">
                <Group justify="space-between" preventGrowOverflow={false} wrap="nowrap">
                    <Text fw={700} size="lg">
                        Folio #1000000
                    </Text>
                    <Group gap={0}>
                        <ActionIcon variant="subtle" color="gray">
                            <IconArrowsDiagonal size={16} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                            <IconDots size={16} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>

            <Card.Section withBorder px="md" py="xs">

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
                                Descripción del trabajo a realizar en el local
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Card.Section>


        </Card>
    );
}