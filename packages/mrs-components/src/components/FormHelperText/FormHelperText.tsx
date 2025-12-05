/**
 * FormHelperText Component
 *
 * A Material UI FormHelperText component customized with design tokens from Figma.
 * Used to display helper text or error messages below form inputs.
 */

import React from 'react';
import MuiFormHelperText, {
  type FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';

export interface FormHelperTextProps extends MuiFormHelperTextProps {
  // All MUI FormHelperText props are available
}

/**
 * Styled FormHelperText component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFormHelperText = styled(MuiFormHelperText)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFormHelperText
}));

/**
 * FormHelperText component
 *
 * Used to display helper text or error messages below form inputs.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FormHelperText>Helper text</FormHelperText>
 * <FormHelperText error>Error message</FormHelperText>
 * ```
 */
export const FormHelperText = React.forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  ({ sx, ...props }, ref) => {
    return <StyledFormHelperText ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;

