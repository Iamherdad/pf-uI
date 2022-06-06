import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { BtnSize, BtnType } from "../components/Button/index";
import "../styles/index.scss";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const 不同类型的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button btnType={BtnType.primary}>primary</Button>
    <Button btnType={BtnType.danger}>danger</Button>
    <Button btnType={BtnType.dashed}>dashed</Button>
    <Button btnType={BtnType.default}>default</Button>
    <Button btnType={BtnType.ghost}>ghost</Button>
    <Button
      btnType={BtnType.link}
      href="https://storybook.js.org/"
      target="_blank"
    >
      link
    </Button>
    <Button btnType={BtnType.text}>text</Button>
  </>
);
export const 不同尺寸的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button size={BtnSize.small}>Size</Button>
    <Button size={BtnSize.large}>Size</Button>
    <Button btnType={BtnType.primary} size={BtnSize.small}>
      primary
    </Button>
    <Button btnType={BtnType.primary} size={BtnSize.large}>
      primary
    </Button>
  </>
);
export const 禁用的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button disable>Size</Button>
  </>
);
