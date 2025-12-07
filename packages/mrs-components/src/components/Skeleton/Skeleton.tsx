/**
 * Skeleton Component
 *
 * A Material UI Skeleton component customized with MRS design tokens.
 * Used to display a loading placeholder with various shapes and animations.
 */

import React from 'react';
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';
import MuiSkeleton from '@mui/material/Skeleton';

export interface SkeletonProps extends MuiSkeletonProps {
  /**
   * The type of content that will be rendered
   * @default 'text'
   */
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  /**
   * The animation effect
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false;
  /**
   * Width of the skeleton
   */
  width?: number | string;
  /**
   * Height of the skeleton
   */
  height?: number | string;
}

/**
 * Skeleton component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Skeleton variant="rectangular" width={210} height={118} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="text" />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ ...props }, ref) => {
    return <MuiSkeleton ref={ref} {...props} />;
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
