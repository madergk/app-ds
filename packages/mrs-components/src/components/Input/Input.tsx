/**
 * Input Component
 *
 * A Material UI Input component (standard variant) customized with design tokens from Figma.
 * This is the base input component for the standard variant.
 */

import React from 'react';
import MuiInput, { type InputProps as MuiInputProps } from '@mui/material/Input';
import { styled } from '@mui/material/styles';

export interface InputProps extends MuiInputProps {
  // All MUI Input props are available
}

/**
 * Styled Input component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledInput = styled(MuiInput)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiInput
}));

/**
 * Input component (Standard variant)
 *
 * A standard input with underline border.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" />
 * <Input error helperText="Error message" />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sx, ...props }, ref) => {
    return <StyledInput ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;

