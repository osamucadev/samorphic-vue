import type { Meta, StoryObj } from '@storybook/vue3';
import NeButton from '../components/NeButton.vue';

const meta: Meta<typeof NeButton> = {
  title: 'Components/NeButton',
  component: NeButton,
  tags: ['autodocs'],
  args: {
    default: 'Click Me',
  },
};

export default meta;

type Story = StoryObj<typeof NeButton>;

export const Primary: Story = {
  args: {
    default: 'Click Me',
  },
};
