import React from "react";
import { Checkbox, Button } from "antd";

function TitlePorterFilter() {
  //   function onChange(e) {
  //     console.log(`checked = ${e.target.checked}`);
  //   }
  return (
    <div
      style={{
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
      }}>
      <span>
        <Checkbox>Accepted</Checkbox>
        <Checkbox>Completed</Checkbox>
        <Checkbox>Open</Checkbox>
        <a
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            lineHeight: "22px",
            color: "#332288",
            textDecorationLine: "underline",
          }}
        >
          Location Filter
        </a>
      </span>
      <span>
        <h3
          style={{
            display: "inline-block",
            fontSize: "14px",
            fontWeight: "bold",
            lineHeight: "22px",
            color: "#332288",
          }}
        >
          Sort by :
        </h3>
        <a
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "#332288",
            textDecorationLine: "underline",
            margin: 10,
          }}
        >
          Name
        </a>
        <a
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "#332288",
            textDecorationLine: "underline",
            margin: 10,
          }}
        >
          Date
        </a>
        <a
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "#332288",
            textDecorationLine: "underline",
            margin: 10,
          }}
        >
          LOC
        </a>
        <a
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "#332288",
            textDecorationLine: "underline",
          }}
        >
          Status
        </a>
        <Button
          style={{
            marginLeft: "10px",
            border: "1px solid #332288",
            color: "#332288",
            boxSizing: "border-box",
            borderRadius: 62,
          }}
        >
          View My Orders
        </Button>
        <Button
          style={{
            marginLeft: "10px",
            border: "1px solid #332288",
            color: "#332288",
            boxSizing: "border-box",
            borderRadius: 62,
          }}
        >
          View All Orders
        </Button>
      </span>
    </div>
  );
}

export default TitlePorterFilter;
