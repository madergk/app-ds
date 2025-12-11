# MRS Design System v0.3.0 - New Components Guide

**Release Date:** December 11, 2025
**Total New Components:** 15
**Total Components:** 57 (up from 42)
**MUI Coverage:** 95% (up from 70%)

---

## Overview

Version 0.3.0 is a major expansion of the MRS Design System, adding 15 essential components across layout, navigation, data display, and input categories. This release brings near-complete Material-UI coverage and provides all the building blocks needed for complex enterprise applications.

---

## Quick Reference

### New Components by Category

**Layout (4):** Box, Stack, Container, Grid2
**Navigation (6):** Menu, MenuItem, MenuList, Tabs, Tab, Breadcrumbs, Drawer
**Data Display (7):** Table, TableContainer, TableHead, TableBody, TableRow, TableCell, CardMedia
**Input (2):** Slider, Rating
**Actions (2):** Fab, ButtonGroup
**List Enhancements (4):** ListItemButton, ListItemIcon, ListItemText, ListItemAvatar

---

## Component Details

### 1. Layout Components

#### Box
**Purpose:** Universal layout container with full sx prop support

**Import:**
```tsx
import { Box } from '@mrs/components';
```

**Key Features:**
- Direct MUI export (no wrapping)
- Complete sx prop support for inline styling
- Polymorphic component prop
- Perfect for one-off layouts

**Example:**
```tsx
<Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
  Content with custom styling
</Box>
```

#### Stack
**Purpose:** Flexbox spacing utility for vertical or horizontal layouts

**Import:**
```tsx
import { Stack } from '@mrs/components';
```

**Key Features:**
- Direction-aware spacing (row/column)
- Responsive spacing values
- Alignment and justification props
- Divider support

**Example:**
```tsx
<Stack direction="row" spacing={2} alignItems="center">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
  <Button>Action 3</Button>
</Stack>
```

#### Container
**Purpose:** Centered max-width wrapper for page content

**Import:**
```tsx
import { Container } from '@mrs/components';
```

**Key Features:**
- Responsive max-width breakpoints
- Fixed and fluid variants
- Optional gutters
- Perfect for page layouts

**Example:**
```tsx
<Container maxWidth="lg">
  <Typography variant="h2">Page Content</Typography>
</Container>
```

#### Grid2
**Purpose:** Responsive grid layout system

**Import:**
```tsx
import { Grid2 } from '@mrs/components';
```

**Key Features:**
- 12-column grid system
- Responsive breakpoints (xs, sm, md, lg, xl)
- Flexible spacing
- Container and item modes

**Example:**
```tsx
<Grid2 container spacing={3}>
  <Grid2 xs={12} md={6}>
    <Card>Item 1</Card>
  </Grid2>
  <Grid2 xs={12} md={6}>
    <Card>Item 2</Card>
  </Grid2>
</Grid2>
```

---

### 2. Navigation Components

#### Menu / MenuItem / MenuList
**Purpose:** Dropdown menu system with keyboard navigation

**Import:**
```tsx
import { Menu, MenuItem, MenuList } from '@mrs/components';
```

**Key Features:**
- Popover-based positioning
- Keyboard navigation
- Selected and hover states
- MenuList for standalone use

**Example:**
```tsx
const [anchorEl, setAnchorEl] = useState(null);

<Button onClick={(e) => setAnchorEl(e.currentTarget)}>
  Open Menu
</Button>
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={() => setAnchorEl(null)}
>
  <MenuItem onClick={handleProfile}>Profile</MenuItem>
  <MenuItem onClick={handleSettings}>Settings</MenuItem>
  <MenuItem onClick={handleLogout}>Logout</MenuItem>
</Menu>
```

#### Tabs / Tab
**Purpose:** Tab navigation for content sections

**Import:**
```tsx
import { Tabs, Tab } from '@mrs/components';
```

**Key Features:**
- Scrollable and full-width variants
- Horizontal and vertical orientation
- Icon support
- Custom indicator styling

**Example:**
```tsx
const [value, setValue] = useState(0);

<Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
  <Tab label="Home" />
  <Tab label="Profile" />
  <Tab label="Settings" />
</Tabs>
```

#### Breadcrumbs
**Purpose:** Navigation breadcrumb trail

**Import:**
```tsx
import { Breadcrumbs, Link, Typography } from '@mrs/components';
```

**Key Features:**
- Custom separators
- Max items with collapse
- Works with Link component
- Responsive behavior

**Example:**
```tsx
<Breadcrumbs separator="›" maxItems={4}>
  <Link href="/">Home</Link>
  <Link href="/products">Products</Link>
  <Typography>Current Page</Typography>
</Breadcrumbs>
```

#### Drawer
**Purpose:** Side panel navigation

**Import:**
```tsx
import { Drawer, List, ListItemButton, ListItemText } from '@mrs/components';
```

**Key Features:**
- Temporary, persistent, and permanent variants
- Four anchor positions (left, right, top, bottom)
- Modal backdrop support
- Smooth slide transitions

**Example:**
```tsx
const [open, setOpen] = useState(false);

<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
  <List>
    <ListItemButton>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Profile" />
    </ListItemButton>
  </List>
</Drawer>
```

---

### 3. Data Display Components

#### Table Family
**Purpose:** Complete table system for data display

**Import:**
```tsx
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mrs/components';
```

**Key Features:**
- 6 inter-connected components
- Hover and selected row states
- Sticky headers
- Responsive scrolling
- Uses `typographyVariants.table` tokens

**Example:**
```tsx
<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Age</TableCell>
        <TableCell align="right">Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow hover>
        <TableCell>John Doe</TableCell>
        <TableCell align="right">32</TableCell>
        <TableCell align="right">Developer</TableCell>
      </TableRow>
      <TableRow hover selected>
        <TableCell>Jane Smith</TableCell>
        <TableCell align="right">28</TableCell>
        <TableCell align="right">Designer</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
```

#### CardMedia
**Purpose:** Media display for Card components

**Import:**
```tsx
import { Card, CardMedia, CardContent, Typography } from '@mrs/components';
```

**Key Features:**
- Image and video support
- Background image mode
- Component prop for custom elements
- Completes Card family

**Example:**
```tsx
<Card>
  <CardMedia
    component="img"
    height="200"
    image="/product.jpg"
    alt="Product"
  />
  <CardContent>
    <Typography variant="h5">Product Name</Typography>
  </CardContent>
</Card>
```

---

### 4. Input Components

#### Slider
**Purpose:** Range input with visual feedback

**Import:**
```tsx
import { Slider } from '@mrs/components';
```

**Key Features:**
- Continuous and discrete modes
- Marks and labels
- Range mode (two thumbs)
- Value label display (on, auto, off)
- Vertical orientation support

**Example:**
```tsx
const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={(e, newValue) => setValue(newValue)}
  min={0}
  max={100}
  valueLabelDisplay="auto"
  marks={[
    { value: 0, label: '0' },
    { value: 50, label: '50' },
    { value: 100, label: '100' }
  ]}
/>
```

#### Rating
**Purpose:** Star rating input and display

**Import:**
```tsx
import { Rating } from '@mrs/components';
```

**Key Features:**
- Half-star precision
- Custom max value
- Read-only mode
- Custom icons support
- Uses `componentTokens.rating` for styling

**Example:**
```tsx
const [value, setValue] = useState(4);

<Rating
  value={value}
  onChange={(e, newValue) => setValue(newValue)}
  precision={0.5}
  max={5}
/>
```

---

### 5. Action Components

#### Fab (Floating Action Button)
**Purpose:** Primary floating action button

**Import:**
```tsx
import { Fab, Icon } from '@mrs/components';
```

**Key Features:**
- Circular and extended variants
- Three sizes (small, medium, large)
- Color variants
- Icon support

**Example:**
```tsx
<Fab color="primary" aria-label="add">
  <Icon name="AddRounded" />
</Fab>

<Fab variant="extended" color="primary">
  <Icon name="AddRounded" sx={{ mr: 1 }} />
  Add Item
</Fab>
```

#### ButtonGroup
**Purpose:** Group related buttons together

**Import:**
```tsx
import { ButtonGroup, Button } from '@mrs/components';
```

**Key Features:**
- Horizontal and vertical orientation
- All button variants (contained, outlined, text)
- Size variants
- Full-width option

**Example:**
```tsx
<ButtonGroup variant="contained" color="primary">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<ButtonGroup orientation="vertical" variant="outlined">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>
```

---

### 6. List Enhancement Components

#### ListItemButton / ListItemIcon / ListItemText / ListItemAvatar
**Purpose:** Enhanced list item components with specific slots

**Import:**
```tsx
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Icon
} from '@mrs/components';
```

**Key Features:**
- Clickable list items with hover/selected states
- Consistent icon spacing
- Primary and secondary text
- Avatar integration

**Example:**
```tsx
<List>
  <ListItemButton selected>
    <ListItemAvatar>
      <Avatar>JD</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="John Doe"
      secondary="Software Engineer"
    />
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon>
      <Icon name="InboxRounded" />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItemButton>
</List>
```

---

## Design Tokens

### New Tokens Added

#### semanticColors.action.hover
```typescript
action: {
  active: '#0000008f',
  selected: '#0000001f',
  hover: '#0000000a', // NEW in v0.3.0
}
```

#### typographyVariants.table.body
```typescript
table: {
  header: { ... },
  body: { // NEW in v0.3.0
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
  },
}
```

---

## Theme Overrides

All 15 new components have theme overrides in `src/theme/theme.ts`:

- **MuiFab** - Typography, elevation removed
- **MuiButtonGroup** - Elevation removed
- **MuiBreadcrumbs** - Typography styling
- **MuiSlider** - Primary color, thumb hover states
- **MuiGrid** - Default spacing (2)
- **MuiMenu/MenuItem/MenuList** - Border radius, padding, selected states
- **MuiTabs/Tab** - Indicator color, text transform, selected color
- **MuiDrawer** - Border radius removed
- **MuiTable/TableContainer/TableBody/TableRow/TableCell** - Typography, hover, selected, divider styling
- **MuiCardMedia** - Top border radius
- **MuiListItemButton/Icon/Text/Avatar** - Hover, selected states, spacing

---

## Migration Guide

### From v0.2.0 to v0.3.0

**No breaking changes!** All existing components remain unchanged.

**New Imports Available:**
```tsx
// Layout
import { Box, Stack, Container, Grid2 } from '@mrs/components';

// Navigation
import { Menu, MenuItem, MenuList, Tabs, Tab, Breadcrumbs, Drawer } from '@mrs/components';

// Data Display
import {
  Table, TableContainer, TableHead, TableBody, TableRow, TableCell,
  CardMedia
} from '@mrs/components';

// Input
import { Slider, Rating } from '@mrs/components';

// Actions
import { Fab, ButtonGroup } from '@mrs/components';

// List Enhancements
import {
  ListItemButton, ListItemIcon, ListItemText, ListItemAvatar
} from '@mrs/components';
```

**Enhanced Features:**
- Action hover states now available via `semanticColors.action.hover`
- Table body typography now configurable via `typographyVariants.table.body`

---

## Bundle Size Impact

**v0.2.0:** 702 KB (ESM) / 212 KB (gzipped)
**v0.3.0:** 1,058 KB (ESM) / 233 KB (gzipped) - Increase of 356 KB
**Reason:** 15 new components with full functionality

**Recommendation:** Use tree-shaking imports to minimize bundle size in production.

---

## Browser Support

Same as v0.2.0:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## Next Steps

### Recommended Usage Patterns

1. **Layout Foundation:** Use Box, Stack, Container, Grid2 for all layouts
2. **Navigation:** Implement Tabs for content switching, Menu for dropdowns, Drawer for mobile navigation
3. **Data Tables:** Use Table family for all tabular data
4. **Forms:** Add Slider and Rating to enhance form inputs

### Future Releases (v0.4.0+)

Potential additions:
- Pagination
- BottomNavigation (mobile)
- SpeedDial
- ImageList
- Transition components (Fade, Grow, Slide, Zoom)
- DataGrid (advanced table)

---

## Support & Feedback

For issues, questions, or feature requests:
- GitHub Issues: [Repository URL]
- Documentation: [Docs URL]
- Demos: Run `npm run dev` in the demo app

---

**Happy Building! 🚀**
