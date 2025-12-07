/**
 * DialogContent Component
 *
 * A Material UI DialogContent component customized with MRS design tokens.
 * Used as the main content section within a Dialog component.
 */

import React from 'react';
import type { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';
import MuiDialogContent from '@mui/material/DialogContent';

export interface DialogContentProps extends MuiDialogContentProps {}

/**
 * DialogContent component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Dialog open={open}>
 *   <DialogTitle>Title</DialogTitle>
 *   <DialogContent>
 *     Dialog content goes here
 *   </DialogContent>
 * </Dialog>
 * ```
 */
export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiDialogContent ref={ref} {...props}>
        {children}
      </MuiDialogContent>
    );
  }
);

DialogContent.displayName = 'DialogContent';

export default DialogContent;
