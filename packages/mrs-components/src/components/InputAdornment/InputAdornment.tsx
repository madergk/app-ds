/**
 * InputAdornment Component
 *
 * A Material UI InputAdornment component customized with design tokens from Figma.
 * Used to add icons or text to the start or end of inputs.
 */

import React from 'react';
import MuiInputAdornment, {
  type InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

export interface InputAdornmentProps extends MuiInputAdornmentProps {
  // All MUI InputAdornment props are available
}

/**
 * Styled InputAdornment component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledInputAdornment = styled(MuiInputAdornment)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiInputAdornment
}));

/**
 * InputAdornment component
 *
 * Used to add icons or text to the start or end of inputs.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <TextField
 *   label="Card number"
 *   InputProps={{
 *     startAdornment: (
 *       <InputAdornment position="start">
 *         <Icon name="CreditCardRounded" />
 *       </InputAdornment>
 *     ),
 *   }}
 * />
 * ```
 */
export const InputAdornment = React.forwardRef<HTMLDivElement, InputAdornmentProps>(
  ({ sx, ...props }, ref) => {
    return <StyledInputAdornment ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

InputAdornment.displayName = 'InputAdornment';

export default InputAdornment;

