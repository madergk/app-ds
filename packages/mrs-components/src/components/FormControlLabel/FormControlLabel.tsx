/**
 * FormControlLabel Component
 *
 * A Material UI FormControlLabel component customized with design tokens from Figma.
 * Used to combine a form control (checkbox, radio, switch) with a label.
 */

import React from 'react';
import MuiFormControlLabel, {
  type FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  // All MUI FormControlLabel props are available
}

/**
 * Styled FormControlLabel component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFormControlLabel = styled(MuiFormControlLabel)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFormControlLabel
}));

/**
 * FormControlLabel component
 *
 * Used to combine a form control (checkbox, radio, switch) with a label.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FormControlLabel control={<Checkbox />} label="Accept terms" />
 * <FormControlLabel control={<Radio />} label="Option 1" />
 * <FormControlLabel control={<Switch />} label="Enable notifications" />
 * ```
 */
export const FormControlLabel = React.forwardRef<HTMLLabelElement, FormControlLabelProps>(
  ({ sx, ...props }, ref) => {
    return <StyledFormControlLabel ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;

