import React, { ReactElement } from "react";
import Layout, { Content, Header, Footer } from "antd/lib/layout/layout";
import Sidebar from "./Sidebar/Sidebar";
import TitlePorter from "../../pages/TitlePorter/TitlePorter";
import TitlePorterFilter from "../TitlePorterFilter/TitlePorterFilter";
import HeaderItem from "../HeaderItem/HeaderItem";

function MainLayout(): ReactElement {
  return (
    <div>
      <Header style={{ backgroundColor: "white", padding: 0, height: 220 }}>
        <HeaderItem />
      </Header>
      <Layout>
        <Sidebar />
        <Layout
          className="site-layout"
          style={{ marginLeft: 200, backgroundColor: "white" }}
        >
          <Content style={{ margin: "2px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: "center",
              }}
            ></div>

            <TitlePorter />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            GovSoft ©2018 Created by Maxenius
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
