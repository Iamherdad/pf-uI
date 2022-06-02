import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button, { BtnType, BtnSize } from "./components/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import Alert from "./components/Alert";
import Icon from "./components/Icon";
library.add(fas);
function App() {
  const close = () => {
    console.log(6666);
  };
  return (
    <div className="App">
      <Button
        btnType={BtnType.primary}
        size={BtnSize.large}
        className="555"
        onClick={() => console.log(123)}
      >
        111
      </Button>
      <Button btnType={BtnType.primary} size={BtnSize.small} disable>
        disable
      </Button>
      <Button btnType={BtnType.ghost}>ghost</Button>
      <Button btnType={BtnType.text}>text</Button>
      <Button btnType={BtnType.dashed} size={BtnSize.large}>
        dashed
      </Button>
      <Button>default</Button>
      <Button btnType={BtnType.danger}>Danger</Button>
      <Button
        btnType={BtnType.link}
        href="https://www.baidu.com"
        target="_blank"
      >
        baidu
      </Button>
      <Button shape="round">round</Button>
      <Button shape="round">circle</Button>
      <hr />
      <Menu
        className="parent"
        onSelect={(index) => console.log(index)}
        mode="horizontal"
        defaultIndex={"2"}
        defaultOpenSubMenu={["4"]}
      >
        <MenuItem>0</MenuItem>
        <MenuItem className="children">1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem disabled>3</MenuItem>
        <SubMenu title="submenu">
          <MenuItem>submenu1</MenuItem>
          <MenuItem>submenu2</MenuItem>
        </SubMenu>
      </Menu>
      <hr />
      <Alert
        message="alert"
        description="Success Description Success Description Success Description"
        closable
        onClose={close}
      />
      <Alert
        message="success"
        type="success"
        description="Success Description Success Description Success Description"
        closable
        onClose={close}
      />
      <Alert
        message="warning"
        type="warning"
        description="Success Description Success Description Success Description"
        closable
      />
      <Alert message="error" type="error" closable />

      <hr />
      <Icon icon="arrow-down" size="10x" theme="primary" />
      <Icon icon="9" size="10x" theme="warning" />
    </div>
  );
}

export default App;
