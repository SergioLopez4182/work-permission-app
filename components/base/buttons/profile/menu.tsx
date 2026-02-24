import { useState } from 'react';
import {
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import {
  Menu,
} from '@mantine/core';

import ProfileButton from './button';

export default function ProfileMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      position="bottom"
      shadow="xl"
      offset={8}
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <ProfileButton
          name="John Doe"
          email="john-doe@outlook.com"
          opened={opened}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Configuraciones</Menu.Label>

        <Menu.Item
          color="gray"
          leftSection={<IconSettings size={14} />}
        >
          Preguntas frecuentes
        </Menu.Item>

        <Menu.Item
          color="gray"
          leftSection={<IconSettings size={14} />}
        >
          Manual de usuario
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Cerrar sesión
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}