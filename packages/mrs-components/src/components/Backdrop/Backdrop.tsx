/**
 * Backdrop Component
 *
 * A Material UI Backdrop component customized with MRS design tokens.
 * Used to create a dark overlay behind dialogs or loading screens.
 */

import React from 'react';
import type { BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';
import MuiBackdrop from '@mui/material/Backdrop';

export interface BackdropProps extends MuiBackdropProps {
  /**
   * If true, the backdrop is open
   * @default false
   */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Backdrop component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Backdrop open={open} onClick={handleClose}>
 *   <CircularProgress color="inherit" />
 * </Backdrop>
 * ```
 */
export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiBackdrop ref={ref} {...props}>
        {children}
      </MuiBackdrop>
    );
  }
);

Backdrop.displayName = 'Backdrop';

export default Backdrop;
