import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  UserOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import "./index.css";
import ListAdmin from "./ListAdmin/index.js";
import logo from "../../Image/rlpTLlbMzTNYuZGGCVYM.png";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("1");

  const user_credent = JSON.parse(localStorage.getItem("user_credent"));

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{ textAlign: "center", marginTop: 20, marginBottom: 15 }}
          className="logo"
        >
          <Image src={logo} width={50} height={50} alt="" preview={false} />
          <Typography.Title style={{ color: "white", marginTop: 10 }} level={5}>
            Yours Dresscode
          </Typography.Title>
        </div>
        <Menu
          onClick={(val) => setKey(val.key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[key]}
          items={[
            {
              key: "1",
              icon: <HomeFilled />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <ProjectOutlined />,
              label: "Produk",
            },
            user_credent.role_id === "3" && {
              key: "3",
              icon: <UserOutlined />,
              label: "Data Admin",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {key === "3" && <ListAdmin />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
