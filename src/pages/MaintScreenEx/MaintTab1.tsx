import { Col, Row } from "react-bootstrap";
import { MaintDataType } from "./MaintScreenEx";
import { InputDate, InputText } from "rcl-shared-components";

export function MaintTab1({
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
          <InputText
            value={data.name}
            label="Name"
            onChange={(e) => {
              setDataByField("name", e.target.value);
            }}
          ></InputText>
        </Col>
        {/**
         * Use align-self : flex-end to make an item without label align bottom
         */}
        <Col style={{ alignSelf: "flex-end" }}>
          <InputText
            value={data.surname}
            label=""
            onChange={(e) => {
              setDataByField("surname", e.target.value);
            }}
          ></InputText>
        </Col>
        <Col>
          <InputDate
            onChange={(date) => setDataByField("birthDay", date)}
            value={data.birthDay}
            label="Birth Date"
          ></InputDate>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
