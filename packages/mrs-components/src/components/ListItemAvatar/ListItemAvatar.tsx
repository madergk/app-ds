/**
 * ListItemAvatar Component
 *
 * A Material UI ListItemAvatar component customized with design tokens from Figma.
 * A wrapper for rendering Avatar components in list items with proper spacing.
 * Provides consistent alignment for avatars within lists.
 */

import React from 'react';
import type { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';

export interface ListItemAvatarProps extends MuiListItemAvatarProps {
  /**
   * The content of the component, typically an Avatar
   */
  children?: React.ReactNode;
}

/**
 * ListItemAvatar component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemAvatar>
 *     <Avatar>JD</Avatar>
 *   </ListItemAvatar>
 *   <ListItemText primary="John Doe" secondary="Software Engineer" />
 * </ListItem>
 * ```
 */
export const ListItemAvatar = React.forwardRef<HTMLDivElement, ListItemAvatarProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiListItemAvatar ref={ref} {...props}>
        {children}
      </MuiListItemAvatar>
    );
  }
);

ListItemAvatar.displayName = 'ListItemAvatar';

export default ListItemAvatar;
