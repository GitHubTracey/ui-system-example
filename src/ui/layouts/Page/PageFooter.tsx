import React from 'react';
export const PageFooter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <footer className={'mt-10 border-b border-surface bg-surface'}>
      <div className="mx-auto max-w-screen-2xl px-4 py-6 text-sm text-fg-inverse">{children}</div>
    </footer>
  );
};
