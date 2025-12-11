/**
 * TableContainer Component
 *
 * A Material UI TableContainer component customized with design tokens from Figma.
 * A wrapper that handles overflow scrolling for tables.
 * Typically wraps a Table component and provides Paper-like container.
 */

import React from 'react';
import type { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';
import MuiTableContainer from '@mui/material/TableContainer';

export interface TableContainerProps extends MuiTableContainerProps {
  /**
   * The component used for the root node
   * @default 'div'
   */
  component?: React.ElementType;
}

/**
 * TableContainer component
 *
 * All styling is handled via the theme configuration in src/theme/theme.ts
 *
 * @example
 * ```tsx
 * <TableContainer>
 *   <Table>
 *     <TableHead>
 *       <TableRow>
 *         <TableCell>Header</TableCell>
 *       </TableRow>
 *     </TableHead>
 *   </Table>
 * </TableContainer>
 * ```
 *
 * @example
 * ```tsx
 * <TableContainer component={Paper}>
 *   <Table stickyHeader>
 *     {/* table content *\/}
 *   </Table>
 * </TableContainer>
 * ```
 */
export const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableContainer ref={ref} {...props}>
        {children}
      </MuiTableContainer>
    );
  }
);

TableContainer.displayName = 'TableContainer';

export default TableContainer;
