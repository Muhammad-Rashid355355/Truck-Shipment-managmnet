/* eslint-disable quotes */
import React from "react";
import {
  SyncOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import TitlePorterFilter from "../TitlePorterFilter/TitlePorterFilter";
import { Button, Input } from "antd";

function HeaderItem() {
  return (
    <div style={{ padding: "20px 25px 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ display: "inline-flex" }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "38px",
              fontFamily: "Montserrat",
            }}
          >
            Title Porter
          </h2>
          <p
            style={{
              margin: "0 10px",
              color: "#332288",
              fontFamily: "Montserrat",
            }}
          >
            Data as of 12/11/2020 -- 01:12 AM
          </p>
          <span>
            <SyncOutlined
              spin
              style={{
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#332288",
              }}
            />
          </span>
        </span>
        <span style={{ display: "inline-flex", padding: 20 }}>
          <Button
            style={{
              border: "1px solid #332288",
              boxSizing: "border-box",
              borderRadius: "62px",
              color: "#332288",
            }}
          >
            Export CSV
          </Button>
          <Input
            style={{
              border: "1px solid #332288",
              borderRadius: "6px",
              backgroundColor: "#D9F2FF",
              margin: "0 10px",
              color: "#332288",
              maxHeight: 38,
            }}
            placeholder="Aspen Website"
          />
          <Button
            style={{
              width: 40,
              height: 40,
              border: "1px solid #D9F2FF",
              borderRadius: 10,
              backgroundColor: "#D9F2FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchOutlined style={{ color: "#332288" }} />
          </Button>
          <Button
            style={{
              width: 40,
              height: 40,
              margin: "0 10px",
              border: "1px solid #D9F2FF",
              borderRadius: 10,
              backgroundColor: "#D9F2FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FilterOutlined style={{ color: "#332288" }} />
          </Button>
          <span
            style={{
              cursor: "pointer",
              width: 100,
              height: 40,
              backgroundColor: "#332288",
              borderRadius: "100%",
            }}
          ></span>
        </span>
      </div>
      <p style={{ color: "#332288", fontWeight: 700, margin: 0, padding: 0 }}>
        Processing Status
      </p>
      <TitlePorterFilter />
    </div>
  );
}

export default HeaderItem;
