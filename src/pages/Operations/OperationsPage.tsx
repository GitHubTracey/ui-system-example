import { useState } from 'react';

import { Button, StatusBadge } from '../../ui/components/';
import { Page } from '../../ui/layouts/';
import { setTheme, getCurrentTheme } from '../../setTheme';

import { useOperationsModel } from './useOperationsModel';

const themeButtonStates = ['light', 'dark', 'purplegold'] as const;

import { OperationsToolbar } from './OperationsToolbar';
import { OperationsRoutesTable } from './OperationsRoutesTable';

export const OperationsPage = () => {
  const [themeButtonState, setThemeButtonState] = useState(() => {
    const current = getCurrentTheme();
    const idx = themeButtonStates.indexOf(current);
    return idx >= 0 ? idx : 0;
  });

  const {
    routes,
    selectedRiderId,
    selectedRider,
    selectedRiderHasWheelchair,
    riderGroups,
    ridersById,
    ridersByRouteId,
    isLoading,
    error,
    dispatch,
    selectRider,
  } = useOperationsModel();

  if (isLoading) return <StatusBadge tone="neutral" label="Loading routes…" />;
  if (error) return <StatusBadge tone="negative" label="Failed to load routes." />;
  if (routes.length === 0) return <StatusBadge tone="neutral" label="No routes available" />;

  const ThemeButton = (
    <div className="flex justify-end mb-4">
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          const nextIndex =
            themeButtonState === themeButtonStates.length - 1 ? 0 : themeButtonState + 1;
          setThemeButtonState(nextIndex);
          setTheme(themeButtonStates[nextIndex]);
        }}
      >
        Theme: {themeButtonStates[themeButtonState]}
      </Button>
    </div>
  );

  return (
    <Page>
      <Page.Header title="Operations Panel" actions={ThemeButton} sticky />

      <Page.Content maxWidth="full">
        <OperationsToolbar
          selectedRiderId={selectedRiderId}
          selectedRiderName={selectedRider?.name ?? null}
          riderGroups={riderGroups}
          onClearSelection={() => selectRider(null)}
          onSelectRider={(id) => selectRider(id)}
          dispatch={dispatch}
        />

        <OperationsRoutesTable
          routes={routes}
          ridersById={ridersById}
          ridersByRouteId={ridersByRouteId}
          selectedRider={selectedRider}
          selectedRiderHasWheelchair={selectedRiderHasWheelchair}
          dispatch={dispatch}
        />
      </Page.Content>

      <Page.Footer>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Tracey Sum</span>

          <span className="text-fg-muted">
            Thoughtful design systems empower teams to ship with confidence.
          </span>

          <a
            href="https://www.linkedin.com/in/tracey-sum-97490650/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </Page.Footer>
    </Page>
  );
};
