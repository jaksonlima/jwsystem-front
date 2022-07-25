import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Moment } from "moment";
import React from "react";

import AsynchronouslyModal from "../Modal/Asynchronously";

const getListData = (value: Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App: React.FC = () => {
  const monthCellRender = (value: Moment) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const dateCellHandle = (value: Moment) => {
    if (value.day() === 3) {
      const fiveSchedule = Array.from({ length: 5 }, (v, k) => k);

      const color = (key: number) => (key % 2 === 0 ? "#e6fffb" : "#fff2e8");

      return (
        <ul>
          {fiveSchedule.map((item, key) => (
            <li
              key={key}
              style={{
                listStyle: "none",
                backgroundColor: `${color(key)}`,
                margin: "2px",
                height: "35px",
              }}
            >
              <AsynchronouslyModal />
            </li>
          ))}
        </ul>
      );
    }
    return <></>;
  };

  return (
    <Calendar
      dateCellRender={dateCellHandle}
      monthCellRender={monthCellRender}
    />
  );
};

export default App;
