import { CardInfo, InputNumber2 } from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function InputNumberEx() {
  const [state, setState] = useState({
    default: "",
    thousandSep: "",
    max: "",
    decimal: "",
    customValidate: "",
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
    <CardInfo title="Input Number">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputNumber2
              value={state.default}
              onValueChange={(v) => {
                updateState("default", v.value);
              }}
              label="Input Number"
            ></InputNumber2>
          </div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputNumber2
              value={state.thousandSep}
              onValueChange={(v) => {
                updateState("thousandSep", v.value);
              }}
              label="Thousand Sep"
              thousandSeparator
            ></InputNumber2>
          </div>
          <div>
            You can put "thousandSeparator" to make a thousand separated inputs
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputNumber2
              value={state.max}
              onValueChange={(v) => {
                updateState("max", v.value);
              }}
              label="With max"
              max={999}
            ></InputNumber2>
          </div>
          <div>You can put "max" to define max number which can be filled</div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputNumber2
              value={state.decimal}
              onValueChange={(v) => {
                updateState("decimal", v.value);
              }}
              label="Even only"
              isAllowed={(v) => {
                return (
                  v.value === "" ||
                  (v.floatValue !== undefined && v.floatValue % 2 == 0)
                );
              }}
            ></InputNumber2>
          </div>
          <div>You can use "isAllowed" to make a customized validations</div>
        </Col>
      </Row>
      <Row>
        <Col>
          InputNumber is an input which accepts only numeric input
          <br />
          This component uses external library "react-number-format"
          <br />
          Visit{" "}
          <a href="https://s-yadav.github.io/react-number-format/docs/props">
            https://s-yadav.github.io/react-number-format/docs/props
          </a>{" "}
          for more information about available props
          <br />
          <br />
          This component will not use onChange for value changes instead use
          onValueChange
        </Col>
      </Row>
    </CardInfo>
  );
}
