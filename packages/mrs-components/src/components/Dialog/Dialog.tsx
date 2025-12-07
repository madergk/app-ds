/**
 * Dialog Component
 *
 * A Material UI Dialog component customized with MRS design tokens.
 * Used for modal dialogs that require user interaction.
 */

import React from 'react';
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import MuiDialog from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps {
  /**
   * If true, the dialog is open
   * @default false
   */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed
   */
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  /**
   * The size of the dialog
   * @default 'sm'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

/**
 * Dialog component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Dialog open={open} onClose={handleClose}>
 *   <DialogTitle>Title</DialogTitle>
 *   <DialogContent>Content</DialogContent>
 *   <DialogActions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *   </DialogActions>
 * </Dialog>
 * ```
 */
export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiDialog ref={ref} {...props}>
        {children}
      </MuiDialog>
    );
  }
);

Dialog.displayName = 'Dialog';

export default Dialog;
