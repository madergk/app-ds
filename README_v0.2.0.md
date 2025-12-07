# MRS Design System v0.2.0

> Comprehensive React component library built on Material-UI v7 with custom design tokens

[![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)](https://github.com/your-repo/mrs-components)
[![Material-UI](https://img.shields.io/badge/Material--UI-v7.3.6-blue.svg)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

---

## 🎉 What's New in v0.2.0

**Release Date**: December 7, 2025

We've added **8 essential components** that significantly improve the design system's coverage:

| Component | Category | Purpose |
|-----------|----------|---------|
| **Alert** | Feedback | Display important messages (success, error, warning, info) |
| **Chip** | Data Display | Compact tags, filters, and categories |
| **Card** + sub-components | Layout | Content containers with elevation |
| **Dialog** + sub-components | Feedback | Modal dialogs for user interactions |
| **Snackbar** | Feedback | Brief bottom-screen notifications |
| **CircularProgress** | Progress | Circular loading spinner |
| **Backdrop** | Overlay | Dark overlay for loading/modals |
| **Skeleton** | Feedback | Loading placeholders |

---

## 📊 Component Library

### Total: 42 Components (70% MUI Coverage)

#### Form Controls (6)
- Button, Checkbox, Radio, Switch, Select, Autocomplete

#### Form Inputs (6)
- TextField, Input, OutlinedInput, FilledInput, InputBase, InputAdornment

#### Form Utilities (5)
- FormControl, FormLabel, FormHelperText, FormGroup, FormControlLabel

#### Layout (8) 🆕
- Paper, Divider, List, ListItem
- **Card, CardHeader, CardContent, CardActions** 🆕

#### Data Display (3) 🆕
- Badge, Avatar
- **Chip** 🆕

#### Navigation & Progress (4) 🆕
- Stepper, LinearProgress, AppBar
- **CircularProgress** 🆕

#### Feedback & Overlay (9) 🆕
- Tooltip, Accordion, AccordionGroup
- **Alert, Snackbar, Backdrop, Skeleton** 🆕
- **Dialog, DialogTitle, DialogContent, DialogActions** 🆕

#### Content & Typography (3)
- Typography, Link, FileUpload

#### Icons (2)
- Icon, IconButton

---

## 🚀 Quick Start

### Installation

```bash
npm install @mrs/components @mui/material @emotion/react @emotion/styled
```

### Basic Usage

```jsx
import { ThemeProvider } from '@mui/material/styles';
import {
  theme,
  Button,
  Alert,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mrs/components';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* Alert */}
      <Alert severity="success">Operation completed!</Alert>

      {/* Card */}
      <Card>
        <CardContent>
          <Typography>Hello MRS Design System!</Typography>
        </CardContent>
      </Card>

      {/* Dialog */}
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography>Dialog content here</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
```

---

## 🎨 Design Tokens

All components use MRS design tokens from Figma:

### Colors
```javascript
Primary: #00686f (Verones teal)
Secondary: #99cc00 (Bright green)
Error: #ab1a1a
Warning: #dfa00a
Info: #2481b8
Success: #2e7d32
```

### Typography
- **Font Family**: Nunito
- **Font Weights**: 400 (regular), 500 (medium), 600 (semiBold), 700 (bold)

### Spacing
- **Base Unit**: 8px
- **Scale**: 1 (8px), 2 (16px), 3 (24px), 8 (64px)

### Border Radius
- **Medium**: 12px
- **Rounded**: 999px (pill shape)

---

## 📦 Component Examples

### Alert
```jsx
<Alert severity="success">Success message!</Alert>
<Alert severity="error" variant="filled">Error message</Alert>
<Alert severity="warning" variant="outlined">Warning</Alert>
```

### Chip
```jsx
<Chip label="Tag" color="primary" />
<Chip label="Delete" onDelete={() => {}} />
<Chip label="Small" size="small" variant="outlined" />
```

### Card
```jsx
<Card elevation={3}>
  <CardHeader title="Title" subheader="Subtitle" />
  <CardContent>
    <Typography>Content</Typography>
  </CardContent>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
```

### Dialog
```jsx
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Confirm</DialogTitle>
  <DialogContent>Are you sure?</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained">Confirm</Button>
  </DialogActions>
</Dialog>
```

### Progress & Loading
```jsx
{/* Circular Progress */}
<CircularProgress />
<CircularProgress color="secondary" size={30} />

{/* Backdrop with Loading */}
<Backdrop open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>

{/* Skeleton */}
<Skeleton variant="text" width="80%" />
<Skeleton variant="rectangular" height={118} />
<Skeleton variant="circular" width={40} height={40} />
```

---

## 🛠️ Development

### Monorepo Structure
```
app-ds/
├── packages/
│   └── mrs-components/          # Component library
│       ├── src/
│       │   ├── components/      # 42 components
│       │   ├── theme/           # Design tokens & theme
│       │   └── index.ts         # Main export
│       └── package.json
└── apps/
    └── app-ds/                  # Demo application
        └── src/
            └── App.jsx          # Component showcase
```

### Scripts
```bash
# Build the library
npm run build:lib

# Watch mode for development
npm run dev:lib

# Run demo app
npm run dev:app

# Build demo app
npm run build
```

---

## 📈 Roadmap

### v0.3.0 (Planned)
- Menu / MenuItem
- Tabs / Tab
- Grid / Grid2
- Table + sub-components
- Drawer
- Slider
- Rating
- ToggleButton / ToggleButtonGroup

### Future
- Breadcrumbs
- Pagination
- Fab (Floating Action Button)
- ButtonGroup
- Enhanced List components (ListItemButton, ListItemIcon, etc.)

---

## 📝 TypeScript Support

All components are fully typed:

```typescript
import type {
  AlertProps,
  ChipProps,
  CardProps,
  DialogProps,
  CircularProgressProps,
  SkeletonProps
} from '@mrs/components';
```

---

## 📚 Documentation

- **Component Demos**: See `apps/app-ds/src/App.jsx`
- **Design Tokens**: `packages/mrs-components/src/theme/designTokens.ts`
- **Theme Config**: `packages/mrs-components/src/theme/theme.ts`
- **Changelog**: See `CHANGELOG.md`
- **Gap Analysis**: See `MRS_COMPONENT_GAP_ANALYSIS.md`

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Use MRS design tokens for all styling
2. Follow the existing component structure
3. Include TypeScript types
4. Test with Material-UI v7
5. Update the demo app with examples

---

## 📄 License

MIT License

---

## 🔗 Links

- [Material-UI Documentation](https://mui.com/material-ui/)
- [Design Tokens Studio](https://tokens.studio/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

---

**Built with ❤️ by the MRS Team**

*MRS Design System - Making beautiful, consistent UIs simple*
