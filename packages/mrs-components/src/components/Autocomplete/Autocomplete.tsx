/**
 * Autocomplete Component
 *
 * A Material UI Autocomplete component customized with design tokens from Figma.
 * Supports single and multiple selection modes
 * Supports all variants: standard, filled, outlined
 * Supports all sizes: small, medium
 * Supports all colors: default, primary, secondary, error, warning, info, success
 * Supports all states: enabled, disabled, error, focused, hovered
 */

import MuiAutocomplete, {
  type AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> extends Omit<
    MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput' | 'color' | 'size'
  > {
  /**
   * Custom renderInput function (optional, will use default if label is provided)
   */
  renderInput?: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['renderInput'];
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
  /**
   * The label for the input
   */
  label?: string;
  /**
   * The placeholder text
   */
  placeholder?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * If true, the input will indicate an error
   */
  error?: boolean;
  /**
   * If true, the input will be disabled
   */
  disabled?: boolean;
}

/**
 * Styled Autocomplete component that uses design tokens from theme
 * All styling is handled via the theme configuration in src/theme/createTheme.ts
 */
const StyledAutocomplete = styled(MuiAutocomplete)<
  MuiAutocompleteProps<any, boolean | undefined, boolean | undefined, boolean | undefined>
>(() => ({
  // Additional customizations can be added here if needed
  // Most styling is handled via theme.components.MuiAutocomplete
}));

/**
 * Autocomplete component
 *
 * A text input with autocomplete suggestions. Supports single and multiple selection.
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * // Single selection with label
 * <Autocomplete
 *   options={options}
 *   getOptionLabel={(option) => option.label}
 *   label="Search"
 *   variant="outlined"
 *   color="primary"
 * />
 *
 * // Multiple selection
 * <Autocomplete
 *   multiple
 *   options={options}
 *   getOptionLabel={(option) => option.label}
 *   label="Select multiple"
 * />
 *
 * // With custom renderInput
 * <Autocomplete
 *   options={options}
 *   getOptionLabel={(option) => option.label}
 *   renderInput={(params) => <TextField {...params} label="Custom" />}
 * />
 * ```
 */
export function Autocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const {
    size = 'medium',
    color = 'primary',
    variant = 'outlined',
    label,
    placeholder,
    helperText,
    error,
    disabled,
    renderInput: renderInputProp,
    ...other
  } = props;

  // Map 'default' to 'primary' if needed (for backward compatibility)
  const muiColor = color === 'default' ? 'primary' : color;

  // Create renderInput function if label is provided and no custom renderInput
  const defaultRenderInput = (params: any) => {
    return (
      <TextField
        {...params}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        error={error}
        disabled={disabled}
        variant={variant}
        color={muiColor}
        size={size}
      />
    );
  };

  const renderInputToUse = renderInputProp || defaultRenderInput;

  return (
    <StyledAutocomplete
      size={size}
      renderInput={renderInputToUse}
      {...(error !== undefined ? { error } : {})}
      {...(disabled !== undefined ? { disabled } : {})}
      {...(other as any)}
    />
  );
}

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;

