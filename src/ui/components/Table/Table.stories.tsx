import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, type TableDensity } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['compact', 'default'] as TableDensity[],
    },
  },
  args: {
    density: 'default',
    tableBorder: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

const BasicTable = ({ density, tableBorder } : { density?: TableDensity, tableBorder?: 'none' | 'bordered' }) => (
  <Table density={density} tableBorder={tableBorder}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Alice</Table.Cell>
        <Table.Cell>30</Table.Cell>
        <Table.Cell>New York</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob</Table.Cell>
        <Table.Cell>25</Table.Cell>
        <Table.Cell>Los Angeles</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charlie</Table.Cell>
        <Table.Cell>35</Table.Cell>
        <Table.Cell>Chicago</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Compact: Story = {
  render: () => <BasicTable density="compact" />,
};

export const BasicUsage: Story = {
  render: () => <BasicTable />,
};

export const BorderedTable: Story = {
  render: () => <BasicTable tableBorder="bordered" />,
};


export const AlignedCells: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell align="start">Left Aligned</Table.HeaderCell>
          <Table.HeaderCell align="center">Center Aligned</Table.HeaderCell>
          <Table.HeaderCell align="end">Right Aligned</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell align="start">Data 1</Table.Cell>
          <Table.Cell align="center">Data 2</Table.Cell>
          <Table.Cell align="end">Data 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const MutedCells: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Regular Cell</Table.Cell>
          <Table.Cell muted={true}>Muted Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Another Regular Cell</Table.Cell>
          <Table.Cell muted={true}>Another Muted Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const InteractiveRows: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row interactive={true}>
          <Table.Cell>Alice</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row interactive={true}>
          <Table.Cell>Bob</Table.Cell>
          <Table.Cell>User</Table.Cell>
        </Table.Row>
        <Table.Row interactive={true}>
          <Table.Cell>Charlie</Table.Cell>
          <Table.Cell>Moderator</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const SelectedRow: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row isSelected={true}>
          <Table.Cell>Item 1</Table.Cell>
          <Table.Cell>Selected</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Item 2</Table.Cell>
          <Table.Cell>Not Selected</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Item 3</Table.Cell>
          <Table.Cell>Not Selected</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};


