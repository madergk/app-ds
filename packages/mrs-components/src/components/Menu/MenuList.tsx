/**
 * MenuList Component
 *
 * A Material UI MenuList component customized with design tokens from Figma.
 * A list of MenuItems without the Popover behavior of Menu.
 * Useful for custom menu implementations or dropdown content.
 */

import React from 'react';
import type { MenuListProps as MuiMenuListProps } from '@mui/material/MenuList';
import MuiMenuList from '@mui/material/MenuList';

export interface MenuListProps extends MuiMenuListProps {
  /**
   * If true, the menu list will auto-focus the first item on mount
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If true, will focus the [role="menu"] container and move into tab order
   * @default false
   */
  autoFocusItem?: boolean;
  /**
   * If true, compact vertical padding is used for all menu items
   * @default false
   */
  dense?: boolean;
  /**
   * If true, the vertical padding is removed from the list
   * @default false
   */
  disablePadding?: boolean;
  /**
   * If true, the menu items won't allow keyboard focus
   * @default false
   */
  disableListWrap?: boolean;
}

/**
 * MenuList component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Paper>
 *   <MenuList>
 *     <MenuItem>Profile</MenuItem>
 *     <MenuItem>My account</MenuItem>
 *     <MenuItem>Logout</MenuItem>
 *   </MenuList>
 * </Paper>
 * ```
 *
 * @example
 * ```tsx
 * <MenuList dense>
 *   <MenuItem>
 *     <ListItemIcon><Icon name="ContentCutRounded" /></ListItemIcon>
 *     <ListItemText>Cut</ListItemText>
 *   </MenuItem>
 *   <MenuItem>
 *     <ListItemIcon><Icon name="ContentCopyRounded" /></ListItemIcon>
 *     <ListItemText>Copy</ListItemText>
 *   </MenuItem>
 * </MenuList>
 * ```
 */
export const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiMenuList ref={ref} {...props}>
        {children}
      </MuiMenuList>
    );
  }
);

MenuList.displayName = 'MenuList';

export default MenuList;
