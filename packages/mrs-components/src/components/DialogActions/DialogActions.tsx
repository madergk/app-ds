/**
 * DialogActions Component
 *
 * A Material UI DialogActions component customized with MRS design tokens.
 * Used for action buttons at the bottom of a Dialog component.
 */

import React from 'react';
import type { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions';
import MuiDialogActions from '@mui/material/DialogActions';

export interface DialogActionsProps extends MuiDialogActionsProps {}

/**
 * DialogActions component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Dialog open={open}>
 *   <DialogTitle>Title</DialogTitle>
 *   <DialogContent>Content</DialogContent>
 *   <DialogActions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </DialogActions>
 * </Dialog>
 * ```
 */
export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiDialogActions ref={ref} {...props}>
        {children}
      </MuiDialogActions>
    );
  }
);

DialogActions.displayName = 'DialogActions';

export default DialogActions;
