/**
 * Slider Component
 *
 * A Material UI Slider component customized with design tokens from Figma.
 * Allows users to select a value or range from a continuous or discrete set.
 * Supports marks, steps, value labels, and range mode.
 */

import React from 'react';
import type { SliderProps as MuiSliderProps } from '@mui/material/Slider';
import MuiSlider from '@mui/material/Slider';

export interface SliderProps extends Omit<MuiSliderProps, 'color'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';
  /**
   * The slider value. For range sliders, provide an array with two values.
   */
  value?: number | number[];
  /**
   * Callback function fired when the slider value changes
   */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  /**
   * The minimum allowed value
   * @default 0
   */
  min?: number;
  /**
   * The maximum allowed value
   * @default 100
   */
  max?: number;
  /**
   * The granularity with which the slider can step through values
   * @default 1
   */
  step?: number | null;
  /**
   * Marks indicate predetermined values to which the user can move the slider
   * @default false
   */
  marks?: boolean | Array<{ value: number; label?: React.ReactNode }>;
  /**
   * If true, the slider will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The size of the slider
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The slider orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Controls when the value label is displayed
   * @default 'off'
   */
  valueLabelDisplay?: 'on' | 'auto' | 'off';
  /**
   * The format function for the value label
   */
  valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);
}

/**
 * Slider component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Slider
 *   value={50}
 *   onChange={(event, value) => setValue(value)}
 *   min={0}
 *   max={100}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Slider
 *   value={[20, 80]}
 *   onChange={(event, value) => setRange(value)}
 *   valueLabelDisplay="auto"
 *   marks
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Slider
 *   value={30}
 *   marks={[
 *     { value: 0, label: '0°C' },
 *     { value: 25, label: '25°C' },
 *     { value: 50, label: '50°C' },
 *     { value: 100, label: '100°C' },
 *   ]}
 *   step={10}
 * />
 * ```
 */
export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (props, ref) => {
    return <MuiSlider ref={ref} {...props} />;
  }
);

Slider.displayName = 'Slider';

export default Slider;
