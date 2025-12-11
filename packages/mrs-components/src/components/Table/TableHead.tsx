/**
 * TableHead Component
 *
 * A Material UI TableHead component customized with design tokens from Figma.
 * Wrapper for header rows in a table.
 * Contains TableRow components with header TableCell elements.
 */

import React from 'react';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';
import MuiTableHead from '@mui/material/TableHead';

export interface TableHeadProps extends MuiTableHeadProps {
  /**
   * The content of the table head, typically TableRow components
   */
  children?: React.ReactNode;
}

/**
 * TableHead component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>ID</TableCell>
 *       <TableCell>Name</TableCell>
 *       <TableCell align="right">Price</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     {/* body rows *\/}
 *   </TableBody>
 * </Table>
 * ```
 */
export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableHead ref={ref} {...props}>
        {children}
      </MuiTableHead>
    );
  }
);

TableHead.displayName = 'TableHead';

export default TableHead;
