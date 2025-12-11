/**
 * ListItemIcon Component
 *
 * A Material UI ListItemIcon component customized with design tokens from Figma.
 * A wrapper for rendering icons or other leading elements in list items.
 * Typically used as the first child of ListItem or ListItemButton.
 */

import React from 'react';
import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';
import MuiListItemIcon from '@mui/material/ListItemIcon';

export interface ListItemIconProps extends MuiListItemIconProps {
  /**
   * The content of the component, typically an Icon
   */
  children?: React.ReactNode;
}

/**
 * ListItemIcon component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemIcon>
 *     <Icon name="InboxRounded" />
 *   </ListItemIcon>
 *   <ListItemText primary="Inbox" />
 * </ListItem>
 * ```
 */
export const ListItemIcon = React.forwardRef<HTMLDivElement, ListItemIconProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiListItemIcon ref={ref} {...props}>
        {children}
      </MuiListItemIcon>
    );
  }
);

ListItemIcon.displayName = 'ListItemIcon';

export default ListItemIcon;
