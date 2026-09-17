import { CardInfo, InputAutoComplete } from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function AutocompleteEx() {
  const [state, setState] = useState({
    autoComplete: "",
    minLen: "",
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
    <CardInfo title="Autocomplete">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputAutoComplete
              label="Autocomplete"
              value={state.autoComplete}
              onChange={(value) => updateState("autoComplete", value)}
              onSelect={(v) => updateState("autoComplete", v)}
              variant="customerCode"
            ></InputAutoComplete>
          </div>
          <div>
            InputAutoComplete is an input which will produce a dropdown for user
            to pick from
          </div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputAutoComplete
              label="Min Search Length 4"
              value={state.minLen}
              onChange={(value) => updateState("minLen", value)}
              onSelect={(v) => updateState("autoComplete", v)}
              variant="customerCode"
              minSearchLength={4}
            ></InputAutoComplete>
          </div>
          <div>
            InputAutoComplete can be configured length of input before making
            search
          </div>
        </Col>
      </Row>
    </CardInfo>
  );
}
