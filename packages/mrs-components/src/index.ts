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

export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

export { List } from './components/List';
export type { ListProps } from './components/List';

export { ListItem } from './components/ListItem';
export type { ListItemProps } from './components/ListItem';

// Data Display
export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export { Chip } from './components/Chip';
export type { ChipProps } from './components/Chip';

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
