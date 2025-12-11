/**
 * MRS Design System
 *
 * Main entry point for the MRS Design System library
 * This file exports all public APIs including theme, components, and utilities
 */

// Theme exports
export { theme } from './theme';
export type { AppTheme } from './theme';

// Design token exports
export {
  primitiveColors,
  primitiveTypography,
  primitiveSpacing,
  primitiveRadius,
  primitiveBreakpoints,
  primitiveZIndex,
  primitiveTransitions,
  semanticColors,
  typographyVariants,
  componentTokens,
  libraryTokens,
  tokenConnections,
} from './theme/designTokens';

// Color utility exports
export { hexToRgba, opacityValues } from './theme/colorUtils';
export type { OpacityValue } from './theme/colorUtils';

// Token type exports
export type {
  PrimitiveColors,
  SemanticColors,
  TypographyVariants,
  ComponentTokens,
  LibraryTokens,
  PrimitiveZIndex,
  PrimitiveTransitions,
} from './theme/designTokens';

// ============================================================================
// Component Exports
// ============================================================================

// Form Controls
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { ButtonGroup } from './components/ButtonGroup';
export type { ButtonGroupProps } from './components/ButtonGroup';

export { Fab } from './components/Fab';
export type { FabProps } from './components/Fab';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Radio } from './components/Radio';
export type { RadioProps } from './components/Radio';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Select } from './components/Select';
export type { SelectProps } from './components/Select';

export { Autocomplete } from './components/Autocomplete';
export type { AutocompleteProps } from './components/Autocomplete';

export { Slider } from './components/Slider';
export type { SliderProps } from './components/Slider';

// Form Inputs
export { TextField } from './components/TextField';
export type { TextFieldProps } from './components/TextField';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { OutlinedInput } from './components/OutlinedInput';
export type { OutlinedInputProps } from './components/OutlinedInput';

export { FilledInput } from './components/FilledInput';
export type { FilledInputProps } from './components/FilledInput';

export { InputBase } from './components/InputBase';
export type { InputBaseProps } from './components/InputBase';

export { InputAdornment } from './components/InputAdornment';
export type { InputAdornmentProps } from './components/InputAdornment';

// Form Controls
export { FormControl } from './components/FormControl';
export type { FormControlProps } from './components/FormControl';

export { FormLabel } from './components/FormLabel';
export type { FormLabelProps } from './components/FormLabel';

export { FormHelperText } from './components/FormHelperText';
export type { FormHelperTextProps } from './components/FormHelperText';

export { FormGroup } from './components/FormGroup';
export type { FormGroupProps } from './components/FormGroup';

export { FormControlLabel } from './components/FormControlLabel';
export type { FormControlLabelProps } from './components/FormControlLabel';

// Navigation & Progress
export { Stepper } from './components/Stepper';
export type { StepperProps, StepperStep } from './components/Stepper';

export { Tabs } from './components/Tabs';
export type { TabsProps } from './components/Tabs';

export { Tab } from './components/Tabs';
export type { TabProps } from './components/Tabs';

export { Breadcrumbs } from './components/Breadcrumbs';
export type { BreadcrumbsProps } from './components/Breadcrumbs';

export { LinearProgress } from './components/LinearProgress';
export type { LinearProgressProps } from './components/LinearProgress';

export { CircularProgress } from './components/CircularProgress';
export type { CircularProgressProps } from './components/CircularProgress';

// Typography & Content
export { Typography } from './components/Typography';
export type { TypographyProps } from './components/Typography';

export { Link } from './components/Link';
export type { LinkProps } from './components/Link';

// Layout Components
// Utility layout components (direct MUI exports)
export { default as Box } from '@mui/material/Box';
export type { BoxProps } from '@mui/material/Box';

export { default as Stack } from '@mui/material/Stack';
export type { StackProps } from '@mui/material/Stack';

export { default as Container } from '@mui/material/Container';
export type { ContainerProps } from '@mui/material/Container';

export { Grid2 } from './components/Grid2';
export type { Grid2Props } from './components/Grid2';

export { Paper } from './components/Paper';
export type { PaperProps } from './components/Paper';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { CardHeader } from './components/CardHeader';
export type { CardHeaderProps } from './components/CardHeader';

export { CardContent } from './components/CardContent';
export type { CardContentProps } from './components/CardContent';

export { CardActions } from './components/CardActions';
export type { CardActionsProps } from './components/CardActions';

export { CardMedia } from './components/Card';
export type { CardMediaProps } from './components/Card';

export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

export { List } from './components/List';
export type { ListProps } from './components/List';

export { ListItem } from './components/ListItem';
export type { ListItemProps } from './components/ListItem';

export { ListItemButton } from './components/ListItemButton';
export type { ListItemButtonProps } from './components/ListItemButton';

export { ListItemIcon } from './components/ListItemIcon';
export type { ListItemIconProps } from './components/ListItemIcon';

export { ListItemText } from './components/ListItemText';
export type { ListItemTextProps } from './components/ListItemText';

export { ListItemAvatar } from './components/ListItemAvatar';
export type { ListItemAvatarProps } from './components/ListItemAvatar';

// Data Display
export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export { Chip } from './components/Chip';
export type { ChipProps } from './components/Chip';

export { Rating } from './components/Rating';
export type { RatingProps } from './components/Rating';

// Table Components
export { Table } from './components/Table';
export type { TableProps } from './components/Table';

export { TableContainer } from './components/Table';
export type { TableContainerProps } from './components/Table';

export { TableHead } from './components/Table';
export type { TableHeadProps } from './components/Table';

export { TableBody } from './components/Table';
export type { TableBodyProps } from './components/Table';

export { TableRow } from './components/Table';
export type { TableRowProps } from './components/Table';

export { TableCell } from './components/Table';
export type { TableCellProps } from './components/Table';

// Feedback & Overlay
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Snackbar } from './components/Snackbar';
export type { SnackbarProps } from './components/Snackbar';

export { Backdrop } from './components/Backdrop';
export type { BackdropProps } from './components/Backdrop';

export { Skeleton } from './components/Skeleton';
export type { SkeletonProps } from './components/Skeleton';

export { Accordion } from './components/Accordion';
export type { AccordionProps } from './components/Accordion';

export { AccordionGroup } from './components/AccordionGroup';
export type { AccordionGroupProps, AccordionItem } from './components/AccordionGroup';

export { Dialog } from './components/Dialog';
export type { DialogProps } from './components/Dialog';

export { DialogTitle } from './components/DialogTitle';
export type { DialogTitleProps } from './components/DialogTitle';

export { DialogContent } from './components/DialogContent';
export type { DialogContentProps } from './components/DialogContent';

export { DialogActions } from './components/DialogActions';
export type { DialogActionsProps } from './components/DialogActions';

export { Drawer } from './components/Drawer';
export type { DrawerProps } from './components/Drawer';

export { Menu } from './components/Menu';
export type { MenuProps } from './components/Menu';

export { MenuItem } from './components/Menu';
export type { MenuItemProps } from './components/Menu';

export { MenuList } from './components/Menu';
export type { MenuListProps } from './components/Menu';

// App Structure
export { AppBar } from './components/AppBar';
export type { AppBarProps } from './components/AppBar';

// Icons & Actions
export { Icon } from './components/Icon';
export type { IconProps, IconName } from './components/Icon';

export { IconButton } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';

// File Upload
export { FileUpload } from './components/FileUpload';
export type { FileUploadProps, FileUploadFile } from './components/FileUpload';
