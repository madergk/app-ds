/**
 * Payment Form Stories
 *
 * Storybook stories showcasing the Payment form design from Figma.
 * This demonstrates TextField usage with InputAdornment for payment forms.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { InputAdornment } from '../InputAdornment';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Box } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Examples/Payment Form',
  component: TextField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Payment form example using TextField with InputAdornment.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

/**
 * Payment form showcase matching Figma design
 */
export const PaymentForm: Story = {
  render: () => {
    return (
      <Box sx={{ maxWidth: 552, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="body1" gutterBottom>
          Typography
        </Typography>
        <TextField
          label="Card number"
          variant="outlined"
          defaultValue="4242 **** **** **** ****"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon name="CreditCardRounded" />
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Cardholder name" variant="outlined" defaultValue="John Doe" />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Expiration date"
            variant="outlined"
            placeholder="MM / YY"
            sx={{ flex: 1 }}
          />
          <TextField label="CVC / CVC2" variant="outlined" placeholder="" sx={{ flex: 1 }} />
        </Box>
      </Box>
    );
  },
};

