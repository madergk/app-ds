/**
 * CardHeader Component
 *
 * A Material UI CardHeader component customized with MRS design tokens.
 * Used as a header section within a Card component.
 */

import React from 'react';
import type { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import MuiCardHeader from '@mui/material/CardHeader';

export interface CardHeaderProps extends MuiCardHeaderProps {}

/**
 * CardHeader component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader title="Title" subheader="Subheader" />
 * </Card>
 * ```
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ ...props }, ref) => {
    return <MuiCardHeader ref={ref} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;
