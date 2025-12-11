/**
 * ListItemText Component
 *
 * A Material UI ListItemText component customized with design tokens from Figma.
 * Displays primary and optional secondary text within list items.
 * Handles text truncation and layout automatically.
 */

import React from 'react';
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';
import MuiListItemText from '@mui/material/ListItemText';

export interface ListItemTextProps extends MuiListItemTextProps {
  /**
   * The main content element
   */
  primary?: React.ReactNode;
  /**
   * The secondary content element
   */
  secondary?: React.ReactNode;
  /**
   * If true, the text will not wrap and will be truncated with an ellipsis
   * @default false
   */
  noWrap?: boolean;
  /**
   * If true, the children won't be wrapped by a Typography component
   * @default false
   */
  disableTypography?: boolean;
  /**
   * If true, the text will have the secondary color
   * @default false
   */
  inset?: boolean;
}

/**
 * ListItemText component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemText primary="Single-line item" />
 * </ListItem>
 * ```
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemText
 *     primary="Two-line item"
 *     secondary="Secondary text"
 *   />
 * </ListItem>
 * ```
 */
export const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  (props, ref) => {
    return <MuiListItemText ref={ref} {...props} />;
  }
);

ListItemText.displayName = 'ListItemText';

export default ListItemText;
