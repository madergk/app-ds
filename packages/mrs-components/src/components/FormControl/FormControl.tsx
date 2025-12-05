/**
 * FormControl Component
 *
 * A Material UI FormControl component customized with design tokens from Figma.
 * Provides context for form inputs, labels, and helper text.
 */

import React from 'react';
import MuiFormControl, {
  type FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

export interface FormControlProps extends Omit<MuiFormControlProps, 'color'> {
  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

/**
 * Styled FormControl component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFormControl = styled(MuiFormControl)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFormControl
}));

/**
 * FormControl component
 *
 * Provides context for form inputs, labels, and helper text.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FormControl variant="outlined" fullWidth>
 *   <InputLabel>Email</InputLabel>
 *   <TextField />
 *   <FormHelperText>Enter your email address</FormHelperText>
 * </FormControl>
 * ```
 */
export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ variant = 'outlined', size = 'medium', color = 'primary', sx, ...props }, ref) => {
    return (
      <StyledFormControl
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        {...(sx ? { sx } : {})}
        {...props}
      />
    );
  }
);

FormControl.displayName = 'FormControl';

export default FormControl;

