/**
 * CardActions Component
 *
 * A Material UI CardActions component customized with MRS design tokens.
 * Used for action buttons at the bottom of a Card component.
 */

import React from 'react';
import type { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';
import MuiCardActions from '@mui/material/CardActions';

export interface CardActionsProps extends MuiCardActionsProps {}

/**
 * CardActions component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardContent>Content</CardContent>
 *   <CardActions>
 *     <Button>Action</Button>
 *   </CardActions>
 * </Card>
 * ```
 */
export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiCardActions ref={ref} {...props}>
        {children}
      </MuiCardActions>
    );
  }
);

CardActions.displayName = 'CardActions';

export default CardActions;
