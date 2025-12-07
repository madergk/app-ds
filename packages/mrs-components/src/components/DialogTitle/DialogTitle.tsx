/**
 * DialogTitle Component
 *
 * A Material UI DialogTitle component customized with MRS design tokens.
 * Used as the title section within a Dialog component.
 */

import React from 'react';
import type { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';
import MuiDialogTitle from '@mui/material/DialogTitle';

export interface DialogTitleProps extends MuiDialogTitleProps {}

/**
 * DialogTitle component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Dialog open={open}>
 *   <DialogTitle>Dialog Title</DialogTitle>
 * </Dialog>
 * ```
 */
export const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiDialogTitle ref={ref} {...props}>
        {children}
      </MuiDialogTitle>
    );
  }
);

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
