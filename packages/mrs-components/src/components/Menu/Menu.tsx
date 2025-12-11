/**
 * Menu Component
 *
 * A Material UI Menu component customized with design tokens from Figma.
 * Displays a list of choices on a temporary surface.
 * Built on top of Popover with list-specific behavior.
 */

import React from 'react';
import type { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import MuiMenu from '@mui/material/Menu';

export interface MenuProps extends Omit<MuiMenuProps, 'anchorEl'> {
  /**
   * The element used to anchor the menu
   */
  anchorEl?: MuiMenuProps['anchorEl'];
  /**
   * If true, the menu is shown
   */
  open: boolean;
  /**
   * Callback fired when the menu is requested to be closed
   */
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'tabKeyDown') => void;
  /**
   * The elevation of the menu
   * @default 8
   */
  elevation?: number;
  /**
   * If true, the menu will auto-focus the first item on open
   * @default true
   */
  autoFocus?: boolean;
  /**
   * Props applied to the Menu container
   */
  MenuListProps?: object;
  /**
   * Props applied to the Popover component
   */
  PopoverProps?: object;
}

/**
 * Menu component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * const [anchorEl, setAnchorEl] = useState(null);
 *
 * <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
 *   Open Menu
 * </Button>
 * <Menu
 *   anchorEl={anchorEl}
 *   open={Boolean(anchorEl)}
 *   onClose={() => setAnchorEl(null)}
 * >
 *   <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
 *   <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
 *   <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
 * </Menu>
 * ```
 */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiMenu ref={ref} {...props}>
        {children}
      </MuiMenu>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
