/**
 * FormGroup Stories
 *
 * Storybook stories for the FormGroup component.
 * Displays examples with checkboxes and radios.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { FormControlLabel } from '../FormControlLabel';
import { FormLabel } from '../FormLabel';
import { FormHelperText } from '../FormHelperText';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Box, Stack, Typography } from '@mui/material';

const meta: Meta<typeof FormGroup> = {
  title: 'Components/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI FormGroup component used to group form controls together (e.g., checkboxes, radios).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    row: {
      control: 'boolean',
      description: 'Display group horizontally',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

// Default story with checkboxes
export const Default: Story = {
  render: () => (
    <Box sx={{ minWidth: 300 }}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormControlLabel control={<Checkbox />} label="Option 3" />
      </FormGroup>
    </Box>
  ),
};

// With FormLabel and FormHelperText
export const WithLabelAndHelper: Story = {
  render: () => (
    <Box sx={{ minWidth: 300 }}>
      <FormGroup>
        <FormLabel>Label</FormLabel>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormHelperText>Helper text</FormHelperText>
      </FormGroup>
    </Box>
  ),
};

// Row layout
export const RowLayout: Story = {
  render: () => (
    <Box sx={{ minWidth: 400 }}>
      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormControlLabel control={<Checkbox />} label="Option 3" />
      </FormGroup>
    </Box>
  ),
};

// With Radio buttons
export const WithRadios: Story = {
  render: () => (
    <Box sx={{ minWidth: 300 }}>
      <FormGroup>
        <FormControlLabel control={<Radio name="radio-group" />} label="Option 1" />
        <FormControlLabel control={<Radio name="radio-group" />} label="Option 2" />
        <FormControlLabel control={<Radio name="radio-group" />} label="Option 3" />
      </FormGroup>
    </Box>
  ),
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1400 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        FormGroup Component Showcase
      </Typography>

      {/* Notifications Settings Example */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Notifications Settings
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 552 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Email notifications"
            />
            <FormHelperText>
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </FormHelperText>
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Push notifications"
            />
            <FormHelperText>
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </FormHelperText>
          </FormGroup>
        </Stack>
      </Box>

      {/* Radio Group Example */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Radio Group
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 552 }}>
          <FormGroup>
            <FormLabel>Label</FormLabel>
            <FormControlLabel control={<Radio name="group1" />} label="Option 1" />
            <FormControlLabel control={<Radio name="group1" />} label="Option 2" />
            <FormControlLabel control={<Radio name="group1" />} label="Option 3" />
          </FormGroup>
        </Stack>
      </Box>

      {/* Single Column Form Example */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Single Column Form with FormGroup
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <FormGroup>
            <FormLabel>Label</FormLabel>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
            <FormHelperText>Helper text</FormHelperText>
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Radio name="group2" defaultChecked />} label="Option 1" />
            <FormControlLabel control={<Radio name="group2" />} label="Option 2" />
          </FormGroup>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

