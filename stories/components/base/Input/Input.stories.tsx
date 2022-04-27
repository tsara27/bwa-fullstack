import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/base/Input";

export default {
  title: 'Component/Base/Input',
  component: Input
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />

Default.args = {
  label: "Full name"
}
