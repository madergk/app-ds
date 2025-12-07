/**
 * Snackbar Component
 *
 * A Material UI Snackbar component customized with MRS design tokens.
 * Used for brief notifications at the bottom of the screen.
 */

import React from 'react';
import type { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';
import MuiSnackbar from '@mui/material/Snackbar';

export interface SnackbarProps extends MuiSnackbarProps {
  /**
   * If true, the snackbar is open
   * @default false
   */
  open: boolean;
  /**
   * The number of milliseconds to wait before automatically calling onClose
   * @default 6000
   */
  autoHideDuration?: number;
  /**
   * Callback fired when the component requests to be closed
   */
  onClose?: (event: React.SyntheticEvent<any> | Event, reason: string) => void;
}

/**
 * Snackbar component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Snackbar
 *   open={open}
 *   autoHideDuration={6000}
 *   onClose={handleClose}
 *   message="Note archived"
 * />
 * ```
 */
export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiSnackbar ref={ref} {...props}>
        {children}
      </MuiSnackbar>
    );
  }
);

Snackbar.displayName = 'Snackbar';

export default Snackbar;
