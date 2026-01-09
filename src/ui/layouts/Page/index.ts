import { PageContent } from './PageContent';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { PageShell } from './PageShell';

export const Page = Object.assign(PageShell, {
  Content: PageContent,
  Footer: PageFooter,
  Header: PageHeader,
});
