/**
 * Grid2 Component
 *
 * A Material UI Grid component customized with design tokens from Figma.
 * Responsive grid layout system with flexible sizing and spacing.
 * Note: Named Grid2 for consistency but uses standard MUI Grid internally.
 */

import React from 'react';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';
import MuiGrid from '@mui/material/Grid';

export interface Grid2Props extends MuiGridProps {
  /**
   * If true, the component will have container behavior
   * @default false
   */
  container?: boolean;
  /**
   * Defines the space between grid items
   */
  spacing?: number;
  /**
   * Defines the column span for extra-small screens
   */
  xs?: number | 'auto' | boolean;
  /**
   * Defines the column span for small screens
   */
  sm?: number | 'auto' | boolean;
  /**
   * Defines the column span for medium screens
   */
  md?: number | 'auto' | boolean;
  /**
   * Defines the column span for large screens
   */
  lg?: number | 'auto' | boolean;
  /**
   * Defines the column span for extra-large screens
   */
  xl?: number | 'auto' | boolean;
  /**
   * Defines the flex-direction style property
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /**
   * The content of the component
   */
  children?: React.ReactNode;
}

/**
 * Grid2 component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Grid2 container spacing={2}>
 *   <Grid2 xs={6}>
 *     <Paper>Item 1</Paper>
 *   </Grid2>
 *   <Grid2 xs={6}>
 *     <Paper>Item 2</Paper>
 *   </Grid2>
 * </Grid2>
 * ```
 *
 * @example
 * ```tsx
 * <Grid2 container spacing={3}>
 *   <Grid2 xs={12} sm={6} md={4}>
 *     <Card>Responsive Item</Card>
 *   </Grid2>
 *   <Grid2 xs={12} sm={6} md={8}>
 *     <Card>Responsive Item</Card>
 *   </Grid2>
 * </Grid2>
 * ```
 */
export const Grid2 = React.forwardRef<HTMLDivElement, Grid2Props>(
  ({ children, ...props }, ref) => {
    return (
      <MuiGrid ref={ref} {...props}>
        {children}
      </MuiGrid>
    );
  }
);

Grid2.displayName = 'Grid2';

export default Grid2;
