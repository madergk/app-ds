/**
 * LinearProgress Component
 *
 * A Material UI LinearProgress component customized with design tokens from Figma.
 * Supports all variants: determinate, indeterminate, buffer, query
 * Supports all colors: primary, secondary, error, info, success, warning
 */

import React from 'react';
import MuiLinearProgress, {
  type LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export interface LinearProgressProps extends MuiLinearProgressProps {
  // All MUI LinearProgress props are available
}

/**
 * Styled LinearProgress component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledLinearProgress = styled(MuiLinearProgress)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiLinearProgress
}));

/**
 * LinearProgress component
 *
 * A linear progress indicator component.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <LinearProgress variant="determinate" value={50} />
 * <LinearProgress variant="indeterminate" />
 * <LinearProgress variant="buffer" value={50} valueBuffer={75} />
 * ```
 */
export const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  ({ sx, ...props }, ref) => {
    return <StyledLinearProgress ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;

