/**
 * Tab Component
 *
 * A Material UI Tab component customized with design tokens from Figma.
 * An individual tab within a Tabs component.
 * Supports icons, labels, and various states (selected, disabled, wrapped).
 */

import React from 'react';
import type { TabProps as MuiTabProps } from '@mui/material/Tab';
import MuiTab from '@mui/material/Tab';

export interface TabProps extends MuiTabProps {
  /**
   * The label content for the tab
   */
  label?: React.ReactNode;
  /**
   * The icon to display in the tab
   */
  icon?: string | React.ReactElement;
  /**
   * The position of the icon relative to the label
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /**
   * If true, the tab is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The value of the tab. If not provided, the index is used.
   */
  value?: number | string;
  /**
   * If true, the label will be wrapped on smaller screens
   * @default false
   */
  wrapped?: boolean;
  /**
   * The component used for the root node
   */
  component?: React.ElementType;
  /**
   * The URL to navigate to when the tab is clicked
   */
  href?: string;
}

/**
 * Tab component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange}>
 *   <Tab label="Home" />
 *   <Tab label="Profile" />
 *   <Tab label="Settings" />
 * </Tabs>
 * ```
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange}>
 *   <Tab icon={<Icon name="HomeRounded" />} label="Home" />
 *   <Tab icon={<Icon name="PersonRounded" />} label="Profile" />
 *   <Tab icon={<Icon name="SettingsRounded" />} label="Settings" disabled />
 * </Tabs>
 * ```
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange}>
 *   <Tab label="Page One" href="/page1" />
 *   <Tab label="Page Two" href="/page2" />
 * </Tabs>
 * ```
 */
export const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  return <MuiTab ref={ref} {...props} />;
});

Tab.displayName = 'Tab';

export default Tab;
