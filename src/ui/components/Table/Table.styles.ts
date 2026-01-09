import { cva } from 'class-variance-authority';

export const tableStyles = cva(['w-full', 'border-collapse', 'text-sm text-left text-fg'], {
  variants: {
    tableBorder: {
      none: '',
      bordered: 'border border-border rounded-lg',
    },
  },
  defaultVariants: {
    tableBorder: 'none',
  },
});

export const tableHeaderCellStyles = cva(
  [
    'px-3',
    'font-medium',
    'text-fg-muted',
    // If the parent <thead> has data-sticky=true, make header cells sticky
    "[thead[data-sticky='true']_&]:sticky [thead[data-sticky='true']_&]:top-0 [thead[data-sticky='true']_&]:z-10 [thead[data-sticky='true']_&]:bg-surface/95 [thead[data-sticky='true']_&]:backdrop-blur",
  ],
  {
    variants: {
      align: {
        start: 'text-left',
        center: 'text-center',
        end: 'text-right',
      },
      sortable: {
        true: 'cursor-pointer select-none',
        false: '',
      },
    },
    defaultVariants: {
      align: 'start',
      sortable: false,
    },
  }
);

export const tableRowStyles = cva(['align-middle', 'transition-colors'], {
  variants: {
    density: {
      compact: '[&>td]:py-2 [&>th]:py-2',
      default: '[&>td]:py-3 [&>th]:py-3',
    },
    isSelected: {
      true: 'bg-surface-muted',
      false: '',
    },
    interactive: {
      true: 'hover:bg-surface-muted',
      false: '',
    },
  },
  defaultVariants: {
    density: 'default',
    isSelected: false,
    interactive: true,
  },
});

export const tableCellStyles = cva(['px-3', 'whitespace-nowrap', 'text-fg-muted'], {
  variants: {
    align: {
      start: 'text-left',
      center: 'text-center',
      end: 'text-right',
    },
    muted: {
      true: 'text-fg-muted',
      false: '',
    },
  },
  defaultVariants: {
    align: 'start',
    muted: false,
  },
});
