// OperationsToolbar.tsx
import type { Dispatch } from 'react';

import { Button } from '../../ui/components/';
import type { Rider } from '../../data/types';

import { AddRiderDialog, RiderSelect } from './index';

import { selectRiderOptionGroups } from '../../data/selectors/riderOptions';
import type { AppAction } from '../../state/appState';

type RiderGroups = ReturnType<typeof selectRiderOptionGroups>;

type AppDispatch = Dispatch<AppAction>;

type OperationsToolbarProps = {
  selectedRiderId: string | null;
  selectedRiderName: string | null;
  riderGroups: RiderGroups;

  onSelectRider: (id: string | null) => void;
  onClearSelection: () => void;

  dispatch: AppDispatch;
};

export function OperationsToolbar({
  selectedRiderId,
  selectedRiderName,
  riderGroups,
  onSelectRider,
  onClearSelection,
  dispatch,
}: OperationsToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-fg-muted">Selected rider:</span>
        <span className="text-sm">{selectedRiderName ?? 'None'}</span>

        {selectedRiderId ? (
          <Button variant="link" size="sm" onClick={onClearSelection}>
            Clear
          </Button>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <RiderSelect
          selectedRiderId={selectedRiderId}
          groups={riderGroups}
          onChange={(id) => onSelectRider(id)}
        />

        <AddRiderDialog
          onSubmit={({ name, mobilityRequirement }, autoSelect) => {
            const rider: Rider = {
              id: crypto.randomUUID(),
              name,
              mobilityRequirement,
            };

            dispatch({
              type: 'RIDER_ADD',
              payload: { rider, autoSelect },
            });
          }}
        />
      </div>
    </div>
  );
}
