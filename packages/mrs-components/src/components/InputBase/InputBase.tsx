/**
 * InputBase Component
 *
 * A Material UI InputBase component customized with design tokens from Figma.
 * This is the base component for all input variants.
 */

import React from 'react';
import MuiInputBase, {
  type InputBaseProps as MuiInputBaseProps,
} from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export interface InputBaseProps extends MuiInputBaseProps {
  // All MUI InputBase props are available
}

/**
 * Styled InputBase component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledInputBase = styled(MuiInputBase)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiInputBase
}));

/**
 * InputBase component
 *
 * The base component for all input variants.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <InputBase placeholder="Enter text" />
 * ```
 */
export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ sx, ...props }, ref) => {
    return <StyledInputBase ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

InputBase.displayName = 'InputBase';

export default InputBase;

