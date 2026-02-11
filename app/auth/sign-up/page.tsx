"use client";

import GoBackButton from '@/components/base/buttons/go-back';
import { Button, Group, TextInput, Title, Text, Anchor, Stack, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft, IconEyeCheck, IconEyeOff } from "@tabler/icons-react";

export default function SignUp() {
    const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
        reveal ? (
            <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        ) : (
            <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        );

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            full_name: '',
            email: '',
            password: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <section className="flex flex-col items-start w-1/4 gap-1">
            <GoBackButton href="/auth/log-in" />
            <article className="flex rounded-2xl bg-cyan-800 gap-8 p-12">

                <section className="flex bg-white rounded-2xl p-8">
                    <form
                        onSubmit={form.onSubmit((values) => console.log(values))}
                        className="flex flex-col gap-4"
                    >
                        <Stack gap={0}>
                            <Title order={1} c="cyan.8">
                                Crear cuenta
                            </Title>

                            <Text>
                                Crea una cuenta para comenzar a crear permisos de trabajo en tu centro comercial.
                            </Text>
                        </Stack>

                        <TextInput
                            label="Nombre completo"
                            withAsterisk
                            placeholder="John Doe"
                            key={form.key('full_name')}
                            {...form.getInputProps('full_name')}
                        />

                        <TextInput
                            label="Correo electronico"
                            withAsterisk
                            placeholder="example@email.com"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />


                        <PasswordInput
                            label="Contraseña"
                            withAsterisk
                            placeholder="Ingresa tu contraseña"
                            visibilityToggleIcon={VisibilityToggleIcon}
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />

                        <Group>
                            <Button
                                type="submit"
                                fullWidth
                                color="cyan.8"
                            >
                                Restablecer contraseña
                            </Button>
                        </Group>
                    </form>
                </section>
            </article>
        </section>
    );
}