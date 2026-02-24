import { forwardRef } from 'react';
import {
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';
import {
  Group,
  Avatar,
  Text,
  Box,
} from '@mantine/core';

export interface ProfileButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  name: string;
  email: string;
  opened: boolean;
}

const ProfileButton = forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({ name, email, opened, className, ...others }, ref) => (
    <Box
      component="button"
      ref={ref}
      className={`
        border-none
        bg-transparent
        w-full
        py-1
        px-2
        rounded-lg
        transition-colors
        ${opened ? 'bg-white/10' : ''}
        hover:bg-white/10
        flex
        items-center
        ${className || ''}
      `}
      {...others}
    >
      <Group w="100%" justify="space-between">
        <Group>
          <Avatar radius="xl" color="white" />

          <div className="text-left">
            <Text size="sm" fw={600} c="white">
              {name}
            </Text>

            <Text size="xs" c="white">
              {email}
            </Text>
          </div>
        </Group>

        {opened ? (
          <IconChevronDown size={16} color="white" />
        ) : (
          <IconChevronRight size={16} color="white" />
        )}
      </Group>
    </Box>
  )
);

ProfileButton.displayName = 'ProfileButton';

export default ProfileButton;