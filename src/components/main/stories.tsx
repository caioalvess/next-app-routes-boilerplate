import { Meta, StoryObj } from "@storybook/react";

import Main from ".";

export default {
  title: "Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "React Avançado",
    description: "TypeScript, ReactJS, NextJS e Styled Components",
  },
} as Meta<typeof Main>;

type Story = StoryObj<typeof Main>;

export const Default: Story = {};

export const Basic: Story = {
  args: {
    title: "Title basic",
    description: "Description basic",
  },
};
