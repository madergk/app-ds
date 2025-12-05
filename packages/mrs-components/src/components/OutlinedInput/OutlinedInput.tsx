/**
 * OutlinedInput Component
 *
 * A Material UI OutlinedInput component customized with design tokens from Figma.
 * This is the base input component for the outlined variant.
 */

import React from 'react';
import MuiOutlinedInput, {
  type OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

export interface OutlinedInputProps extends MuiOutlinedInputProps {
  // All MUI OutlinedInput props are available
}

/**
 * Styled OutlinedInput component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledOutlinedInput = styled(MuiOutlinedInput)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiOutlinedInput
}));

/**
 * OutlinedInput component
 *
 * An input with an outlined border.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <OutlinedInput placeholder="Enter text" />
 * <OutlinedInput
 *   startAdornment={
 *     <InputAdornment position="start">
 *       <Icon name="SearchRounded" />
 *     </InputAdornment>
 *   }
 * />
 * ```
 */
export const OutlinedInput = React.forwardRef<HTMLInputElement, OutlinedInputProps>(
  ({ sx, ...props }, ref) => {
    return <StyledOutlinedInput ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

OutlinedInput.displayName = 'OutlinedInput';

export default OutlinedInput;

