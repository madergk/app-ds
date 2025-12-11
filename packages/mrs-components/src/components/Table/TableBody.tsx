/**
 * TableBody Component
 *
 * A Material UI TableBody component customized with design tokens from Figma.
 * Wrapper for body rows in a table.
 * Contains TableRow components with data TableCell elements.
 */

import React from 'react';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';
import MuiTableBody from '@mui/material/TableBody';

export interface TableBodyProps extends MuiTableBodyProps {
  /**
   * The content of the table body, typically TableRow components
   */
  children?: React.ReactNode;
}

/**
 * TableBody component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Product</TableCell>
 *       <TableCell>Price</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Product 1</TableCell>
 *       <TableCell>$10.00</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableCell>Product 2</TableCell>
 *       <TableCell>$20.00</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableBody ref={ref} {...props}>
        {children}
      </MuiTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

export default TableBody;
