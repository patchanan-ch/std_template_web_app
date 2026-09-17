import {
  Button,
  CardInfo,
  PageHeader,
  RCLAlertNotification,
} from "rcl-shared-components";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { MaintTab1 } from "./MaintTab1";
import { MaintTab2 } from "./MaintTab2";
import { MaintTab3 } from "./MaintTab3";
import { useNavigate } from "react-router-dom";

export type MaintTableData = {
  id: string;
  detail: string;
};

export type MaintDataType = {
  name: string;
  surname: string;
  birthDay: Date | null;
  terminal: string;
  tableData: MaintTableData[];
};

const defaultData: MaintDataType = {
  name: "",
  surname: "",
  birthDay: null,
  terminal: "",
  tableData: [],
};

export const MaintScreenEx = () => {
  const { addAlertNotification } = RCLAlertNotification.useContext();

  const navigate = useNavigate();

  const [data, setData] = useState<MaintDataType>(defaultData);

  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="container-fluid">
      <PageHeader title={"Tabs Example"}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="save"
            size="sm"
            onClick={() => {
              console.log(data);
              addAlertNotification({
                status: "INFO",
                message: "The current data object is logged to the console",
              });
            }}
          ></Button>
          {/**
           * navigate(-1) is equivalent to clicking back in browser
           */}
          <Button
            variant="back"
            size="sm"
            onClick={() => navigate(-1)}
          ></Button>
        </div>
      </PageHeader>
      <CardInfo>
        {/**
         * For reference about Tabs
         * Refer to https://react-bootstrap.netlify.app/docs/components/tabs/
         */}
        <Tabs activeKey={activeTab} onSelect={(e) => setActiveTab(e || "1")}>
          <Tab title={"Tab 1"} eventKey={"1"}>
            <MaintTab1 data={data} setData={setData}></MaintTab1>
          </Tab>
          <Tab title={"Tab 2"} eventKey={"2"}>
            <MaintTab2 data={data} setData={setData}></MaintTab2>
          </Tab>
          <Tab title={"Tab 3"} eventKey={"3"}>
            <MaintTab3 data={data} setData={setData}></MaintTab3>
          </Tab>
        </Tabs>
      </CardInfo>
    </div>
  );
};
