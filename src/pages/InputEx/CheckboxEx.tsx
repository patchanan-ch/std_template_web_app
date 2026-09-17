import { CardInfo, InputCheckbox } from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function CheckboxEx() {
  const [state, setState] = useState({
    checkBox: true,
    altVal: "N",
    radio: 1,
  });

  function updateState<K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K]
  ) {
    setState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <CardInfo title="Checkbox">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputCheckbox
              label="Checkbox"
              checked={state.checkBox}
              onChange={(e) => updateState("checkBox", e.target.checked)}
            ></InputCheckbox>
          </div>
          <div>Check box is an input with 2 state</div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputCheckbox
              label="Alternate Value"
              checked={state.altVal === "Y"}
              onChange={(e) =>
                updateState("altVal", e.target.checked ? "Y" : "N")
              }
            ></InputCheckbox>
          </div>
          <div>Checkbox can store string value when controlled</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputCheckbox
            label="Radio 1"
            checked={state.radio === 1}
            onChange={() => updateState("radio", 1)}
          ></InputCheckbox>
        </Col>
        <Col>
          <InputCheckbox
            label="Radio 2"
            checked={state.radio === 2}
            onChange={() => updateState("radio", 2)}
          ></InputCheckbox>
        </Col>
        <Col>
          <InputCheckbox
            label="Radio 3"
            checked={state.radio === 3}
            onChange={() => updateState("radio", 3)}
          ></InputCheckbox>
        </Col>
        <Col>
          <InputCheckbox
            label="Radio 4"
            checked={state.radio === 4}
            onChange={() => updateState("radio", 4)}
          ></InputCheckbox>
        </Col>
      </Row>
      <Row>
        <Col>Checkbox can also be used as a radio button</Col>
      </Row>
    </CardInfo>
  );
}
