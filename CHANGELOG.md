# Changelog

All notable changes to the MRS Design System will be documented in this file.

## [0.3.0] - 2025-12-11

### Added - 15 New Components

This release significantly expands the MRS Design System, bringing total component count from 42 to 57 components (95% Material-UI coverage).

#### Layout Components (4 new)
- **Box** - Universal layout container with sx prop support
  - Direct MUI export for maximum flexibility
  - Supports all CSS properties via sx
  - Location: Direct export from `@mui/material/Box`

- **Stack** - Flexbox spacing utility
  - Direction-aware spacing (row/column)
  - Responsive spacing values
  - Location: Direct export from `@mui/material/Stack`

- **Container** - Centered max-width wrapper
  - Fixed and fluid max-width options
  - Responsive breakpoints
  - Location: Direct export from `@mui/material/Container`

- **Grid2** - Responsive grid layout system
  - Modern flexbox-based grid (uses MUI Grid internally)
  - Responsive column spans (xs, sm, md, lg, xl)
  - Flexible spacing and direction
  - Location: `src/components/Grid2/`

#### Form & Input Components (2 new)
- **Slider** - Range input with marks and steps
  - Continuous and discrete modes
  - Value labels (on, auto, off)
  - Marks and custom formatting
  - Location: `src/components/Slider/`

- **Rating** - Star rating input
  - Half-star precision support
  - Custom icons and max values
  - Read-only and disabled states
  - Uses `componentTokens.rating` for colors
  - Location: `src/components/Rating/`

#### Action Components (2 new)
- **Fab** - Floating Action Button
  - Circular and extended variants
  - Small, medium, and large sizes
  - Primary action emphasis
  - Location: `src/components/Fab/`

- **ButtonGroup** - Group related buttons
  - Horizontal and vertical orientation
  - All button variants supported
  - Full-width option
  - Location: `src/components/ButtonGroup/`

#### Navigation Components (6 new)
- **Tabs/Tab** - Tab navigation system
  - Scrollable and full-width variants
  - Horizontal and vertical orientation
  - Icon and label support
  - Custom indicator styling
  - Location: `src/components/Tabs/`

- **Breadcrumbs** - Navigation breadcrumb trail
  - Custom separators
  - Max items with collapse
  - Responsive behavior
  - Location: `src/components/Breadcrumbs/`

- **Menu/MenuItem/MenuList** - Dropdown menu components
  - Popover-based positioning
  - Keyboard navigation
  - Selected and hover states
  - Location: `src/components/Menu/`

- **Drawer** - Side panel navigation
  - Temporary, persistent, and permanent variants
  - Left, right, top, bottom anchors
  - Modal backdrop support
  - Location: `src/components/Drawer/`

#### Data Display Components (7 new)
- **Table Family** - Complete table system
  - **Table** - Base table component
  - **TableContainer** - Scrollable container
  - **TableHead** - Header section
  - **TableBody** - Body section
  - **TableRow** - Row with hover/select states
  - **TableCell** - Cell with alignment options
  - Uses `typographyVariants.table` tokens
  - Location: `src/components/Table/`

- **CardMedia** - Media display for cards
  - Image and video support
  - Background image mode
  - Completes Card component family
  - Location: `src/components/Card/CardMedia.tsx`

#### List Enhancement Components (4 new)
- **ListItemButton** - Clickable list item variant
  - Selected and hover states
  - Dense padding option
  - Location: `src/components/ListItemButton/`

- **ListItemIcon** - Icon slot for list items
  - Consistent icon spacing
  - Color inheritance
  - Location: `src/components/ListItemIcon/`

- **ListItemText** - Text slot for list items
  - Primary and secondary text
  - Typography variants
  - Location: `src/components/ListItemText/`

- **ListItemAvatar** - Avatar slot for list items
  - Proper avatar alignment
  - Consistent spacing
  - Location: `src/components/ListItemAvatar/`

### Enhanced
- **Theme Configuration** - Added MUI component overrides for all 15 new components
  - Fab, ButtonGroup, Breadcrumbs styling
  - Slider with custom thumb hover states
  - Grid default spacing (2)
  - Menu/MenuItem/MenuList with border radius and selected states
  - Tabs/Tab with indicator and text transform
  - Drawer with borderRadius
  - Table family with hover, selected, and divider styling
  - CardMedia with top border radius
  - ListItem variants with hover and selected states

- **Design Tokens** - Added missing tokens
  - `semanticColors.action.hover` - Hover state color
  - `typographyVariants.table.body` - Table body typography

### Build & Metrics
- **Bundle Size:** 1,058 KB (ESM) / 583 KB (CJS) - Increased from 702 KB due to 15 new components
- **Type Safety:** 100% TypeScript coverage maintained
- **Build:** Successful with no errors
- **Components:** 42 → 57 (+15 new components)
- **MUI Coverage:** 70% → 95%

## [0.2.0] - 2025-12-07

### Added - 8 New Components

#### Feedback Components
- **Alert** - Display important messages with severity levels (success, error, warning, info)
  - Supports standard, filled, and outlined variants
  - Styled with MRS design tokens
  - Location: `src/components/Alert/`

- **Snackbar** - Brief notifications at the bottom of the screen
  - Auto-hide functionality
  - Customizable duration
  - Location: `src/components/Snackbar/`

- **Backdrop** - Dark overlay for loading states or modals
  - Works with CircularProgress for loading screens
  - Click-away support
  - Location: `src/components/Backdrop/`

- **Skeleton** - Loading placeholders with various shapes
  - Supports text, rectangular, rounded, and circular variants
  - Pulse and wave animations
  - Location: `src/components/Skeleton/`

#### Data Display Components
- **Chip** - Compact elements for tags, filters, and categories
  - Supports all MUI color variants
  - Deletable and clickable variants
  - Small and medium sizes
  - Location: `src/components/Chip/`

- **Card** - Content containers with elevation
  - Includes CardHeader, CardContent, CardActions sub-components
  - Elevation and outlined variants
  - Location: `src/components/Card/`, `src/components/CardHeader/`, `src/components/CardContent/`, `src/components/CardActions/`

#### Dialog Components
- **Dialog** - Modal dialogs for important user interactions
  - Includes DialogTitle, DialogContent, DialogActions sub-components
  - Customizable width (xs, sm, md, lg, xl)
  - Backdrop click and escape key support
  - Location: `src/components/Dialog/`, `src/components/DialogTitle/`, `src/components/DialogContent/`, `src/components/DialogActions/`

#### Progress Indicators
- **CircularProgress** - Circular loading spinner
  - Determinate and indeterminate variants
  - Supports all color variants
  - Customizable size
  - Location: `src/components/CircularProgress/`

### Updated
- **index.ts** - Exported all new components and their TypeScript types
- **App.jsx** - Added comprehensive demos for all 8 new components
- **package.json** - Version bumped to 0.2.0

### Design System Stats
- **Total Components**: 42 (up from 34)
- **New Component Count**: +8
- **Coverage**: ~70% of common Material-UI patterns

### Technical Details
- All components use MRS design tokens from `src/theme/designTokens.ts`
- All components follow the established MRS wrapper pattern
- Full TypeScript support with exported prop types
- Styled via theme configuration for consistency
- Compatible with Material-UI v5, v6, and v7

## [0.1.0] - 2024-12-03

### Initial Release
- 34 core components
- Complete theme system with design tokens
- Typography, spacing, color, and radius tokens
- Form controls, inputs, navigation, and layout components
- Custom FileUpload and AccordionGroup components

---

**Format**: The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
**Versioning**: This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
