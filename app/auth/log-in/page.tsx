"use client";

import Image from "next/image";
import { Button, Checkbox, Group, TextInput, Title, Text, Anchor, PasswordInput, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconEyeCheck, IconEyeOff, IconLogin } from "@tabler/icons-react";

export default function LogIn() {
    const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
        reveal ? (
            <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        ) : (
            <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        );

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            username: '',
            password: '',
            rememberMe: false,
        },
        validate: {
            username: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <article className="flex flex-col lg:flex-row rounded-2xl bg-cyan-800 gap-8 p-12">
            <aside className="flex flex-col gap-0 items-center justify-center">
                <Image
                    src="/nav-logo.svg"
                    alt="Logo"
                    width={320}
                    height={80}
                    priority
                />
                <Title order={1} c="white" className="uppercase mt-4">
                    Bienvenido de vuelta
                </Title>
                <Text fw={700} c="white" className="uppercase">
                    Administración de permisos de trabajo
                </Text>
            </aside>

            <main className="rounded-r-2xl">
                <section className="flex w-full bg-white rounded-2xl p-8">
                    <form
                        onSubmit={form.onSubmit((values) => console.log(values))}
                        className="flex flex-col gap-4"
                    >
                        <Stack gap={0}>
                            <Title order={1} c="cyan.8">
                                Iniciar sesión
                            </Title>

                            <Text>
                                Ingresa tus credenciales para acceder a la plataforma.
                            </Text>
                        </Stack>

                        <TextInput
                            label="Correo electronico"
                            withAsterisk
                            placeholder="example@email.com"
                            key={form.key('username')}
                            {...form.getInputProps('username')}
                        />

                        <PasswordInput
                            label="Contraseña"
                            withAsterisk
                            placeholder="Ingresa tu contraseña"
                            visibilityToggleIcon={VisibilityToggleIcon}
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />

                        <Group justify="space-between">
                            <Checkbox
                                size="sm"
                                label="Recuerdame"
                                color="cyan.8"
                                key={form.key('termsOfService')}
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

                            <Anchor href="/auth/forgot-password" underline="hover" size="sm">
                                ¿Olvidaste tu contraseña?
                            </Anchor>
                        </Group>

                        <Group>
                            <Button
                                type="submit"
                                fullWidth
                                color="cyan.8"
                                leftSection={<IconLogin size={20} />}
                            >Iniciar sesión</Button>
                        </Group>

                        <Group gap="xs">
                            <Text size="sm" c="dimmed">
                                ¿No tienes cuenta?
                            </Text>
                            <Anchor href="/auth/sign-up" underline="hover" size="sm">
                                Registrate
                            </Anchor>
                        </Group>
                    </form>
                </section>
            </main>
        </article>
    );
}