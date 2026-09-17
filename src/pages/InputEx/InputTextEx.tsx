import { CardInfo, InputText } from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function InputTextEx() {
  const [state, setState] = useState({
    ITextDefault: "",
    ITextRequired: "",
    ITextUpper: "",
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
    <CardInfo title="Input Text">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputText
              value={state.ITextDefault}
              label="Input"
              onChange={(e) => {
                updateState("ITextDefault", e.target.value);
              }}
            ></InputText>
          </div>
          <div>This is InputText, it's a generic text input.</div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputText
              value={state.ITextRequired}
              label="Required"
              onChange={(e) => {
                updateState("ITextRequired", e.target.value);
              }}
              required
            ></InputText>
          </div>
          <div>
            Using "required" will alter style of the input (Behavior is still
            the same)
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputText
              value={state.ITextUpper}
              label="Uppercase"
              onChange={(e) => {
                updateState("ITextUpper", e.target.value);
              }}
              isUpperCase
            ></InputText>
          </div>
          <div>You can set it to use only uppercase character</div>
        </Col>
        <Col></Col>
      </Row>
    </CardInfo>
  );
}
