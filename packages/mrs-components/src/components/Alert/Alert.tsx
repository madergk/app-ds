/**
 * Alert Component
 *
 * A Material UI Alert component customized with MRS design tokens.
 * Used to display important messages to users with different severity levels.
 * Supports all severities: error, warning, info, success
 */

import React from 'react';
import type { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';

export interface AlertProps extends MuiAlertProps {
  /**
   * The severity of the alert
   * @default 'info'
   */
  severity?: 'error' | 'warning' | 'info' | 'success';
  /**
   * The variant to use
   * @default 'standard'
   */
  variant?: 'standard' | 'filled' | 'outlined';
}

/**
 * Alert component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Alert severity="success" variant="filled">
 *   This is a success alert!
 * </Alert>
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiAlert ref={ref} {...props}>
        {children}
      </MuiAlert>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
