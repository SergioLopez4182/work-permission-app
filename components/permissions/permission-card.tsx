"use client";

import { ActionIcon, Card, Group, SimpleGrid, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

interface Props {

}

export default function PermissionCard({ }: Props) {
    return (
        <Card
            shadow="sm"
        >
            <Card.Section withBorder px="md" py="xs">
                <Group justify="space-between" grow preventGrowOverflow={false} wrap="nowrap">
                    <Text fw={700} size="lg">
                        Folio #1000000
                    </Text>
                    <ActionIcon variant="subtle" color="gray">
                        <IconDots size={16} />
                    </ActionIcon>
                </Group>

            </Card.Section>


            <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is not a fraud, trust us
            </Text>
        </Card>
    );
}