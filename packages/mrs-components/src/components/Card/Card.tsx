/**
 * Card Component
 *
 * A Material UI Card component customized with MRS design tokens.
 * Used as a container for content with elevation.
 */

import React from 'react';
import type { CardProps as MuiCardProps } from '@mui/material/Card';
import MuiCard from '@mui/material/Card';

export interface CardProps extends MuiCardProps {
  /**
   * The elevation of the card
   * @default 1
   */
  elevation?: number;
  /**
   * If true, the card will use outlined variant
   * @default false
   */
  variant?: 'elevation' | 'outlined';
}

/**
 * Card component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Card elevation={2}>
 *   <CardContent>Content here</CardContent>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiCard ref={ref} {...props}>
        {children}
      </MuiCard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
