/**
 * Drawer Component
 *
 * A Material UI Drawer component customized with design tokens from Figma.
 * A panel that slides in from the edge of the screen.
 * Supports temporary, persistent, and permanent variants.
 * Can anchor to left, right, top, or bottom edges.
 */

import React from 'react';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';

export interface DrawerProps extends MuiDrawerProps {
  /**
   * Side from which the drawer will appear
   * @default 'left'
   */
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * If true, the drawer is shown
   */
  open?: boolean;
  /**
   * Callback fired when the drawer requests to be closed
   */
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  /**
   * The variant to use
   * @default 'temporary'
   */
  variant?: 'permanent' | 'persistent' | 'temporary';
  /**
   * The elevation of the drawer
   * @default 16
   */
  elevation?: number;
  /**
   * Props applied to the Modal component
   */
  ModalProps?: object;
  /**
   * Props applied to the Paper component
   */
  PaperProps?: object;
  /**
   * Props applied to the Slide transition component
   */
  SlideProps?: object;
}

/**
 * Drawer component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(true)}>Open Drawer</Button>
 * <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
 *   <List>
 *     <ListItem>
 *       <ListItemText primary="Home" />
 *     </ListItem>
 *     <ListItem>
 *       <ListItemText primary="Profile" />
 *     </ListItem>
 *   </List>
 * </Drawer>
 * ```
 *
 * @example
 * ```tsx
 * <Drawer variant="permanent" anchor="left">
 *   <List>
 *     <ListItemButton>
 *       <ListItemIcon><Icon name="InboxRounded" /></ListItemIcon>
 *       <ListItemText primary="Inbox" />
 *     </ListItemButton>
 *   </List>
 * </Drawer>
 * ```
 *
 * @example
 * ```tsx
 * <Drawer
 *   anchor="right"
 *   open={open}
 *   onClose={handleClose}
 *   PaperProps={{ sx: { width: 300 } }}
 * >
 *   <Box sx={{ p: 2 }}>
 *     <Typography variant="h6">Drawer Content</Typography>
 *   </Box>
 * </Drawer>
 * ```
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiDrawer ref={ref} {...props}>
        {children}
      </MuiDrawer>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
