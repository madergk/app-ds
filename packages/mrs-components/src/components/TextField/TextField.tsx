/**
 * TextField Component
 *
 * A Material UI TextField component customized with design tokens from Figma.
 * Supports all variants: standard, filled, outlined
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: enabled, disabled, error, focused, hovered
 * Supports InputAdornment for icons
 */

import React from 'react';
import MuiTextField, { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'color' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
}

/**
 * Styled TextField component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledTextField = styled(MuiTextField)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiTextField
}));

/**
 * TextField component
 *
 * A text input field with label and helper text support.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TextField label="Email" variant="outlined" />
 *
 * // With helper text
 * <TextField
 *   label="Password"
 *   type="password"
 *   helperText="Must be at least 8 characters"
 *   variant="outlined"
 * />
 *
 * // With error state
 * <TextField
 *   label="Email"
 *   error
 *   helperText="Invalid email address"
 *   variant="outlined"
 * />
 *
 * // With InputAdornment
 * <TextField
 *   label="Card number"
 *   InputProps={{
 *     startAdornment: (
 *       <InputAdornment position="start">
 *         <Icon name="CreditCardRounded" />
 *       </InputAdornment>
 *     ),
 *   }}
 *   variant="outlined"
 * />
 * ```
 */
export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ size = 'medium', color = 'primary', variant = 'outlined', sx, ...props }, ref) => {
    // Map 'default' to 'primary' if needed (for backward compatibility)
    const muiColor = color === 'default' ? 'primary' : color;
    return (
      <StyledTextField
        ref={ref}
        color={muiColor}
        size={size}
        variant={variant}
        {...(sx ? { sx } : {})}
        {...props}
      />
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;

