/**
 * Avatar Stories
 *
 * Storybook stories for the Avatar component.
 * Displays all variants from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An Avatar component customized with design tokens. Supports variants (lg, md, sm, xs), display types (initials, icon, image), and optional badge.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      description: 'The size variant of the avatar',
    },
    initials: {
      control: 'text',
      description: 'The initials to display (for initials variant)',
    },
    icon: {
      control: 'select',
      options: [
        'AccountCircleRounded',
        'PersonRounded',
        'PersonOutlineRounded',
        'GroupRounded',
      ],
      description: 'The icon name to display (for icon variant)',
    },
    src: {
      control: 'text',
      description: 'The image source URL (for image variant)',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image',
    },
    backgroundColor: {
      control: 'select',
      options: ['secondary', 'verones'],
      description: 'The background color variant',
    },
    badge: {
      control: 'boolean',
      description: 'Whether to show a badge',
    },
    badgeContent: {
      control: 'text',
      description: 'Badge content (only used if badge is true)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default story
export const Default: Story = {
  args: {
    variant: 'md',
    initials: 'R',
    backgroundColor: 'secondary',
  },
};

// Size variants showcase
export const SizeVariants: Story = {
  render: () => (
    <Stack spacing={4} direction="row" alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="lg" initials="R" backgroundColor="secondary" />
        <Typography variant="caption">Large (lg)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="md" initials="R" backgroundColor="secondary" />
        <Typography variant="caption">Medium (md)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="sm" initials="R" backgroundColor="secondary" />
        <Typography variant="caption">Small (sm)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="xs" initials="R" backgroundColor="secondary" />
        <Typography variant="caption">Extra Small (xs)</Typography>
      </Box>
    </Stack>
  ),
};

// Display types showcase
export const DisplayTypes: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Avatar Display Types
      </Typography>

      {/* Initials */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Initials
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="lg" initials="R" backgroundColor="secondary" />
            <Typography variant="body2">Large</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="md" initials="R" backgroundColor="secondary" />
            <Typography variant="body2">Medium</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="sm" initials="R" backgroundColor="secondary" />
            <Typography variant="body2">Small</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Icon */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Icon
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="lg" icon="AccountCircleRounded" backgroundColor="verones" />
            <Typography variant="body2">Large</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="md" icon="AccountCircleRounded" backgroundColor="verones" />
            <Typography variant="body2">Medium</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar variant="sm" icon="AccountCircleRounded" backgroundColor="verones" />
            <Typography variant="body2">Small</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Image */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Image
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar
              variant="lg"
              src="https://placehold.co/40x40"
              alt="User avatar"
            />
            <Typography variant="body2">Large</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar
              variant="md"
              src="https://placehold.co/32x32"
              alt="User avatar"
            />
            <Typography variant="body2">Medium</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Avatar
              variant="sm"
              src="https://placehold.co/24x24"
              alt="User avatar"
            />
            <Typography variant="body2">Small</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Background color variants
export const BackgroundColors: Story = {
  render: () => (
    <Stack spacing={4} direction="row" alignItems="center" flexWrap="wrap" gap={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="md" initials="R" backgroundColor="secondary" />
        <Typography variant="caption">Secondary</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="md" initials="R" backgroundColor="verones" />
        <Typography variant="caption">Verones</Typography>
      </Box>
    </Stack>
  ),
};

// With badge
export const WithBadge: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Avatar with Badge
      </Typography>

      <Stack spacing={4} direction="row" alignItems="center" flexWrap="wrap" gap={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Avatar
            variant="lg"
            initials="R"
            backgroundColor="secondary"
            badge
            badgeContent="1"
          />
          <Typography variant="body2">Large with Badge</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Avatar
            variant="md"
            initials="R"
            backgroundColor="secondary"
            badge
            badgeContent="5"
          />
          <Typography variant="body2">Medium with Badge</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Avatar
            variant="sm"
            initials="R"
            backgroundColor="secondary"
            badge
            badgeContent="99"
          />
          <Typography variant="body2">Small with Badge</Typography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Avatar Component Showcase
      </Typography>

      {/* Large variants */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Large (lg) - 40px
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Avatar variant="lg" initials="R" backgroundColor="secondary" />
          <Avatar variant="lg" icon="AccountCircleRounded" backgroundColor="verones" />
          <Avatar variant="lg" src="https://placehold.co/40x40" alt="User" />
        </Stack>
      </Box>

      {/* Medium variants */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Medium (md) - 32px
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Avatar variant="md" initials="R" backgroundColor="secondary" />
          <Avatar variant="md" icon="AccountCircleRounded" backgroundColor="verones" />
          <Avatar variant="md" src="https://placehold.co/32x32" alt="User" />
        </Stack>
      </Box>

      {/* Small variants */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Small (sm) - 24px
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Avatar variant="sm" initials="R" backgroundColor="secondary" />
          <Avatar variant="sm" icon="AccountCircleRounded" backgroundColor="verones" />
          <Avatar variant="sm" src="https://placehold.co/24x24" alt="User" />
        </Stack>
      </Box>

      {/* With badges */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          With Badges
        </Typography>
        <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
          <Avatar
            variant="md"
            initials="R"
            backgroundColor="secondary"
            badge
            badgeContent="3"
          />
          <Avatar
            variant="md"
            icon="AccountCircleRounded"
            backgroundColor="verones"
            badge
            badgeContent="12"
          />
          <Avatar
            variant="md"
            src="https://placehold.co/32x32"
            alt="User"
            badge
            badgeContent="99"
          />
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Different initials
export const DifferentInitials: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap" gap={3}>
      <Avatar variant="md" initials="JD" backgroundColor="secondary" />
      <Avatar variant="md" initials="AB" backgroundColor="secondary" />
      <Avatar variant="md" initials="M" backgroundColor="secondary" />
      <Avatar variant="md" initials="XY" backgroundColor="verones" />
      <Avatar variant="md" initials="Z" backgroundColor="verones" />
    </Stack>
  ),
};

