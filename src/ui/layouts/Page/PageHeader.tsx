import React from 'react';

type PageHeaderProps = {
  brand?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  menu?: React.ReactNode;
  sticky?: boolean;
  contentId?: string; // used by a skip link if you want it here
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  brand,
  title,
  subtitle,
  actions,
  menu,
  sticky = false,
}) => {
  return (
    <header
      className={['border-b border-border bg-surface', sticky ? 'sticky top-0 z-40' : ''].join(' ')}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 items-center gap-4">
          {brand ? <div className="shrink-0">{brand}</div> : null}

          {title || subtitle ? (
            <div className="min-w-0">
              {title ? <div className="truncate text-fg-inverse font-semibold">{title}</div> : null}
              {subtitle ? <div className="truncate text-sm text-text-muted">{subtitle}</div> : null}
            </div>
          ) : null}
        </div>

        {actions || menu ? (
          <div className="flex shrink-0 items-center gap-2">
            {actions}
            {menu}
          </div>
        ) : null}
      </div>
    </header>
  );
};
