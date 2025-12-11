/**
 * TableRow Component
 *
 * A Material UI TableRow component customized with design tokens from Figma.
 * Represents a row in a table.
 * Contains TableCell components and supports hover, selection states.
 */

import React from 'react';
import type { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import MuiTableRow from '@mui/material/TableRow';

export interface TableRowProps extends MuiTableRowProps {
  /**
   * If true, the table row will have hover state
   * @default false
   */
  hover?: boolean;
  /**
   * If true, the table row is selected
   * @default false
   */
  selected?: boolean;
  /**
   * The component used for the root node
   */
  component?: React.ElementType;
}

/**
 * TableRow component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <TableBody>
 *   <TableRow hover>
 *     <TableCell>Item 1</TableCell>
 *     <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow hover selected>
 *     <TableCell>Item 2</TableCell>
 *     <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </TableBody>
 * ```
 *
 * @example
 * ```tsx
 * <TableRow hover onClick={() => handleClick(row.id)}>
 *   <TableCell padding="checkbox">
 *     <Checkbox checked={isSelected} />
 *   </TableCell>
 *   <TableCell>{row.name}</TableCell>
 * </TableRow>
 * ```
 */
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableRow ref={ref} {...props}>
        {children}
      </MuiTableRow>
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
