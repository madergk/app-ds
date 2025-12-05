/**
 * TextField Stories
 *
 * Storybook stories for the TextField component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Box, Stack, Typography, InputAdornment } from '@mui/material';
import { Icon } from '../Icon';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI TextField component customized with design tokens. Supports standard, filled, and outlined variants with small and medium sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the text field',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the text field',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the text field is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, the text field will indicate an error',
    },
    multiline: {
      control: 'boolean',
      description: 'If true, a textarea element is rendered',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// Default story
export const Default: Story = {
  render: () => (
    <Box sx={{ minWidth: 300 }}>
      <TextField label="Label" variant="outlined" placeholder="Placeholder" />
    </Box>
  ),
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <Stack spacing={4} direction="row" flexWrap="wrap" gap={4}>
      <Box sx={{ minWidth: 220 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Standard
        </Typography>
        <TextField variant="standard" label="Label" helperText="Helper text" />
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Filled
        </Typography>
        <TextField variant="filled" label="Label" helperText="Helper text" />
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined (default)
        </Typography>
        <TextField variant="outlined" label="Label" helperText="Helper text" />
      </Box>
    </Stack>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Small
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Box sx={{ minWidth: 220 }}>
            <TextField size="small" variant="outlined" label="Label" />
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Box sx={{ minWidth: 220 }}>
            <TextField size="medium" variant="outlined" label="Label" />
          </Box>
        </Stack>
      </Box>
    </Stack>
  ),
};

// States showcase
export const States: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enabled, Has Value
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField variant="outlined" label="Label" defaultValue="Value" helperText="Helper text" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enabled, No Value
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField variant="outlined" label="Label" placeholder="Placeholder" helperText="Helper text" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Disabled, Has Value
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField variant="outlined" label="Label" defaultValue="Value" disabled />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error, Has Value
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField variant="outlined" label="Label" defaultValue="Value" error helperText="Error message" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Focused
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField variant="outlined" label="Label" autoFocus />
        </Box>
      </Box>
    </Stack>
  ),
};

// With InputAdornment
export const WithAdornments: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Start Adornment
        </Typography>
        <Box sx={{ minWidth: 300 }}>
          <TextField
            variant="outlined"
            label="Card number"
            defaultValue="4242 **** **** **** ****"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon name="AccountCircleRounded" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          End Adornment
        </Typography>
        <Box sx={{ minWidth: 300 }}>
          <TextField
            variant="outlined"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon name="SearchRounded" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Stack>
  ),
};

// Multiline
export const Multiline: Story = {
  render: () => (
    <Box sx={{ minWidth: 300 }}>
      <TextField
        variant="outlined"
        label="Bio"
        multiline
        rows={4}
        defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
    </Box>
  ),
};

// Colors showcase
export const Colors: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Primary (default)
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField color="primary" variant="outlined" label="Label" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Secondary
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField color="secondary" variant="outlined" label="Label" />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Error
        </Typography>
        <Box sx={{ minWidth: 220 }}>
          <TextField color="error" variant="outlined" label="Label" error helperText="Error message" />
        </Box>
      </Box>
    </Stack>
  ),
};

// Complete showcase matching Figma designs
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        TextField Component Showcase
      </Typography>

      {/* Payment Form Example */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Payment Form Example
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 552 }}>
          <TextField
            variant="outlined"
            label="Card number"
            defaultValue="4242 **** **** **** ****"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon name="AccountCircleRounded" />
                </InputAdornment>
              ),
            }}
          />
          <TextField variant="outlined" label="Cardholder name" defaultValue="John Doe" />
          <Stack direction="row" spacing={2}>
            <TextField variant="outlined" label="Expiration date" defaultValue="MM / YY" fullWidth />
            <TextField variant="outlined" label="CVC / CVC2" fullWidth />
          </Stack>
        </Stack>
      </Box>

      {/* Email & Password Form */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Email & Password Form
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <TextField variant="outlined" label="Email address" defaultValue="john@gmail.com" />
          <TextField variant="outlined" label="Password" type="password" defaultValue="**********" />
        </Stack>
      </Box>

      {/* Change Password Form */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Change Password Form
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 552 }}>
          <TextField variant="outlined" label="Current password" type="password" />
          <TextField variant="outlined" label="New password" type="password" />
          <TextField variant="outlined" label="Re-type new password" type="password" />
        </Stack>
      </Box>

      {/* Double Column Form */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Double Column Form
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 584 }}>
          <Stack direction="row" spacing={2}>
            <TextField variant="outlined" label="First name *" defaultValue="John" fullWidth />
            <TextField variant="outlined" label="Last name *" placeholder="Last name *" fullWidth />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              variant="outlined"
              label="Address 1 *"
              error
              helperText="Helper text"
              fullWidth
            />
            <TextField variant="outlined" label="Address 2" placeholder="Address 2" fullWidth />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField variant="outlined" label="Email *" defaultValue="Value" fullWidth />
            <TextField variant="outlined" label="Phone number *" defaultValue="414 141 414" fullWidth />
          </Stack>
        </Stack>
      </Box>

      {/* Single Column Form */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Single Column Form
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <TextField variant="outlined" label="Label" autoFocus />
          <TextField variant="outlined" label="Label" multiline rows={4} helperText="100/200" />
          <TextField variant="outlined" label="Label" placeholder="Label" />
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

