/**
 * ListItemButton Component
 *
 * A Material UI ListItemButton component customized with design tokens from Figma.
 * Provides an actionable/clickable list item with hover and focus states.
 * Can be used as a standalone component or within ListItem.
 */

import React from 'react';
import type { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import MuiListItemButton from '@mui/material/ListItemButton';

export interface ListItemButtonProps extends MuiListItemButtonProps {
  /**
   * If true, the list item is selected
   * @default false
   */
  selected?: boolean;
  /**
   * If true, compact vertical padding is used
   * @default false
   */
  dense?: boolean;
  /**
   * If true, the list item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the left and right padding is removed
   * @default false
   */
  disableGutters?: boolean;
}

/**
 * ListItemButton component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItemButton>
 *     <ListItemText primary="Item 1" />
 *   </ListItemButton>
 *   <ListItemButton selected>
 *     <ListItemText primary="Item 2" />
 *   </ListItemButton>
 * </List>
 * ```
 */
export const ListItemButton = React.forwardRef<HTMLDivElement, ListItemButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiListItemButton ref={ref} {...props}>
        {children}
      </MuiListItemButton>
    );
  }
);

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
