/**
 * TableCell Component
 *
 * A Material UI TableCell component customized with design tokens from Figma.
 * An individual cell in a table row.
 * Supports header and body variants, alignment, padding options.
 * Uses typographyVariants.table for text styling.
 */

import React from 'react';
import type { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';

export interface TableCellProps extends MuiTableCellProps {
  /**
   * The table cell variant
   * @default 'body'
   */
  variant?: 'head' | 'body' | 'footer';
  /**
   * Set the text-align on the table cell content
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  /**
   * Sets the padding applied to the cell
   * @default 'normal'
   */
  padding?: 'normal' | 'checkbox' | 'none';
  /**
   * The size of the table cell
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Set scope attribute for header cells
   */
  scope?: string;
  /**
   * Set the column span
   */
  colSpan?: number;
  /**
   * Set the row span
   */
  rowSpan?: number;
  /**
   * Specify the width of the cell
   */
  width?: string | number;
}

/**
 * TableCell component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 * Typography uses typographyVariants.table tokens
 *
 * @example
 * ```tsx
 * <TableHead>
 *   <TableRow>
 *     <TableCell>Name</TableCell>
 *     <TableCell align="right">Price</TableCell>
 *   </TableRow>
 * </TableHead>
 * ```
 *
 * @example
 * ```tsx
 * <TableBody>
 *   <TableRow>
 *     <TableCell component="th" scope="row">Product</TableCell>
 *     <TableCell align="right">$99.99</TableCell>
 *   </TableRow>
 * </TableBody>
 * ```
 *
 * @example
 * ```tsx
 * <TableRow>
 *   <TableCell padding="checkbox">
 *     <Checkbox checked={selected} />
 *   </TableCell>
 *   <TableCell>Item Name</TableCell>
 *   <TableCell colSpan={2}>Merged Cell</TableCell>
 * </TableRow>
 * ```
 */
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableCell ref={ref} {...props}>
        {children}
      </MuiTableCell>
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
