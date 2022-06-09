import React, { ChangeEvent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import Alert from "./components/Alert";
import Icon from "./components/Icon";
import Input from "./components/Input/Input";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import Upload from "./components/Upload/index";
import Progress from "./components/Progress/index";
library.add(fas);
function App() {
  const close = () => {
    console.log(6666);
  };
  const getIptVal = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(123);
  };
  const list = ["lilei", "xiaoming", "zahngsan", "wangwu"];
  const handleFeach = (str: string) => {
    return list.filter((item) => item.includes(str));
  };
  const select = (item: any) => {
    console.log(item);
  };
  const renderOption = (option: string) => {
    return <h1>name:{option}</h1>;
  };
  const onProgress = (num: number, file: File) => {
    console.log(num);
  };
  const beforeUpload = (file: File) => {
    if (file.size / 1000 >= 3000) {
      alert("文件不能大于50kb");
      return false;
    }
    return true;
  };
  const uploadChange = (file: File) => {
    console.log(file);
  };
  const onSuccess = (data: any, file: File) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Button
        btnType="primary"
        size="large"
        className="555"
        onClick={() => console.log(123)}
      >
        111
      </Button>
      <Button btnType="primary" size="small" disable>
        disable
      </Button>
      <Button btnType="ghost">ghost</Button>
      <Button btnType="text">text</Button>
      <Button btnType="dashed" size="large">
        dashed
      </Button>
      <Button>default</Button>
      <Button btnType="danger">Danger</Button>
      <Button btnType="link" href="https://www.baidu.com" target="_blank">
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

      <hr />
      <div style={{ width: "300px" }}>
        <Input
          placeholder="默认的"
          defaultValue="123456"
          onChange={(e: ChangeEvent<HTMLInputElement>) => getIptVal(e)}
        />
        <Input placeholder="禁用的" disabled />
        <Input placeholder="带图标的" icon="search" />
        <Input
          placeholder="带前缀的"
          prepand={<Icon icon="9" theme="warning" />}
        />
        <Input placeholder="带后缀的" append=".com" />
        <Input placeholder="带前后缀的" prepand="http" append=".com" />
      </div>
      <hr />
      <AutoComplete
        fetchSuggestions={handleFeach}
        onSelect={select}
        renderOption={renderOption}
      ></AutoComplete>
      <hr />
      <div style={{ height: "50px" }}></div>
      <Upload
        action="https://jsonplaceholder.typicode.com/posts"
        onProgress={onProgress}
        beforeUpload={beforeUpload}
        onChange={uploadChange}
        onsuccess={onSuccess}
        name="lpf"
        headers={{ type: "hahaa" }}
        multiple
        drag={true}
      ></Upload>
      <hr />
      <Progress percent={50} />
    </div>
  );
}

export default App;
