import React, { useState } from "react";
import { UserOutlined, ScheduleOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Agenda", "1", <ScheduleOutlined />),
  getItem("Usuario", "sub1", <UserOutlined />, [getItem("Perfil", "2")]),
];

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "#ffffff4c",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ background: "#f0f2f5" }}>
        <Content style={{ margin: "10px" }}>
          <div style={{ minHeight: "100%", background: "#fff" }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          JWSystem ©2022 Criado por JWS
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
