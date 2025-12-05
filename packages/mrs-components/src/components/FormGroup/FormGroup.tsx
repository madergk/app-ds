/**
 * FormGroup Component
 *
 * A Material UI FormGroup component customized with design tokens from Figma.
 * Used to group form controls together (e.g., checkboxes, radios).
 */

import React from 'react';
import MuiFormGroup, { type FormGroupProps as MuiFormGroupProps } from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';

export interface FormGroupProps extends MuiFormGroupProps {
  // All MUI FormGroup props are available
}

/**
 * Styled FormGroup component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFormGroup = styled(MuiFormGroup)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFormGroup
}));

/**
 * FormGroup component
 *
 * Used to group form controls together (e.g., checkboxes, radios).
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FormGroup>
 *   <FormControlLabel control={<Checkbox />} label="Option 1" />
 *   <FormControlLabel control={<Checkbox />} label="Option 2" />
 * </FormGroup>
 * ```
 */
export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ sx, ...props }, ref) => {
    return <StyledFormGroup ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

FormGroup.displayName = 'FormGroup';

export default FormGroup;

