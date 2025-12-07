/**
 * Chip Component
 *
 * A Material UI Chip component customized with MRS design tokens.
 * Used for tags, filters, and compact elements.
 * Supports all variants: filled, outlined
 * Supports all sizes: small, medium
 */

import React from 'react';
import type { ChipProps as MuiChipProps } from '@mui/material/Chip';
import MuiChip from '@mui/material/Chip';

export interface ChipProps extends Omit<MuiChipProps, 'color'> {
  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * The variant to use
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
}

/**
 * Chip component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Chip label="Tag" color="primary" onDelete={() => {}} />
 * ```
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ ...props }, ref) => {
    return <MuiChip ref={ref} {...props} />;
  }
);

Chip.displayName = 'Chip';

export default Chip;
