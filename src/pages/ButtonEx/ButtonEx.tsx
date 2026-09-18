import { Button, CardInfo, PageHeader } from "rcl-shared-components";

import "./style.scss";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

export const ButtonEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title={"Buttons Example"} />
      <CardInfo title="Defaults">
        <Button></Button>
      </CardInfo>
      <CardInfo title="Variants">
        <div className="btn-ex-var">
          <Row>
            <Col>
              <Button variant="add"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Add</Col>
            <Col>
              <Button variant="approve"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Approve</Col>
            <Col>
              <Button variant="back"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Back</Col>
            <Col>
              <Button variant="delete"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Delete</Col>
          </Row>

          <Row>
            <Col>
              <Button variant="email"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Email</Col>
            <Col>
              <Button variant="excel"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Excel</Col>
            <Col>
              <Button variant="find"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Find</Col>
            <Col>
              <Button variant="reject"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Reject</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="reset"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Reset</Col>
            <Col>
              <Button variant="revert"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Revert</Col>
            <Col>
              <Button variant="save"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Save</Col>
            <Col>
              <Button variant="submit"></Button>
            </Col>
            <Col style={{ alignSelf: "center" }}>Submit</Col>

          </Row>
        </div>
      </CardInfo>
      <CardInfo title="Outline">
        <div className="btn-ex-outline" aria-label="Outline button variants">
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--tealblue">Default</button><span>Tealblue</span></div>
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--royalblue">Default</button><span>Royalblue</span></div>
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--gray">Default</button><span>Gray</span></div>
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--yellow">Default</button><span>Yellow</span></div>
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--green">Default</button><span>Green</span></div>
          <div className="btn-ex-outline__item"><button className="btn-ex-outline__button btn-ex-outline__button--red">Default</button><span>Red</span></div>
        </div>
      </CardInfo>
      <CardInfo title="Customization">
        <div className="btn-ex-cus">
          <div>
            <Button disabled></Button> Button is disabled
          </div>
          <div>
            <Button disableIcon></Button> Button doesn't have icon
          </div>
          <div>
            <Button size="sm"></Button> Button is smaller
          </div>
          <div>
            <Button color="red1" icon={faGear} label="Custom"></Button>{" "}
            Customize color, icon and label
          </div>
        </div>
      </CardInfo>
    </div>
  );
};
