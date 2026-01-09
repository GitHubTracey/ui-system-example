import * as React from 'react';
import type { MobilityRequirement } from '../../src/data/types';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../../src/ui/components/Dialog/Dialog';
import { Button } from '../../src/ui/components';
import { TextField, CheckboxField, RadioGroupField } from '../../src/ui/components/Form';

export function AddRiderDialogExample() {
  const [name, setName] = React.useState('');
  const [mobility, setMobility] = React.useState<MobilityRequirement>('standard');
  const [autoSelect, setAutoSelect] = React.useState(true);

  const canSubmit = name.trim().length > 0;

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setName('');
          setMobility('standard');
          setAutoSelect(true);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          + Add rider
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Add rider</DialogTitle>
        <DialogDescription>Create a new rider and add them to your list.</DialogDescription>

        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!canSubmit) return;

            // Example submit hook:
            // onSubmit({ name: name.trim(), mobilityRequirement: mobility, autoSelect });

            // Close by clicking a DialogClose, or switch to controlled open if needed.
          }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />

          <RadioGroupField<MobilityRequirement>
            label="Mobility requirement"
            value={mobility}
            onValueChange={setMobility}
            options={[
              { label: 'Standard', value: 'standard' },
              { label: 'Wheelchair', value: 'wheelchair' },
            ]}
          />

          <CheckboxField
            label="Select rider after adding"
            checked={autoSelect}
            onChange={(e) => setAutoSelect(e.currentTarget.checked)}
          />

          <div className="mt-2 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="secondary" size="sm" type="button">
                Cancel
              </Button>
            </DialogClose>

            {/* In production, wrap this with DialogClose OR switch to controlled open and setOpen(false) on submit */}
            <Button variant="primary" size="sm" type="submit" isDisabled={!canSubmit}>
              Add rider
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
