/**
 * Material UI Theme Configuration
 *
 * This file creates a Material UI theme using the design tokens from Figma.
 * The theme is structured to match Material UI's theme API and can be used
 * with ThemeProvider to style all components.
 */

import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import {
  semanticColors,
  typographyVariants,
  primitiveTypography,
  primitiveRadius,
  primitiveBreakpoints,
  primitiveZIndex,
  primitiveTransitions,
  componentTokens,
} from './designTokens';

/**
 * Theme configuration options
 * Maps design tokens to Material UI theme structure
 */
const themeOptions: ThemeOptions = {
  // ============================================================================
  // PALETTE (Colors)
  // ============================================================================
  palette: {
    primary: {
      main: semanticColors.primary.main,
      dark: semanticColors.primary.dark,
      contrastText: semanticColors.primary.contrastText,
      // Note: light will be calculated automatically by MUI
    },
    secondary: {
      main: semanticColors.secondary.main,
      contrastText: semanticColors.secondary.contrastText,
    },
    error: {
      main: semanticColors.error.main,
      contrastText: semanticColors.error.contrastText,
    },
    warning: {
      main: semanticColors.warning.main,
    },
    info: {
      main: semanticColors.info.main,
      contrastText: semanticColors.info.contrastText,
    },
    success: {
      main: semanticColors.success.main,
      contrastText: semanticColors.success.contrastText,
    },
    background: {
      default: semanticColors.background.default,
      paper: semanticColors.background.paper.elevation0,
    },
    text: {
      primary: semanticColors.text.primary,
      secondary: semanticColors.text.secondary,
    },
    action: {
      active: semanticColors.action.active,
      selected: semanticColors.action.selected,
    },
    divider: semanticColors.divider,
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  typography: {
    fontFamily: `"${primitiveTypography.fontFamily.base}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    fontSize: 14, // Base font size (used for rem calculations)
    htmlFontSize: 16, // Default browser html font size

    // Typography variants - Headings
    h1: {
      fontFamily: typographyVariants.h1.fontFamily,
      fontSize: `${typographyVariants.h1.fontSize}px`,
      fontWeight: typographyVariants.h1.fontWeight,
      lineHeight: typographyVariants.h1.lineHeight,
    },
    h2: {
      fontFamily: typographyVariants.h2.fontFamily,
      fontSize: `${typographyVariants.h2.fontSize}px`,
      fontWeight: typographyVariants.h2.fontWeight,
      lineHeight: typographyVariants.h2.lineHeight,
    },
    h3: {
      fontFamily: typographyVariants.h3.fontFamily,
      fontSize: `${typographyVariants.h3.fontSize}px`,
      fontWeight: typographyVariants.h3.fontWeight,
      lineHeight: typographyVariants.h3.lineHeight,
    },
    h4: {
      fontFamily: typographyVariants.h4.fontFamily,
      fontSize: `${typographyVariants.h4.fontSize}px`,
      fontWeight: typographyVariants.h4.fontWeight,
      lineHeight: typographyVariants.h4.lineHeight,
    },
    h5: {
      fontFamily: typographyVariants.h5.fontFamily,
      fontSize: `${typographyVariants.h5.fontSize}px`,
      fontWeight: typographyVariants.h5.fontWeight,
      lineHeight: typographyVariants.h5.lineHeight,
    },
    h6: {
      fontFamily: typographyVariants.h6.fontFamily,
      fontSize: `${typographyVariants.h6.fontSize}px`,
      fontWeight: typographyVariants.h6.fontWeight,
      lineHeight: typographyVariants.h6.lineHeight,
    },
    // Typography variants - Subtitles
    subtitle1: {
      fontFamily: typographyVariants.subtitle1.fontFamily,
      fontSize: `${typographyVariants.subtitle1.fontSize}px`,
      fontWeight: typographyVariants.subtitle1.fontWeight,
      lineHeight: typographyVariants.subtitle1.lineHeight,
    },
    subtitle2: {
      fontFamily: typographyVariants.subtitle2.fontFamily,
      fontSize: `${typographyVariants.subtitle2.fontSize}px`,
      fontWeight: typographyVariants.subtitle2.fontWeight,
      lineHeight: typographyVariants.subtitle2.lineHeight,
    },
    // Typography variants - Body
    body1: {
      fontFamily: typographyVariants.body1.fontFamily,
      fontSize: `${typographyVariants.body1.fontSize}px`,
      fontWeight: typographyVariants.body1.fontWeight,
      lineHeight: typographyVariants.body1.lineHeight,
    },
    body2: {
      fontFamily: typographyVariants.body2.fontFamily,
      fontSize: `${typographyVariants.body2.fontSize}px`,
      fontWeight: typographyVariants.body2.fontWeight,
      lineHeight: typographyVariants.body2.lineHeight,
    },
    caption: {
      fontFamily: typographyVariants.caption.fontFamily,
      fontSize: `${typographyVariants.caption.fontSize}px`,
      fontWeight: typographyVariants.caption.fontWeight,
      lineHeight: typographyVariants.caption.lineHeight,
    },
    button: {
      fontFamily: typographyVariants.button.medium.fontFamily,
      fontSize: `${typographyVariants.button.medium.fontSize}px`,
      fontWeight: typographyVariants.button.medium.fontWeight,
      lineHeight: typographyVariants.button.medium.lineHeight,
      textTransform: 'none', // Material UI default is uppercase, but can be customized
    },
    // Typography variants - Other
    overline: {
      fontFamily: typographyVariants.overline.fontFamily,
      fontSize: `${typographyVariants.overline.fontSize}px`,
      fontWeight: typographyVariants.overline.fontWeight,
      lineHeight: typographyVariants.overline.lineHeight,
      textTransform: typographyVariants.overline.textTransform,
    },
  },

  // ============================================================================
  // SPACING
  // ============================================================================
  spacing: 8, // Base spacing unit (8px) - matches primitiveSpacing[1]

  // ============================================================================
  // BREAKPOINTS
  // ============================================================================
  breakpoints: {
    values: {
      xs: primitiveBreakpoints.xs,
      sm: primitiveBreakpoints.sm,
      md: 900, // MUI default, not in Figma tokens
      lg: 1200, // MUI default, not in Figma tokens
      xl: 1536, // MUI default, not in Figma tokens
    },
  },

  // ============================================================================
  // SHAPE (Border Radius)
  // ============================================================================
  shape: {
    borderRadius: primitiveRadius.md, // Default border radius
  },

  // ============================================================================
  // Z-INDEX (Component Layering)
  // ============================================================================
  zIndex: {
    mobileStepper: primitiveZIndex.mobileStepper,
    speedDial: primitiveZIndex.speedDial,
    appBar: primitiveZIndex.appBar,
    drawer: primitiveZIndex.drawer,
    modal: primitiveZIndex.modal,
    snackbar: primitiveZIndex.snackbar,
    tooltip: primitiveZIndex.tooltip,
  },

  // ============================================================================
  // TRANSITIONS (Animations)
  // ============================================================================
  transitions: {
    duration: primitiveTransitions.duration,
    easing: primitiveTransitions.easing,
    // Note: createTheme() automatically provides theme.transitions.create() helper
  },

  // ============================================================================
  // COMPONENTS
  // ============================================================================
  components: {
    // Button component customization
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Remove default shadow
      },
      styleOverrides: {
        root: {
          fontFamily: `"${typographyVariants.button.medium.fontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
          fontSize: `${typographyVariants.button.medium.fontSize}px`,
          fontWeight: typographyVariants.button.medium.fontWeight,
          lineHeight: `${typographyVariants.button.medium.lineHeight}px`, // Pixel value from Figma
          borderRadius: primitiveRadius.rounded, // Fully rounded (pill shape)
          textTransform: 'none', // No uppercase transformation
          padding: '8px 16px', // Default padding for medium
          minWidth: '64px', // Minimum width
          // Disabled state - use &.Mui-disabled for correct CSS specificity
          '&.Mui-disabled': {
            opacity: 0.38, // Material Design disabled opacity
          },
        },
        sizeSmall: {
          fontFamily: `"${typographyVariants.button.small.fontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
          fontSize: `${typographyVariants.button.small.fontSize}px`,
          lineHeight: `${typographyVariants.button.small.lineHeight}px`, // Pixel value from Figma
          fontWeight: typographyVariants.button.small.fontWeight,
          padding: '4px 12px',
          minHeight: '32px', // Match Figma small button height
        },
        sizeLarge: {
          fontFamily: `"${typographyVariants.button.large.fontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
          fontSize: `${typographyVariants.button.large.fontSize}px`,
          lineHeight: `${typographyVariants.button.large.lineHeight}px`, // Pixel value from Figma
          fontWeight: typographyVariants.button.large.fontWeight,
          padding: '12px 24px',
          minHeight: '48px', // Match Figma large button height
        },
        sizeMedium: {
          minHeight: '40px', // Match Figma medium button height
        },
        // Contained variant styling
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            // MUI will automatically darken the background color
          },
          '&:active': {
            boxShadow: 'none',
            // MUI will automatically darken further on press
          },
          '&:focus-visible': {
            outline: `2px solid ${semanticColors.primary.main}`,
            outlineOffset: '2px',
          },
        },
        // Outlined variant styling
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
            // MUI will add background overlay on hover
          },
          '&:focus-visible': {
            outline: `2px solid ${semanticColors.primary.main}`,
            outlineOffset: '2px',
          },
        },
        // Text variant styling
        text: {
          padding: '8px 16px',
          '&:hover': {
            // MUI will add background overlay on hover
          },
          '&:focus-visible': {
            outline: `2px solid ${semanticColors.primary.main}`,
            outlineOffset: '2px',
          },
          '&.MuiButton-sizeSmall': {
            padding: '4px 12px',
          },
          '&.MuiButton-sizeLarge': {
            padding: '12px 24px',
          },
        },
      },
    },

    // Chip component customization
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.chip.label.fontFamily,
          fontSize: `${typographyVariants.chip.label.fontSize}px`,
          fontWeight: typographyVariants.chip.label.fontWeight,
          lineHeight: `${typographyVariants.chip.label.lineHeight}px`, // Pixel value from Figma
        },
        deleteIcon: {
          color: componentTokens.chip.defaultCloseFill,
        },
      },
    },

    // TextField/Input component customization
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.label.fontFamily,
          fontSize: `${typographyVariants.input.label.fontSize}px`,
          fontWeight: typographyVariants.input.label.fontWeight,
          lineHeight: `${typographyVariants.input.label.lineHeight}px`, // Pixel value from Figma
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.value.fontFamily,
          fontSize: `${typographyVariants.input.value.fontSize}px`,
          fontWeight: typographyVariants.input.value.fontWeight,
          lineHeight: `${typographyVariants.input.value.lineHeight}px`, // Pixel value from Figma
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.helper.fontFamily,
          fontSize: `${typographyVariants.input.helper.fontSize}px`,
          fontWeight: typographyVariants.input.helper.fontWeight,
          lineHeight: typographyVariants.input.helper.lineHeight,
        },
      },
    },

    // Table component customization
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontFamily: typographyVariants.table.header.fontFamily,
            fontSize: `${typographyVariants.table.header.fontSize}px`,
            fontWeight: typographyVariants.table.header.fontWeight,
            lineHeight: `${typographyVariants.table.header.lineHeight}px`, // Pixel value from Figma
          },
        },
      },
    },

    // Alert component customization
    MuiAlert: {
      styleOverrides: {
        root: {
          '& .MuiAlertTitle-root': {
            fontFamily: typographyVariants.alert.title.fontFamily,
            fontSize: `${typographyVariants.alert.title.fontSize}px`,
            fontWeight: typographyVariants.alert.title.fontWeight,
            lineHeight: typographyVariants.alert.title.lineHeight,
          },
        },
        message: {
          fontFamily: typographyVariants.alert.description.fontFamily,
          fontSize: `${typographyVariants.alert.description.fontSize}px`,
          fontWeight: typographyVariants.alert.description.fontWeight,
          lineHeight: typographyVariants.alert.description.lineHeight,
        },
      },
    },

    // Avatar component customization
    MuiAvatar: {
      styleOverrides: {
        root: {
          '& .MuiAvatar-fallback': {
            fontFamily: typographyVariants.avatar.initialsMd.fontFamily,
            fontSize: `${typographyVariants.avatar.initialsMd.fontSize}px`,
            fontWeight: typographyVariants.avatar.initialsMd.fontWeight,
            lineHeight: `${typographyVariants.avatar.initialsMd.lineHeight}px`, // Pixel value from Figma
          },
        },
      },
    },

    // Rating component customization
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: componentTokens.rating.activeFill,
        },
        iconEmpty: {
          color: componentTokens.rating.enabledBorder,
        },
      },
    },

    // Fab (Floating Action Button) component customization
    MuiFab: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.button.medium.fontFamily,
          fontSize: `${typographyVariants.button.medium.fontSize}px`,
          fontWeight: typographyVariants.button.medium.fontWeight,
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },

    // ButtonGroup component customization
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    // Breadcrumbs component customization
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          fontFamily: typographyVariants.body2.fontFamily,
          fontSize: `${typographyVariants.body2.fontSize}px`,
          fontWeight: typographyVariants.body2.fontWeight,
        },
      },
    },

    // Slider component customization
    MuiSlider: {
      styleOverrides: {
        root: {
          color: semanticColors.primary.main,
        },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0 0 0 8px ${semanticColors.primary.states.hover}`,
          },
        },
      },
    },

    // Grid component customization
    MuiGrid: {
      defaultProps: {
        spacing: 2,
      },
    },

    // Menu component customization
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: primitiveRadius.md,
        },
      },
    },

    // MenuItem component customization
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.body1.fontFamily,
          fontSize: `${typographyVariants.body1.fontSize}px`,
          fontWeight: typographyVariants.body1.fontWeight,
          '&.Mui-selected': {
            backgroundColor: semanticColors.action.selected,
          },
        },
      },
    },

    // MenuList component customization
    MuiMenuList: {
      styleOverrides: {
        root: {
          padding: `${primitiveRadius.md / 2}px 0`,
        },
      },
    },

    // Tabs component customization
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${semanticColors.divider}`,
        },
        indicator: {
          backgroundColor: semanticColors.primary.main,
        },
      },
    },

    // Tab component customization
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.button.medium.fontFamily,
          fontSize: `${typographyVariants.button.medium.fontSize}px`,
          fontWeight: typographyVariants.button.medium.fontWeight,
          textTransform: 'none',
          '&.Mui-selected': {
            color: semanticColors.primary.main,
          },
        },
      },
    },

    // Drawer component customization
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },

    // Table component customization (additional overrides)
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: primitiveRadius.md,
        },
      },
    },

    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-body': {
            fontFamily: typographyVariants.table.body.fontFamily,
            fontSize: `${typographyVariants.table.body.fontSize}px`,
            fontWeight: typographyVariants.table.body.fontWeight,
            lineHeight: `${typographyVariants.table.body.lineHeight}px`,
          },
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: semanticColors.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: semanticColors.action.selected,
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${semanticColors.divider}`,
        },
        head: {
          fontWeight: typographyVariants.table.header.fontWeight,
          color: semanticColors.text.primary,
        },
      },
    },

    // CardMedia component customization
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: `${primitiveRadius.md}px ${primitiveRadius.md}px 0 0`,
        },
      },
    },

    // ListItem variants customization
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: semanticColors.action.selected,
          },
          '&:hover': {
            backgroundColor: semanticColors.action.hover,
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: semanticColors.text.primary,
          minWidth: 40,
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: typographyVariants.body1.fontFamily,
          fontSize: `${typographyVariants.body1.fontSize}px`,
          fontWeight: typographyVariants.body1.fontWeight,
        },
        secondary: {
          fontFamily: typographyVariants.body2.fontFamily,
          fontSize: `${typographyVariants.body2.fontSize}px`,
          fontWeight: typographyVariants.body2.fontWeight,
        },
      },
    },

    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 56,
        },
      },
    },
  },
};

/**
 * Create and export the Material UI theme
 */
export const theme = createTheme(themeOptions);

/**
 * Type export for theme
 */
export type AppTheme = typeof theme;
