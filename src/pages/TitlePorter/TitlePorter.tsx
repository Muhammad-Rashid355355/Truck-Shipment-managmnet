import {
  Table,
  Badge,
  Menu,
  Dropdown,
  Space,
  Button,
  Descriptions,
  Row,
  Col,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import ExpandableData from "../../components/ExpandableData/ExpandableData";
import TitlePorterFilter from "../../components/TitlePorterFilter/TitlePorterFilter";
import "../TitlePorter/TitlePorter.css";

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function TitlePorter() {
  const expandedRowRender = () => {
    const columns = [
      {
        key: "state",
        render: () => (
          <div style={{ width: "100%" }}>
            <Descriptions
              labelStyle={{
                color: "#332288",
                fontWeight: "bold",
              }}
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item
                style={{ width: 320 }}
                span={1}
                label="Tran Id"
              >
                Zhou Maomao
              </Descriptions.Item>
              <Descriptions.Item
                label="lienholder"
                style={{ width: 320 }}
                span={1}
              >
                181000
              </Descriptions.Item>
              <Descriptions.Item style={{ width: 320 }} label="Created by">
                Hangzhou, Zhejiang
              </Descriptions.Item>

              <Descriptions.Item
                label="Title type"
                style={{ width: 320 }}
                span={1}
              >
                empty
              </Descriptions.Item>
              <Descriptions.Item
                style={{ width: 320 }}
                span={1}
                label="Evidence Type"
              >
                No. 18, Wantang Road
              </Descriptions.Item>
              <Descriptions.Item
                label="Modified by"
                style={{ width: 320 }}
                span={1}
              >
                No. 18, Wantang Road
              </Descriptions.Item>
            </Descriptions>
          </div>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 1; ++i) {
      data.push({
        key: i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }
    return (
      <Table
        className="ExpandableTable"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const columns = [
    { title: "Submited Date", dataIndex: "submitedDate", key: "submitedDate" },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Accepted Date", dataIndex: "acceptedDate", key: "acceptedDate" },
    {
      title: "Completed Date",
      dataIndex: "completedDate",
      key: "completedDate",
    },
    {
      title: "Action an Offer",
      key: "actionOffer",
      render: () => (
        <Button
          style={{
            border: "1px solid #117733",
            borderRadius: "30px",
            height: 29,
            color: "#117733",
          }}
        >
          <Badge status="success" />
          Activate
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      submitedDate: "20/12/20",
      customerName: "Basanti",
      acceptedDate: "20/12/20",
      location: "India",
      completedDate: "20/12/20",
    },
    {
      key: 2,
      submitedDate: "20/12/20",
      customerName: "Basanti",
      acceptedDate: "20/12/20",
      location: "India",
      completedDate: "20/12/20",
    },
    {
      key: 3,
      submitedDate: "20/12/20",
      customerName: "Basanti",
      acceptedDate: "20/12/20",
      location: "India",
      completedDate: "20/12/20",
    },
    {
      key: 4,
      submitedDate: "20/12/20",
      customerName: "Sheela",
      acceptedDate: "20/12/20",
      location: "India",
      completedDate: "20/12/20",
    },
    {
      key: 5,
      submitedDate: "20/12/20",
      customerName: "Muni",
      acceptedDate: "20/12/20",
      location: "Badnam",
      completedDate: "20/12/20",
    },
    {
      key: 6,
      submitedDate: "20/12/20",
      customerName: "Gajni",
      acceptedDate: "20/12/20",
      location: "Jawani",
      completedDate: "20/12/20",
    },
  ];

  return (
    <div style={{ padding: "20px 25px 0px", display: "block" }}>
      <Table
        style={{ width: "100%" }}
        className="components-table-demo-nested TitlePorter"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
      />
    </div>
  );
}
export default TitlePorter;
