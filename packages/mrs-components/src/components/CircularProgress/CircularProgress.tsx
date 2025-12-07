/**
 * CircularProgress Component
 *
 * A Material UI CircularProgress component customized with MRS design tokens.
 * Used to indicate loading state with a circular spinner.
 */

import React from 'react';
import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';
import MuiCircularProgress from '@mui/material/CircularProgress';

export interface CircularProgressProps extends Omit<MuiCircularProgressProps, 'color'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  /**
   * The variant to use
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * The size of the component
   * @default 40
   */
  size?: number | string;
}

/**
 * CircularProgress component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <CircularProgress color="primary" size={40} />
 * ```
 */
export const CircularProgress = React.forwardRef<HTMLSpanElement, CircularProgressProps>(
  ({ ...props }, ref) => {
    return <MuiCircularProgress ref={ref} {...props} />;
  }
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
