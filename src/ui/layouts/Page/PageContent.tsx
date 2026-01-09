type PageContentProps = {
  children: React.ReactNode;
  id?: string;
  maxWidth?: 'full' | 'xl' | '2xl';
  padded?: boolean;
};

const maxWidthClass: Record<NonNullable<PageContentProps['maxWidth']>, string> = {
  full: 'max-w-none',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};

export const PageContent: React.FC<PageContentProps> = ({
  children,
  id,
  maxWidth = '2xl',
  padded = true,
}) => {
  return (
    // flex-1 is the critical piece for sticky footer behavior
    <main id={id} className="flex-1">
      <div className={`mx-auto ${maxWidthClass[maxWidth]} ${padded ? 'p-4' : ''}`}>{children}</div>
    </main>
  );
};
