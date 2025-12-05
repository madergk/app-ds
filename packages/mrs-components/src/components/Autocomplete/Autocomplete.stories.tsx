/**
 * Autocomplete Stories
 *
 * Storybook stories for the Autocomplete component.
 * Displays all variants, sizes, colors, and states from Figma design.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

// Sample options for stories
const simpleOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Autocomplete component customized with design tokens. Supports single and multiple selection with standard, filled, and outlined variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the autocomplete',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the autocomplete',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the autocomplete is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, the autocomplete will indicate an error',
    },
    multiple: {
      control: 'boolean',
      description:
        'If true, the value must be an array and the menu will support multiple selections',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

// Default story - Single selection
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Box sx={{ minWidth: 300 }}>
        <Autocomplete
          options={simpleOptions}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          label="Buscar"
          placeholder="Selecciona una opción"
        />
      </Box>
    );
  },
};

// Multiple selection
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Box sx={{ minWidth: 300 }}>
        <Autocomplete
          multiple
          options={simpleOptions}
          value={value}
          onChange={(_, newValue) => setValue(newValue as string[])}
          label="Buscar"
          placeholder="Selecciona múltiples opciones"
        />
      </Box>
    );
  },
};

// Variants showcase
export const Variants: Story = {
  args: {
    variant: 'filled',
  },

  render: () => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<string | null>(null);
    const [value3, setValue3] = useState<string | null>(null);
    return (
      <Stack spacing={4} direction="row" flexWrap="wrap" gap={4}>
        <Box sx={{ minWidth: 220 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Standard
          </Typography>
          <Autocomplete
            options={simpleOptions}
            value={value1}
            onChange={(_, newValue) => setValue1(newValue)}
            variant="standard"
            label="Label"
            helperText="Helper text"
          />
        </Box>
        <Box sx={{ minWidth: 220 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Filled
          </Typography>
          <Autocomplete
            options={simpleOptions}
            value={value2}
            onChange={(_, newValue) => setValue2(newValue)}
            variant="filled"
            label="Label"
            helperText="Helper text"
          />
        </Box>
        <Box sx={{ minWidth: 220 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Outlined (default)
          </Typography>
          <Autocomplete
            options={simpleOptions}
            value={value3}
            onChange={(_, newValue) => setValue3(newValue)}
            variant="outlined"
            label="Label"
            helperText="Helper text"
          />
        </Box>
      </Stack>
    );
  },
};

// Sizes showcase
export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<string | null>(null);
    return (
      <Stack spacing={4}>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Small
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Box sx={{ minWidth: 220 }}>
              <Autocomplete
                options={simpleOptions}
                value={value1}
                onChange={(_, newValue) => setValue1(newValue)}
                size="small"
                variant="outlined"
                label="Label"
              />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Medium (default)
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Box sx={{ minWidth: 220 }}>
              <Autocomplete
                options={simpleOptions}
                value={value2}
                onChange={(_, newValue) => setValue2(newValue)}
                size="medium"
                variant="outlined"
                label="Label"
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    );
  },
};

// States showcase
export const States: Story = {
  render: () => {
    const [value1, setValue1] = useState<string | null>('Option 1');
    const [value2, setValue2] = useState<string | null>('Option 1');
    const [value3, setValue3] = useState<string | null>('Option 1');
    const [value4, setValue4] = useState<string | null>(null);
    return (
      <Stack spacing={4}>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Enabled, Has Value
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value1}
              onChange={(_, newValue) => setValue1(newValue)}
              variant="outlined"
              label="Label"
              helperText="Helper text"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Disabled, Has Value
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value2}
              onChange={(_, newValue) => setValue2(newValue)}
              variant="outlined"
              label="Label"
              disabled
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Error, Has Value
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value3}
              onChange={(_, newValue) => setValue3(newValue)}
              variant="outlined"
              label="Label"
              error
              helperText="Error message"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Enabled, No Value
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value4}
              onChange={(_, newValue) => setValue4(newValue)}
              variant="outlined"
              label="Label"
              placeholder="Placeholder"
              helperText="Helper text"
            />
          </Box>
        </Box>
      </Stack>
    );
  },
};

// Multiple selection with chips
export const MultipleWithChips: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['Option 1', 'Option 2']);
    return (
      <Box sx={{ minWidth: 300 }}>
        <Autocomplete
          multiple
          options={simpleOptions}
          value={value}
          onChange={(_, newValue) => setValue(newValue as string[])}
          variant="outlined"
          label="Buscar"
          placeholder="Selecciona múltiples opciones"
        />
      </Box>
    );
  },
};

// Colors showcase
export const Colors: Story = {
  render: () => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<string | null>(null);
    const [value3, setValue3] = useState<string | null>(null);
    return (
      <Stack spacing={4}>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Primary (default)
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value1}
              onChange={(_, newValue) => setValue1(newValue)}
              color="primary"
              variant="outlined"
              label="Label"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Secondary
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value2}
              onChange={(_, newValue) => setValue2(newValue)}
              color="secondary"
              variant="outlined"
              label="Label"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Error
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <Autocomplete
              options={simpleOptions}
              value={value3}
              onChange={(_, newValue) => setValue3(newValue)}
              color="error"
              variant="outlined"
              label="Label"
              error
              helperText="Error message"
            />
          </Box>
        </Box>
      </Stack>
    );
  },
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => {
    const [singleValue, setSingleValue] = useState<string | null>('Option 1');
    const [multipleValue, setMultipleValue] = useState<string[]>(['Chip', 'Chip']);
    const [openSingle, setOpenSingle] = useState(false);
    const [openMultiple, setOpenMultiple] = useState(false);

    return (
      <Box sx={{ p: 4, maxWidth: 1400 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Autocomplete Component Showcase
        </Typography>

        {/* Single Selection - Outlined Variant */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Single Selection - Outlined Variant
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, Has Value, Closed
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  options={simpleOptions}
                  value={singleValue}
                  onChange={(_, newValue) => setSingleValue(newValue)}
                  variant="outlined"
                  label="Buscar"
                  open={openSingle}
                  onOpen={() => setOpenSingle(true)}
                  onClose={() => setOpenSingle(false)}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, Has Value, Open
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  options={simpleOptions}
                  value={singleValue}
                  onChange={(_, newValue) => setSingleValue(newValue)}
                  variant="outlined"
                  label="Buscar"
                  open={true}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, No Value
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  options={simpleOptions}
                  value={null}
                  onChange={(_, newValue) => setSingleValue(newValue)}
                  variant="outlined"
                  label="Buscar"
                  placeholder="Option 1"
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Disabled, Has Value
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  options={simpleOptions}
                  value={singleValue}
                  onChange={(_, newValue) => setSingleValue(newValue)}
                  variant="outlined"
                  label="Buscar"
                  disabled
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Error, Has Value
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  options={simpleOptions}
                  value={singleValue}
                  onChange={(_, newValue) => setSingleValue(newValue)}
                  variant="outlined"
                  label="Buscar"
                  error
                  helperText="Error message"
                />
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Multiple Selection - Outlined Variant */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Multiple Selection - Outlined Variant
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, Has Values, Closed
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  multiple
                  options={simpleOptions}
                  value={multipleValue}
                  onChange={(_, newValue) => setMultipleValue(newValue as string[])}
                  variant="outlined"
                  label="Buscar"
                  open={openMultiple}
                  onOpen={() => setOpenMultiple(true)}
                  onClose={() => setOpenMultiple(false)}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, Has Values, Open
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  multiple
                  options={simpleOptions}
                  value={multipleValue}
                  onChange={(_, newValue) => setMultipleValue(newValue as string[])}
                  variant="outlined"
                  label="Buscar"
                  open={true}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enabled, No Values
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  multiple
                  options={simpleOptions}
                  value={[]}
                  onChange={(_, newValue) => setMultipleValue(newValue as string[])}
                  variant="outlined"
                  label="Buscar"
                  placeholder="Option 1"
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Disabled, Has Values
              </Typography>
              <Box sx={{ minWidth: 300 }}>
                <Autocomplete
                  multiple
                  options={simpleOptions}
                  value={multipleValue}
                  onChange={(_, newValue) => setMultipleValue(newValue as string[])}
                  variant="outlined"
                  label="Buscar"
                  disabled
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
