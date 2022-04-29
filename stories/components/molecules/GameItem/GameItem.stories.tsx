import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/complex/GameItem";

export default {
  title: 'Component/Complex/GameItem',
  component: GameItem
} as ComponentMeta<typeof GameItem>;

export const Default: ComponentStory<typeof GameItem> = (args: GameItemProps) => <GameItem {...args} />

Default.args = {
  thumbnail: "/img/Thumbnail-1.png",
  gameTitle: "Crash Bandicoot",
  gameDevice: "Mobile"
}
