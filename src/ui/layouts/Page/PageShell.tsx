import React from 'react';

type PageShellProps = {
  children: React.ReactNode;
  maxWidth?: 'full' | 'xl' | '2xl';
  padded?: boolean;
  // for screen reader skip links
  skipToContent?: boolean;
  contentId?: string; // optional; if you want skip link here instead of header
};

export const PageShell: React.FC<PageShellProps> = ({
  children,
  skipToContent = false,
  contentId = 'main',
}) => {
  return (
    <div className="min-h-dvh flex flex-col bg-page text-fg">
      {skipToContent ? (
        <a
          href={`#${contentId}`}
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
      ) : null}
      {children}
    </div>
  );
};
