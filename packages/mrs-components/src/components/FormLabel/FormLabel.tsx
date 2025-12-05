/**
 * FormLabel Component
 *
 * A Material UI FormLabel component customized with design tokens from Figma.
 * Used for labeling form controls and groups.
 */

import React from 'react';
import MuiFormLabel, { type FormLabelProps as MuiFormLabelProps } from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

export interface FormLabelProps extends Omit<MuiFormLabelProps, 'color'> {
  /**
   * The color of the component
   * @default 'inherit'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

/**
 * Styled FormLabel component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFormLabel = styled(MuiFormLabel)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFormLabel
}));

/**
 * FormLabel component
 *
 * Used for labeling form controls and groups.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FormLabel>Select an option</FormLabel>
 * <FormLabel color="error">Required field</FormLabel>
 * ```
 */
export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ color, sx, ...props }, ref) => {
    return (
      <StyledFormLabel ref={ref} {...(color ? { color } : {})} {...(sx ? { sx } : {})} {...props} />
    );
  }
);

FormLabel.displayName = 'FormLabel';

export default FormLabel;

