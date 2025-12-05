/**
 * Avatar Component
 *
 * A Avatar component customized with design tokens from Figma.
 * Supports variants: lg, md, sm, xs
 * Supports display types: initials, icon, image
 * Optional badge positioned outside
 */

import React from 'react';
import { Box } from '@mui/material';
import { semanticColors, primitiveColors, primitiveTypography } from '../../theme/designTokens';
import { Icon, type IconName } from '../Icon';
import { Badge } from '../Badge';

export interface AvatarProps {
  /**
   * The size variant of the avatar
   * @default 'md'
   */
  variant?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * The initials to display (for initials variant)
   * @default 'R'
   */
  initials?: string;
  /**
   * The icon name to display (for icon variant)
   * Uses Material Icons AccountCircleRounded by default
   */
  icon?: IconName;
  /**
   * The image source URL (for image variant)
   */
  src?: string;
  /**
   * The alt text for the image
   */
  alt?: string;
  /**
   * The background color variant
   * @default 'secondary'
   */
  backgroundColor?: 'secondary' | 'verones';
  /**
   * Whether to show a badge
   * @default false
   */
  badge?: boolean;
  /**
   * Badge content (only used if badge is true)
   * @default '1'
   */
  badgeContent?: string;
}

/**
 * Size configuration for each variant
 */
const sizeConfig = {
  lg: {
    size: 40,
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.14,
  },
  md: {
    size: 32,
    fontSize: 15,
    lineHeight: 12,
    letterSpacing: 0,
  },
  sm: {
    size: 24,
    fontSize: 12,
    lineHeight: 10,
    letterSpacing: 0,
  },
  xs: {
    size: 20,
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0,
  },
} as const;

/**
 * Avatar component
 *
 * Displays user avatars with support for initials, icons, or images.
 * All styling is handled via design tokens.
 *
 * @example
 * ```tsx
 * <Avatar variant="lg" initials="JD" />
 * <Avatar variant="md" icon="AccountCircleRounded" />
 * <Avatar variant="sm" src="/avatar.jpg" alt="User" />
 * <Avatar variant="md" initials="R" badge badgeContent="3" />
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = 'md',
      initials,
      icon,
      src,
      alt,
      backgroundColor = 'secondary',
      badge = false,
      badgeContent = '1',
    },
    ref
  ) => {
    const config = sizeConfig[variant];
    const size = config.size;

    // Determine background color
    const bgColor =
      backgroundColor === 'secondary'
        ? semanticColors.secondary.light
        : primitiveColors.verones100;

    // Determine what to display
    const hasImage = !!src;
    const hasIcon = !!icon;
    const hasInitials = !!initials;
    const displayInitials = !hasImage && !hasIcon && hasInitials;

    // Avatar container styles
    const avatarStyles = {
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      maxWidth: size,
      maxHeight: size,
      borderRadius: '100%', // Fully rounded
      backgroundColor: bgColor,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      overflow: 'hidden',
    };

    // Badge wrapper styles (positioned outside)
    const badgeWrapperStyles = {
      position: 'relative' as const,
      display: 'inline-flex',
    };

    // Render content
    let content: React.ReactNode;

    if (hasImage) {
      content = (
        <Box
          component="img"
          src={src}
          alt={alt || 'Avatar'}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      );
    } else if (hasIcon) {
      // Calculate icon size to fit within avatar (approximately 80% of avatar size)
      const iconSize = Math.round(size * 0.8);
      content = (
        <Icon
          name={icon}
          sx={{
            width: iconSize,
            height: iconSize,
            color: semanticColors.primary.main,
          }}
        />
      );
    } else if (displayInitials) {
      content = (
        <Box
          sx={{
            fontFamily: primitiveTypography.fontFamily.brand,
            fontSize: `${config.fontSize}px`,
            fontWeight: primitiveTypography.fontWeight.semiBold, // 600
            lineHeight: `${config.lineHeight}px`,
            letterSpacing: config.letterSpacing ? `${config.letterSpacing}px` : 0,
            color: semanticColors.secondary.contrastText,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {initials}
        </Box>
      );
    } else {
      // Default: show AccountCircle icon
      const iconSize = Math.round(size * 0.8);
      content = (
        <Icon
          name="AccountCircleRounded"
          sx={{
            width: iconSize,
            height: iconSize,
            color: semanticColors.primary.main,
          }}
        />
      );
    }

    const avatar = (
      <Box ref={ref} sx={avatarStyles}>
        {content}
      </Box>
    );

    // If badge is enabled, wrap in container with badge
    if (badge) {
      return (
        <Box sx={badgeWrapperStyles}>
          {avatar}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(25%, -25%)', // Position outside top-right
            }}
          >
            <Badge content={badgeContent} variant="Standard" />
          </Box>
        </Box>
      );
    }

    return avatar;
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;

