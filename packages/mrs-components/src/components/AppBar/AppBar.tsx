/**
 * AppBar Component
 *
 * A Material UI AppBar component customized with design tokens from Figma.
 * Displays navigation, logo, notifications, and user account information.
 */

import React from 'react';
import { Box } from '@mui/material';
import { Paper } from '../Paper';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import {
  semanticColors,
  typographyVariants,
  primitiveSpacing,
  primitiveColors,
} from '../../theme/designTokens';

export interface AppBarProps {
  /**
   * Whether to show the menu icon button
   * @default true
   */
  showMenu?: boolean;
  /**
   * Callback fired when the menu icon is clicked
   */
  onMenuClick?: () => void;
  /**
   * Whether to show the notification icon with badge
   * @default true
   */
  showNotifications?: boolean;
  /**
   * Callback fired when the notification icon is clicked
   */
  onNotificationClick?: () => void;
  /**
   * Whether to show user account information
   * @default true
   */
  showUserAccount?: boolean;
  /**
   * User name to display
   * @default 'Pablo Salved'
   */
  userName?: string;
  /**
   * Account type/description to display
   * @default 'Cuenta principal'
   */
  accountType?: string;
  /**
   * User avatar initials
   * @default 'P'
   */
  userInitials?: string;
  /**
   * Custom width for the AppBar
   * @default 600
   */
  width?: number;
  /**
   * Whether this is a small screen variant
   * @default false
   */
  smallScreen?: boolean;
}

/**
 * Logo Component
 * Displays the MiREDSALUD logo with green/teal styling
 */
const Logo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '24px',
        width: '172px',
      }}
    >
      <Typography
        sx={{
          fontFamily: typographyVariants.h6.fontFamily,
          fontSize: `${typographyVariants.h6.fontSize}px`,
          fontWeight: typographyVariants.h6.fontWeight,
          lineHeight: typographyVariants.h6.lineHeight,
          color: semanticColors.secondary.main, // Bright green for "Mi"
        }}
      >
        Mi
      </Typography>
      <Typography
        sx={{
          fontFamily: typographyVariants.h6.fontFamily,
          fontSize: `${typographyVariants.h6.fontSize}px`,
          fontWeight: typographyVariants.h6.fontWeight,
          lineHeight: typographyVariants.h6.lineHeight,
          color: primitiveColors.teal, // Teal for "REDSALUD"
        }}
      >
        REDSALUD
      </Typography>
    </Box>
  );
};

/**
 * AccountStack Component
 * Displays user avatar with name and account type
 */
interface AccountStackProps {
  userName?: string;
  accountType?: string;
  userInitials?: string;
}

const AccountStack: React.FC<AccountStackProps> = ({
  userName = 'Pablo Salved',
  accountType = 'Cuenta principal',
  userInitials = 'P',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: primitiveSpacing[2], // 16px gap between text and avatar
        padding: '4px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          sx={{
            fontFamily: typographyVariants.subtitle2.fontFamily,
            fontSize: `${typographyVariants.subtitle2.fontSize}px`,
            fontWeight: typographyVariants.subtitle2.fontWeight,
            lineHeight: typographyVariants.subtitle2.lineHeight,
            color: semanticColors.text.primary,
            letterSpacing: '0.15px',
            whiteSpace: 'nowrap',
          }}
        >
          {userName}
        </Typography>
        <Typography
          sx={{
            fontFamily: typographyVariants.caption.fontFamily,
            fontSize: `${typographyVariants.caption.fontSize}px`,
            fontWeight: typographyVariants.caption.fontWeight,
            lineHeight: typographyVariants.caption.lineHeight,
            color: semanticColors.text.secondary,
            letterSpacing: '0.4px',
            whiteSpace: 'nowrap',
          }}
        >
          {accountType}
        </Typography>
      </Box>
      {/* Avatar with user initials */}
      <Box
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: primitiveColors.teal,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: typographyVariants.avatar.initialsMd.fontFamily,
          fontSize: `${typographyVariants.avatar.initialsMd.fontSize}px`,
          fontWeight: typographyVariants.avatar.initialsMd.fontWeight,
          lineHeight: `${typographyVariants.avatar.initialsMd.lineHeight}px`,
          color: semanticColors.primary.contrastText,
        }}
      >
        {userInitials}
      </Box>
    </Box>
  );
};

/**
 * AppBar component
 *
 * @example
 * ```tsx
 * <AppBar />
 * <AppBar
 *   userName="John Doe"
 *   accountType="Admin Account"
 *   onMenuClick={() => console.log('Menu clicked')}
 * />
 * ```
 */
export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (
    {
      showMenu = true,
      onMenuClick,
      showNotifications = true,
      onNotificationClick,
      showUserAccount = true,
      userName = 'Pablo Salved',
      accountType = 'Cuenta principal',
      userInitials = 'P',
      width = 600,
      smallScreen = false,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: width,
          backgroundColor: semanticColors.background.default,
        }}
        {...props}
      >
        <Paper
          variant="Elevation"
          elevation="1"
          sx={{
            width: '100%',
            backgroundColor: semanticColors.primary.contrastText, // White background
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: primitiveSpacing[1], // 8px
              paddingRight: smallScreen ? primitiveSpacing[2] : primitiveSpacing[3], // 16px on small, 24px otherwise
              paddingY: 0,
              minHeight: smallScreen ? 56 : 64, // Smaller height on small screens
            }}
          >
            {/* Left Side: Menu + Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: smallScreen ? primitiveSpacing[1] : primitiveSpacing[2], // 8px on small, 16px otherwise
                flex: '1 1 0',
                minWidth: 0,
                minHeight: smallScreen ? 56 : 64,
              }}
            >
              {showMenu && (
                <IconButton
                  size="medium"
                  color="default"
                  onClick={onMenuClick}
                  sx={{
                    padding: primitiveSpacing[1], // 8px
                    borderRadius: '999px',
                  }}
                >
                  <Icon name="MenuRounded" />
                </IconButton>
              )}
              <Logo />
            </Box>

            {/* Center/Right: Notifications */}
            {showNotifications && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  position: 'relative',
                  marginLeft: 'auto',
                  marginRight: showUserAccount
                    ? smallScreen
                      ? primitiveSpacing[2]
                      : primitiveSpacing[3]
                    : 0, // 16px on small, 24px otherwise
                }}
              >
                <IconButton
                  size="medium"
                  color="default"
                  onClick={onNotificationClick}
                  badge
                  badgeVariant="Dot"
                  sx={{
                    borderRadius: '999px',
                    width: '40px',
                    height: '40px',
                  }}
                >
                  <Icon name="NotificationsNoneRounded" />
                </IconButton>
              </Box>
            )}

            {/* Right: User Account */}
            {showUserAccount && (
              <AccountStack
                userName={userName}
                accountType={accountType}
                userInitials={userInitials}
              />
            )}
          </Box>
        </Paper>
      </Box>
    );
  }
);

AppBar.displayName = 'AppBar';

export default AppBar;
