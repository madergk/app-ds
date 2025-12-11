/**
 * MenuItem Component
 *
 * A Material UI MenuItem component customized with design tokens from Figma.
 * A wrapper for ListItemButton optimized for use in Menu components.
 * Handles click events, keyboard navigation, and selected states.
 */

import React from 'react';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import MuiMenuItem from '@mui/material/MenuItem';

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * If true, the menu item will be focused during the first mount
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If true, the menu item is selected
   * @default false
   */
  selected?: boolean;
  /**
   * If true, the menu item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, compact vertical padding is used
   * @default false
   */
  dense?: boolean;
  /**
   * If true, the left and right padding is removed
   * @default false
   */
  disableGutters?: boolean;
  /**
   * The component used for the root node
   */
  component?: React.ElementType;
}

/**
 * MenuItem component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
 *   <MenuItem onClick={handleProfile}>Profile</MenuItem>
 *   <MenuItem onClick={handleSettings}>Settings</MenuItem>
 *   <MenuItem onClick={handleLogout} selected>Logout</MenuItem>
 * </Menu>
 * ```
 *
 * @example
 * ```tsx
 * <MenuItem>
 *   <ListItemIcon>
 *     <Icon name="SettingsRounded" />
 *   </ListItemIcon>
 *   <ListItemText>Settings</ListItemText>
 * </MenuItem>
 * ```
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiMenuItem ref={ref} {...props}>
        {children}
      </MuiMenuItem>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
