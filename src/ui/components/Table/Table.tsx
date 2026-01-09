import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  tableCellStyles,
  tableHeaderCellStyles,
  tableRowStyles,
  tableStyles,
} from './Table.styles';

export type TableDensity = 'compact' | 'default';
export type SortDirection = 'asc' | 'desc' | 'none';
export type CellAlign = 'start' | 'center' | 'end';

type TableContextValue = {
  density: TableDensity;
};

const TableContext = React.createContext<TableContextValue | null>(null);

function useTableContext() {
  const ctx = React.useContext(TableContext);
  if (!ctx) throw new Error('Table components must be used within <Table />');
  return ctx;
}

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  density?: TableDensity;
  tableBorder?: 'none' | 'bordered';
};

function TableRoot({ density = 'default', tableBorder = 'none', className, ...props }: TableProps) {
  return (
    <TableContext.Provider value={{ density }}>
      <div className="w-full overflow-x-auto">
        <table className={cn(tableStyles({ tableBorder }), className)} {...props} />
      </div>
    </TableContext.Provider>
  );
}

/* Accessibility: captions should be present for data tables (even if visually hidden). */
export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement> & {
  visuallyHidden?: boolean;
};

function TableCaption({ visuallyHidden = false, className, ...props }: TableCaptionProps) {
  return (
    <caption
      className={cn('text-sm text-fg-muted caption-bottom', visuallyHidden && 'sr-only', className)}
      {...props}
    />
  );
}

type SectionProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableHeaderProps = SectionProps & {
  sticky?: boolean;
};

function TableHeader({ sticky = false, className, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn('border-b border-border text-fg-muted', className)}
      data-sticky={sticky ? 'true' : 'false'}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: SectionProps) {
  return <tbody className={cn('divide-y divide-border', className)} {...props} />;
}

function TableFooter({ className, ...props }: SectionProps) {
  return (
    <tfoot
      className={cn('border-t border-border text-fg-muted bg-surface-muted/30', className)}
      {...props}
    />
  );
}

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  isSelected?: boolean;
  interactive?: boolean;
};

function TableRow({ className, isSelected, interactive = true, ...props }: TableRowProps) {
  const { density } = useTableContext();
  return (
    <tr
      className={cn(tableRowStyles({ isSelected, density, interactive }), className)}
      {...props}
    />
  );
}

type TableCellProps = Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'align'> & {
  align?: CellAlign;
  muted?: boolean;
};

function TableCell({ className, align = 'start', muted = false, ...props }: TableCellProps) {
  return <td className={cn(tableCellStyles({ align, muted }), className)} {...props} />;
}

export type TableHeaderCellProps = Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'align'> & {
  align?: CellAlign;
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
};

/**
 * Header cells render <th scope="col">. If sortable, render an internal <button>
 * for a11y and consistent interaction. The table does not implement sorting.
 */
function TableHeaderCell({
  className,
  align = 'start',
  sortable,
  sortDirection = 'none',
  onSort,
  children,
  ...props
}: TableHeaderCellProps) {
  const isInteractive = Boolean(sortable && onSort);
  const ariaSort =
    sortDirection === 'none' ? undefined : sortDirection === 'asc' ? 'ascending' : 'descending';

  return (
    <th
      scope="col"
      aria-sort={ariaSort as React.AriaAttributes['aria-sort']}
      className={cn(tableHeaderCellStyles({ align, sortable: Boolean(sortable) }), className)}
      {...props}
    >
      {isInteractive ? (
        <button
          type="button"
          onClick={onSort}
          className={cn(
            'inline-flex items-center gap-2 rounded-md',
            'hover:text-fg',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus'
          )}
        >
          <span>{children}</span>
          <span className="text-xs text-fg-muted" aria-hidden="true">
            {sortDirection === 'asc' ? '▲' : sortDirection === 'desc' ? '▼' : ''}
          </span>
        </button>
      ) : (
        children
      )}
    </th>
  );
}

/**
 * Row actions convention:
 * - Right aligned
 * - Minimal width; buttons laid out with consistent spacing
 * - Intended for small "ghost" buttons / icon buttons
 */
export type TableActionsCellProps = Omit<TableCellProps, 'align'>;

function TableActionsCell({ className, ...props }: TableActionsCellProps) {
  return (
    <TableCell
      align="end"
      className={cn(
        'whitespace-nowrap',
        // space between action buttons
        '[&>*]:align-middle [&>*+*]:ml-2',
        className
      )}
      {...props}
    />
  );
}

/**
 * Namespaced export so consumers use:
 * <Table.Header />, <Table.Row />, etc.
 */
export const Table = Object.assign(TableRoot, {
  Caption: TableCaption,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Cell: TableCell,
  HeaderCell: TableHeaderCell,
  ActionsCell: TableActionsCell,
});
