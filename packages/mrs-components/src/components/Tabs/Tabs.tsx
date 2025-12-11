/**
 * Tabs Component
 *
 * A Material UI Tabs component customized with design tokens from Figma.
 * Displays a set of tabs with indicator animation and keyboard navigation.
 * Supports scrollable tabs, custom indicators, and vertical orientation.
 */

import React from 'react';
import type { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import MuiTabs from '@mui/material/Tabs';

export interface TabsProps extends Omit<MuiTabsProps, 'indicatorColor' | 'textColor'> {
  /**
   * The value of the currently selected Tab
   */
  value: number | string | false;
  /**
   * Callback fired when the value changes
   */
  onChange?: (event: React.SyntheticEvent, value: number | string) => void;
  /**
   * Determines the tabs layout
   * @default 'standard'
   */
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  /**
   * The orientation of the tabs
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * If true, the tabs are centered
   * @default false
   */
  centered?: boolean;
  /**
   * Determines behavior of scroll buttons when tabs overflow
   * @default 'auto'
   */
  scrollButtons?: 'auto' | true | false;
  /**
   * If true, the scroll buttons are visible when necessary
   * @default true
   */
  allowScrollButtonsMobile?: boolean;
  /**
   * Props applied to the TabIndicator element
   */
  TabIndicatorProps?: object;
  /**
   * Props applied to the TabScrollButton elements
   */
  TabScrollButtonProps?: object;
}

/**
 * Tabs component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 * The indicator color and text color inherit from the theme.
 *
 * @example
 * ```tsx
 * const [value, setValue] = useState(0);
 *
 * <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
 *   <Tab label="Tab 1" />
 *   <Tab label="Tab 2" />
 *   <Tab label="Tab 3" />
 * </Tabs>
 * ```
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange} variant="scrollable">
 *   <Tab label="Item One" />
 *   <Tab label="Item Two" />
 *   <Tab label="Item Three" />
 *   <Tab label="Item Four" />
 * </Tabs>
 * ```
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange} orientation="vertical">
 *   <Tab label="Profile" icon={<Icon name="PersonRounded" />} />
 *   <Tab label="Settings" icon={<Icon name="SettingsRounded" />} />
 * </Tabs>
 * ```
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTabs ref={ref} {...props}>
        {children}
      </MuiTabs>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
