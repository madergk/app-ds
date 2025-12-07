# Changelog

All notable changes to the MRS Design System will be documented in this file.

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
