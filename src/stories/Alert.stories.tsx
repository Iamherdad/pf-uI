import React from "react";
// import "//at.alicdn.com/t/font_3442378_p8zrp7srwk.js";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "../components/Alert";
import "../styles/index.scss";
export default {
  title: "Example/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;
export const Alert警告提示: ComponentStory<typeof Alert> = () => (
  <>
    <Alert message="Info Text"></Alert>
  </>
);
export const 不同类型的Alert: ComponentStory<typeof Alert> = () => (
  <>
    <Alert message="1212" />
    <Alert message="1212" type="success" />
    <Alert message="1212" type="warning" />
    <Alert message="1212" type="error" />
  </>
);
export const 有描述的Alert: ComponentStory<typeof Alert> = () => (
  <>
    <Alert
      message="1212"
      description="Success Description Success Description Success Description"
    />

    <Alert
      message="1212"
      type="error"
      description="Success Description Success Description Success Description"
    />
  </>
);
export const 可关闭的Alert: ComponentStory<typeof Alert> = () => (
  <>
    <Alert message="1212" closable />
    <Alert message="1212" type="error" closable />
  </>
);
