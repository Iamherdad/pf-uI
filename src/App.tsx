import React from "react";
import Button, { BtnType, BtnSize } from "./components/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
function App() {
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
      <Button btnType={BtnType.danger} size={BtnSize.large}>
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
        mode="vertical"
        defaultIndex={"2"}
        defaultOpenSubMenu={["4"]}
      >
        <MenuItem>54345</MenuItem>
        <MenuItem className="children">543</MenuItem>
        <MenuItem>453</MenuItem>
        <MenuItem disabled>453</MenuItem>
        <SubMenu title="submenu">
          <MenuItem>submenu1</MenuItem>
          <MenuItem>submenu2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
