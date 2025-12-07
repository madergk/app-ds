/**
 * CardContent Component
 *
 * A Material UI CardContent component customized with MRS design tokens.
 * Used as the main content section within a Card component.
 */

import React from 'react';
import type { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import MuiCardContent from '@mui/material/CardContent';

export interface CardContentProps extends MuiCardContentProps {}

/**
 * CardContent component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardContent>
 *     Main content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiCardContent ref={ref} {...props}>
        {children}
      </MuiCardContent>
    );
  }
);

CardContent.displayName = 'CardContent';

export default CardContent;
