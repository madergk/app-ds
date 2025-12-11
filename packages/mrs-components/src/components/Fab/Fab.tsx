/**
 * Fab Component
 *
 * A Material UI Floating Action Button component customized with design tokens from Figma.
 * Supports circular and extended variants
 * Supports all sizes: small, medium, large
 * Supports all colors: primary, secondary, error, inherit
 * Supports all states: enabled, hovered, focused, pressed, disabled
 */

import React from 'react';
import type { FabProps as MuiFabProps } from '@mui/material/Fab';
import MuiFab from '@mui/material/Fab';

export interface FabProps extends Omit<MuiFabProps, 'color'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit' | 'default';
  /**
   * The variant to use
   * @default 'circular'
   */
  variant?: 'circular' | 'extended';
  /**
   * The size of the component
   * @default 'large'
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Fab component - Floating Action Button
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Fab color="primary" size="medium">
 *   <AddIcon />
 * </Fab>
 * ```
 *
 * @example
 * ```tsx
 * <Fab variant="extended" color="primary">
 *   <AddIcon sx={{ mr: 1 }} />
 *   Add Item
 * </Fab>
 * ```
 */
export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiFab ref={ref} {...props}>
        {children}
      </MuiFab>
    );
  }
);

Fab.displayName = 'Fab';

export default Fab;
