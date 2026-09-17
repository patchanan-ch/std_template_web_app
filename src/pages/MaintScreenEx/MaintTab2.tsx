import { InputLookupDepotTerminal } from "rcl-shared-components";
import { Col, Row } from "react-bootstrap";
import { MaintDataType } from "./MaintScreenEx";

export function MaintTab2({
  data,
  setData,
}: {
  data: MaintDataType;
  setData: React.Dispatch<React.SetStateAction<MaintDataType>>;
}) {
  function setDataByField<K extends keyof MaintDataType>(
    key: K,
    value: MaintDataType[K]
  ) {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <div className="px-3 py-3">
      <Row>
        <Col>
          <InputLookupDepotTerminal
            value={data.terminal}
            label="Terminal"
            onChange={(e) => {
              setDataByField("terminal", e.target.value);
            }}
          ></InputLookupDepotTerminal>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
}
