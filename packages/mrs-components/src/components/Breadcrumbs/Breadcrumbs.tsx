/**
 * Breadcrumbs Component
 *
 * A Material UI Breadcrumbs component customized with design tokens from Figma.
 * Displays a navigation path with separators between items.
 * Supports custom separators and max items with collapse functionality.
 */

import React from 'react';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  /**
   * Custom separator between breadcrumb items
   * @default '/'
   */
  separator?: React.ReactNode;
  /**
   * Maximum number of breadcrumbs to display. When exceeded, the middle items will be collapsed.
   * @default 8
   */
  maxItems?: number;
  /**
   * Number of items to display after the collapsed indicator
   * @default 1
   */
  itemsAfterCollapse?: number;
  /**
   * Number of items to display before the collapsed indicator
   * @default 1
   */
  itemsBeforeCollapse?: number;
}

/**
 * Breadcrumbs component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Breadcrumbs>
 *   <Link href="/">Home</Link>
 *   <Link href="/products">Products</Link>
 *   <Typography>Current Page</Typography>
 * </Breadcrumbs>
 * ```
 *
 * @example
 * ```tsx
 * <Breadcrumbs separator="›" maxItems={3}>
 *   <Link href="/">Home</Link>
 *   <Link href="/level1">Level 1</Link>
 *   <Link href="/level2">Level 2</Link>
 *   <Link href="/level3">Level 3</Link>
 *   <Typography>Current</Typography>
 * </Breadcrumbs>
 * ```
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiBreadcrumbs ref={ref} {...props}>
        {children}
      </MuiBreadcrumbs>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
