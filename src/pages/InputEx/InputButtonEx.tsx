import { CardInfo, InputButton } from "rcl-shared-components";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export function InputButtonEx() {
  const [state, setState] = useState({
    inputButton: "",
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
    <CardInfo title="InputButton">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputButton
              label="InputButton"
              value={state.inputButton}
              onChange={(e) => updateState("inputButton", e.target.value)}
              onButtonClicked={() =>
                updateState("inputButton", "You've clicked this InputButton")
              }
            ></InputButton>
          </div>
          <div>
            InputButton is an Input with a button appended which can perform
            actions when clicked
          </div>
        </Col>
        <Col></Col>
      </Row>
    </CardInfo>
  );
}
