/**
 * Logged Devices Stories
 *
 * Storybook stories showcasing the Logged Devices design from Figma.
 * This demonstrates ListItem usage for device management.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';
import { Typography } from '../Typography';
import { Box } from '@mui/material';

const meta: Meta<typeof ListItem> = {
  title: 'Examples/Logged Devices',
  component: ListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Logged Devices example using ListItem component.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

/**
 * Logged Devices showcase matching Figma design
 */
export const LoggedDevices: Story = {
  render: () => {
    return (
      <Box sx={{ maxWidth: 552 }}>
        <Typography variant="body1" gutterBottom>
          Typography
        </Typography>
        <ListItem
          label="Google Chrome (Windows)"
          secondaryText="Last active 5 days ago"
          secondText
          leftIcon="AccountCircleRounded"
          rightIcon="ChevronRightRounded"
          rightSlot
        />
        <ListItem
          label="Google Chrome (Iphone 13)"
          secondaryText="Last active 23 days ago"
          secondText
          leftIcon="AccountCircleRounded"
          rightIcon="ChevronRightRounded"
          rightSlot
        />
        <ListItem
          label="Google Chrome (Windows)"
          secondaryText="Last active 129 days ago"
          secondText
          leftIcon="AccountCircleRounded"
          rightIcon="ChevronRightRounded"
          rightSlot
        />
      </Box>
    );
  },
};

