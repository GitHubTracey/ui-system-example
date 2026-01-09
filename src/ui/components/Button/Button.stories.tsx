import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonVariant, type ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'destructive', 'ghost'] as ButtonVariant[],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'] as ButtonSize[],
        },
        isLoading: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        onClick: { action: 'pressed' },
    },
    args: {
        variant: 'primary',
        size: 'md',
        isLoading: false,
        isDisabled: false,
        children: 'Button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};