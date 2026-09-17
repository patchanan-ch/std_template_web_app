import { Switch } from "@mui/material";
import { CardInfo } from "rcl-shared-components";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export function SwitchEx() {
  const [state, setState] = useState({
    switch: false,
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
    <CardInfo title="Switch">
      <Row>
        <Col>
          <p>
            Shared Components doesn't have switch component and its CSS doesn't
            support react-bootstrap's Switch.
          </p>
          <p style={{ marginBottom: 0 }}>
            For switch component, please use MUI Switch component.
          </p>
          <Switch
            checked={state.switch}
            onChange={(e) => {
              updateState("switch", e.target.checked);
            }}
          ></Switch>
        </Col>
      </Row>
    </CardInfo>
  );
}
