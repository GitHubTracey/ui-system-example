import * as React from 'react';
import { Table, ActionCell, Button, StatusBadge } from '../../src/ui/components';

type Row = { id: string; name: string; status: 'ok' | 'warning' | 'bad' };

const rows: Row[] = [
  { id: 'a', name: 'Route A', status: 'ok' },
  { id: 'b', name: 'Route B', status: 'warning' },
  { id: 'c', name: 'Route C', status: 'bad' },
];

function toneFor(status: Row['status']) {
  if (status === 'bad') return 'negative';
  if (status === 'warning') return 'warning';
  return 'positive';
}

export function TableSelectionExample() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((row) => {
          const isSelected = selectedId === row.id;
          const tone = toneFor(row.status);

          return (
            <Table.Row key={row.id} isSelected={isSelected} interactive>
              <Table.Cell>
                <StatusBadge tone={tone} label={row.status} />
              </Table.Cell>

              <Table.Cell>
                <button
                  type="button"
                  className="text-left hover:underline"
                  onClick={() => setSelectedId(row.id)}
                >
                  {row.name}
                </button>
              </Table.Cell>

              <Table.Cell>
                <ActionCell>
                  {isSelected ? (
                    <Button variant="secondary" size="sm" onClick={() => setSelectedId(null)}>
                      Clear
                    </Button>
                  ) : (
                    <Button variant="primary" size="sm" onClick={() => setSelectedId(row.id)}>
                      Select
                    </Button>
                  )}
                </ActionCell>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
