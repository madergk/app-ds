/**
 * FilledInput Component
 *
 * A Material UI FilledInput component customized with design tokens from Figma.
 * This is the base input component for the filled variant.
 */

import React from 'react';
import MuiFilledInput, {
  type FilledInputProps as MuiFilledInputProps,
} from '@mui/material/FilledInput';
import { styled } from '@mui/material/styles';

export interface FilledInputProps extends MuiFilledInputProps {
  // All MUI FilledInput props are available
}

/**
 * Styled FilledInput component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledFilledInput = styled(MuiFilledInput)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiFilledInput
}));

/**
 * FilledInput component
 *
 * An input with a filled background.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <FilledInput placeholder="Enter text" />
 * <FilledInput error helperText="Error message" />
 * ```
 */
export const FilledInput = React.forwardRef<HTMLInputElement, FilledInputProps>(
  ({ sx, ...props }, ref) => {
    return <StyledFilledInput ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

FilledInput.displayName = 'FilledInput';

export default FilledInput;

