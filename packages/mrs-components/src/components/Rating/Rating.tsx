/**
 * Rating Component
 *
 * A Material UI Rating component customized with design tokens from Figma.
 * Displays a star rating input or display.
 * Supports half-star precision, custom icons, and read-only mode.
 * Uses componentTokens.rating for colors.
 */

import React from 'react';
import type { RatingProps as MuiRatingProps } from '@mui/material/Rating';
import MuiRating from '@mui/material/Rating';

export interface RatingProps extends MuiRatingProps {
  /**
   * The rating value
   */
  value?: number | null;
  /**
   * Callback fired when the value changes
   */
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;
  /**
   * The minimum increment value change allowed
   * @default 1
   */
  precision?: number;
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the rating is read-only
   * @default false
   */
  readOnly?: boolean;
  /**
   * The icon to display for the empty state
   */
  emptyIcon?: React.ReactNode;
  /**
   * The icon to display for the filled state
   */
  icon?: React.ReactNode;
}

/**
 * Rating component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 * Colors come from componentTokens.rating (activeFill, enabledBorder)
 *
 * @example
 * ```tsx
 * <Rating value={4} onChange={(event, newValue) => setValue(newValue)} />
 * ```
 *
 * @example
 * ```tsx
 * <Rating value={3.5} precision={0.5} readOnly />
 * ```
 *
 * @example
 * ```tsx
 * <Rating
 *   value={5}
 *   max={10}
 *   size="large"
 *   onChange={(event, newValue) => setValue(newValue)}
 * />
 * ```
 */
export const Rating = React.forwardRef<HTMLSpanElement, RatingProps>(
  (props, ref) => {
    return <MuiRating ref={ref} {...props} />;
  }
);

Rating.displayName = 'Rating';

export default Rating;
