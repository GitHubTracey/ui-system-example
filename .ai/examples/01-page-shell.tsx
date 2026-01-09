import * as React from 'react';
import { Page } from '../../src/ui/layouts';
import { Button } from '../../src/ui/components';

export function PageShellExample() {
  const actions = (
    <div className="flex justify-end">
      <Button variant="primary" size="sm">
        Primary Action
      </Button>
    </div>
  );

  return (
    <Page>
      <Page.Header title="Operations Panel" actions={actions} sticky />
      <Page.Content maxWidth="full">
        <div className="rounded-lg border border-border bg-bg p-4 text-fg">Content goes here.</div>
      </Page.Content>
      <Page.Footer>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Tracey Sum</span>
          <span className="text-fg-muted">Thoughtful design systems enable teams to ship.</span>
          <a className="text-fg-muted hover:underline" href="#" onClick={(e) => e.preventDefault()}>
            Link
          </a>
        </div>
      </Page.Footer>
    </Page>
  );
}
