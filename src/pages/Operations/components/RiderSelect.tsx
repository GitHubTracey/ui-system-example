import type { RiderId } from '../../../data/types';
import type { RiderOptionGroup } from '../../../data/selectors/riderOptions';

type Props = {
  selectedRiderId: RiderId | null;
  groups: RiderOptionGroup[];
  onChange: (id: RiderId | null) => void;
};

export function RiderSelect({ selectedRiderId, groups, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-fg-muted" htmlFor="riderSelect">
        Choose rider
      </label>

      <select
        id="riderSelect"
        className="rounded-md border border-border bg-bg px-2 py-1 text-sm text-fg"
        value={selectedRiderId ?? ''}
        onChange={(e) => onChange(e.target.value ? (e.target.value as RiderId) : null)}
      >
        <option value="">— Select —</option>

        {groups.map((g) => (
          <optgroup key={g.label} label={g.label}>
            {g.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
                {o.value ? ` ${o.value.slice(-8)} ` : ''}
                {o.isWheelchair ? ' ♿' : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
