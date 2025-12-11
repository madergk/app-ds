/**
 * CardMedia Component
 *
 * A Material UI CardMedia component customized with design tokens from Figma.
 * Used to display media content (images, videos) within Card components.
 * Supports img, video, audio, picture, iframe, and custom components.
 */

import React from 'react';
import type { CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';
import MuiCardMedia from '@mui/material/CardMedia';

export interface CardMediaProps extends MuiCardMediaProps {
  /**
   * Image to be displayed as a background image.
   * Either `src` or `image` can be used to display the media.
   */
  image?: string;
  /**
   * An alias for `image` property.
   * Available only with media components (img, video, etc.)
   */
  src?: string;
  /**
   * Component for rendering. Can be 'img', 'video', 'picture', etc.
   * @default 'div'
   */
  component?: React.ElementType;
}

/**
 * CardMedia component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardMedia
 *     component="img"
 *     height="140"
 *     image="/image.jpg"
 *     alt="Description"
 *   />
 *   <CardContent>
 *     <Typography>Content here</Typography>
 *   </CardContent>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardMedia
 *     image="/background.jpg"
 *     sx={{ height: 200 }}
 *   />
 * </Card>
 * ```
 */
export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  (props, ref) => {
    return <MuiCardMedia ref={ref} {...props} />;
  }
);

CardMedia.displayName = 'CardMedia';

export default CardMedia;
