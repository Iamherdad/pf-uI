import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/index";
import "../styles/index.scss";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const 不同类型的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="dashed">dashed</Button>
    <Button btnType="default">default</Button>
    <Button btnType="ghost">ghost</Button>
    <Button btnType="link" href="https://storybook.js.org/" target="_blank">
      link
    </Button>
    <Button btnType="text">text</Button>
  </>
);
export const 不同尺寸的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button size="small">Size</Button>
    <Button size="large">Size</Button>
    <Button btnType="primary" size="small">
      primary
    </Button>
    <Button btnType="primary" size="large">
      primary
    </Button>
  </>
);
export const 禁用的Button: ComponentStory<typeof Button> = () => (
  <>
    <Button disable>Size</Button>
  </>
);
