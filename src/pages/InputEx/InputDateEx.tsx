import {
  CardInfo,
  InputDate,
  InputDatePicker,
  InputDateTimePicker,
  InputTimePicker,
} from "rcl-shared-components";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function InputDateEx() {
  const [state, setState] = useState<{
    date: Date | null;
  }>({
    date: null,
  });

  function updateState<K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) {
    setState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <CardInfo title="Input Date">
      <Row>
        <Col>
          <div style={{ width: "50%", paddingBottom: "0.5rem" }}>
            <InputDate
              label="Date"
              onChange={(date) => {
                updateState("date", date);
              }}
              value={state.date}
            ></InputDate>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          InputDate is an input with a date picker made with "react-datepicker"
          <br />
          <br />
          This component's onChange will be different from other components
          <br />
          <br />
          onChange will be called with Date if user typed a valid date or select
          from date picker
          <br />
          onChange will be called with null otherwise
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <div>
            <InputDatePicker
              disableHighlightToday
              label="Date Picker MUI"
              iconColor="#fff"
              required
            ></InputDatePicker>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <InputTimePicker
              label="Time Picker MUI"
              iconColor="#fff"
            ></InputTimePicker>
          </div>
        </Col>

        <Col md={4}>
          <div>
            <InputDateTimePicker
              disableHighlightToday
              label="Date Time Picker MUI"
              iconColor="#fff"
            ></InputDateTimePicker>
          </div>
        </Col>
      </Row>
    </CardInfo>
  );
}
