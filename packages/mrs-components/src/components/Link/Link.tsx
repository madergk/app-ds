/**
 * Link Component
 *
 * A Material UI Link component customized with design tokens from Figma.
 * Supports all variants and states.
 */

import React from 'react';
import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export interface LinkProps extends MuiLinkProps {
  // All MUI Link props are available
}

/**
 * Styled Link component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledLink = styled(MuiLink)(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiLink
}));

/**
 * Link component
 *
 * A link component for navigation and actions.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Link href="/about">About</Link>
 * <Link href="/contact" underline="hover">Contact</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ sx, ...props }, ref) => {
    return <StyledLink ref={ref} {...(sx ? { sx } : {})} {...props} />;
  }
);

Link.displayName = 'Link';

export default Link;

