import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge,  } from './StatusBadge';
import type { StatusTone } from './types';

const meta: Meta<typeof StatusBadge> = {
    title: 'Components/StatusBadge',
    component: StatusBadge,
    tags: ['autodocs'],
    argTypes: {
        tone: {
            control: { type: 'select' },
            options: ['positive', 'warning', 'neutral', 'negative'] as StatusTone[],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
    },
    args: {
        tone: 'positive',
        label: 'On Time',
        size: 'md',
    },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Positive: Story = {
    args: {
        tone: 'positive',
        label: 'On Time',
    },
};

export const Warning: Story = {
    args: {
        tone: 'warning',
        label: '8 mins late',
    },
};

export const Neutral: Story = {
    args: {
        tone: 'neutral',
        label: 'Completed',
    },
};

export const Negative: Story = {
    args: {
        tone: 'negative',
        label: '19 mins late',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
    },
};
