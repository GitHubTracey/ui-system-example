import * as React from 'react';
import type { RiderId } from '../../src/data/types';

type Option = { value: RiderId; label: string; isWheelchair?: boolean };
type Group = { label: string; options: Option[] };

export function RiderSelectGroupedExample({
  value,
  groups,
  onChange,
}: {
  value: RiderId | null;
  groups: Group[];
  onChange: (id: RiderId | null) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="riderSelect" className="text-sm text-fg-muted">
        Choose rider
      </label>
      <select
        id="riderSelect"
        className="rounded-md border border-border bg-bg px-2 py-1 text-sm"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value ? (e.target.value as RiderId) : null)}
      >
        <option value="">— Select —</option>
        {groups.map((g) => (
          <optgroup key={g.label} label={g.label}>
            {g.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
                {opt.isWheelchair ? ' ♿' : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
