/**
 * Table Component
 *
 * A Material UI Table component customized with design tokens from Figma.
 * A wrapper component that provides context for table sub-components.
 * Use with TableHead, TableBody, TableRow, and TableCell.
 */

import React from 'react';
import type { TableProps as MuiTableProps } from '@mui/material/Table';
import MuiTable from '@mui/material/Table';

export interface TableProps extends MuiTableProps {
  /**
   * The size of the table
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Allows Table to have scrollable content
   * @default 'normal'
   */
  padding?: 'normal' | 'checkbox' | 'none';
  /**
   * If true, the table header is sticky
   * @default false
   */
  stickyHeader?: boolean;
}

/**
 * Table component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 * Uses typographyVariants.table for typography tokens.
 *
 * @example
 * ```tsx
 * <TableContainer component={Paper}>
 *   <Table>
 *     <TableHead>
 *       <TableRow>
 *         <TableCell>Name</TableCell>
 *         <TableCell>Email</TableCell>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       <TableRow>
 *         <TableCell>John Doe</TableCell>
 *         <TableCell>john@example.com</TableCell>
 *       </TableRow>
 *     </TableBody>
 *   </Table>
 * </TableContainer>
 * ```
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTable ref={ref} {...props}>
        {children}
      </MuiTable>
    );
  }
);

Table.displayName = 'Table';

export default Table;
