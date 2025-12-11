/**
 * ButtonGroup Component
 *
 * A Material UI ButtonGroup component customized with design tokens from Figma.
 * Groups multiple buttons together with shared styling.
 * Supports all variants: contained, outlined, text
 * Supports all sizes: small, medium, large
 * Supports all colors: primary, secondary, error, inherit
 * Supports horizontal and vertical orientation
 */

import React from 'react';
import type { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material/ButtonGroup';
import MuiButtonGroup from '@mui/material/ButtonGroup';

export interface ButtonGroupProps extends Omit<MuiButtonGroupProps, 'color'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit';
  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The group orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * If true, the button group will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * ButtonGroup component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <ButtonGroup variant="contained" color="primary">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 *
 * @example
 * ```tsx
 * <ButtonGroup orientation="vertical" variant="outlined">
 *   <Button>Top</Button>
 *   <Button>Middle</Button>
 *   <Button>Bottom</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiButtonGroup ref={ref} {...props}>
        {children}
      </MuiButtonGroup>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
