import {
  CardInfo,
  InputText,
  Select,
  SelectOption,
  SelectUtils,
} from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const opts: SelectOption[] = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Disabled Option",
    value: "3",
    disabled: true,
  },
  {
    label: "Invisible Option",
    value: "I",
    visible: false,
  },
];

export function SelectEx() {
  const [state, setState] = useState({
    select: "1",
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
    <CardInfo title="Select">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <Select
              label="Select"
              options={opts}
              value={state.select}
              onChange={(e) => updateState("select", e.target.value)}
            ></Select>
          </div>
          <div>Select is a dropdown for set of values</div>
        </Col>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputText
              label="Current value"
              disabled
              value={SelectUtils.mapValueToLabel(opts, state.select)}
            ></InputText>
          </div>
          <div>
            Select2 restructure props to adds more props available to
            select/option elements
          </div>
        </Col>
      </Row>
    </CardInfo>
  );
}
