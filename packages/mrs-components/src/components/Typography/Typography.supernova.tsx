/**
 * Typography Component - Supernova Compatible Version
 * 
 * This is a standalone version of the Typography component optimized for Supernova.
 * It includes all necessary imports and can work with or without ThemeProvider.
 * 
 * USAGE IN SUPERNOVA:
 * 
 * Option 1: With ThemeProvider (Recommended)
 * ```tsx
 * import { ThemeProvider } from '@mui/material/styles';
 * import { Typography } from './Typography';
 * import { theme } from '../theme';
 * 
 * <ThemeProvider theme={theme}>
 *   <Typography variant="h1">Heading</Typography>
 * </ThemeProvider>
 * ```
 * 
 * Option 2: Standalone (if Supernova provides MUI context)
 * ```tsx
 * import { Typography } from './Typography';
 * 
 * <Typography variant="h1">Heading</Typography>
 * ```
 */

import React from 'react';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant'> {
  /**
   * The typography variant to use
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  /**
   * If true, the text will have a bottom margin
   * @default false
   */
  gutterBottom?: boolean;
}

/**
 * Styled Typography component that uses design tokens from theme
 * All styling is handled via the theme configuration
 */
const StyledTypography = styled(MuiTypography)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.typography
}));

/**
 * Typography component
 *
 * @example
 * ```tsx
 * <Typography variant="h1" gutterBottom>
 *   Heading 1
 * </Typography>
 * <Typography variant="body1">
 *   Body text
 * </Typography>
 * ```
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, variant = 'body1', gutterBottom = false, ...props }, ref) => {
    return (
      <StyledTypography ref={ref} variant={variant} gutterBottom={gutterBottom} {...props}>
        {children}
      </StyledTypography>
    );
  }
);

Typography.displayName = 'Typography';

// Default export for Supernova compatibility
export default Typography;

// Named export for flexibility
export { Typography };

