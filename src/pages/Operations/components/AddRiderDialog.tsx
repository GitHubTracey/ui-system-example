'use client';

import * as React from 'react';
import type { MobilityRequirement, Rider } from '../../../data/types';
import { Button } from '../../../ui/components/';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../../../ui/components/Dialog/Dialog';
import { TextField, CheckboxField, RadioGroupField } from '../../../ui/components/Form';

type AddRiderDialogProps = {
  onSubmit: (rider: Omit<Rider, 'id'>, autoSelect: boolean) => void;
};

export function AddRiderDialog({ onSubmit }: AddRiderDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [mobilityRequirement, setMobilityRequirement] =
    React.useState<MobilityRequirement>('standard');
  const [autoSelect, setAutoSelect] = React.useState(true);

  const nameTrimmed = name.trim();
  const canSubmit = nameTrimmed.length > 0;

  function resetForm() {
    setName('');
    setMobilityRequirement('standard');
    setAutoSelect(true);
  }

  // Ensure the form resets whenever the dialog transitions to closed,
  // regardless of whether it was closed via Cancel, Escape, outside click, or submit.
  React.useEffect(() => {
    if (!open) resetForm();
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          + Add rider
        </Button>
      </DialogTrigger>

      {open ? (
        <DialogContent>
          <DialogTitle>Add rider</DialogTitle>
          <DialogDescription>Create a new rider and add them to your list.</DialogDescription>

          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!canSubmit) return;

              onSubmit(
                {
                  name: nameTrimmed,
                  mobilityRequirement,
                },
                autoSelect
              );

              // Close the dialog; the effect above will reset the form.
              setOpen(false);
            }}
          >
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="e.g., Jordan"
              required
              description="Required"
              autoFocus
              autoComplete="off"
              name="riderName"
            />

            <RadioGroupField<MobilityRequirement>
              label="Mobility requirement"
              value={mobilityRequirement}
              onValueChange={setMobilityRequirement}
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

              {/* Do NOT wrap the submit button in DialogClose (can cancel submission). */}
              <Button variant="primary" size="sm" type="submit" isDisabled={!canSubmit}>
                Add rider
              </Button>
            </div>
          </form>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
