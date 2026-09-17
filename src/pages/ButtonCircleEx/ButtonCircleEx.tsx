import { ButtonCircle, CardInfo, PageHeader } from "rcl-shared-components";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/**
 * This is a page about circular button
 */
export const ButtonCircleEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title={"Circular Button Example"} />
      <CardInfo title="Defaults">
        <ButtonCircle></ButtonCircle>
      </CardInfo>
      <CardInfo title="Variants">
        <Row className="py-2">
          <Col>
            <StyledDiv>
              <ButtonCircle variant="cancel"></ButtonCircle>
              <div>Cancel</div>
            </StyledDiv>
          </Col>
          <Col>
            <StyledDiv>
              <ButtonCircle variant="delete"></ButtonCircle>
              <div>Delete</div>
            </StyledDiv>
          </Col>
          <Col>
            <StyledDiv>
              <ButtonCircle variant="down"></ButtonCircle>
              <div>Down</div>
            </StyledDiv>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <StyledDiv>
              <ButtonCircle variant="edit"></ButtonCircle>
              <div>Edit</div>
            </StyledDiv>
          </Col>
          <Col>
            <StyledDiv>
              <ButtonCircle variant="info"></ButtonCircle>
              <div>Info</div>
            </StyledDiv>
          </Col>
          <Col>
            <StyledDiv>
              <ButtonCircle variant="right"></ButtonCircle>
              <div>Right</div>
            </StyledDiv>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <StyledDiv>
              <ButtonCircle variant="save"></ButtonCircle>
              <div>Save</div>
            </StyledDiv>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </CardInfo>
      <CardInfo title="Customization">
        <div className="btn-ex-cus">
          <StyledDiv>
            <div style={{ width: "40px" }}>
              <ButtonCircle disabled></ButtonCircle>
            </div>
            <div>Button is disabled</div>
          </StyledDiv>
          <StyledDiv>
            <div style={{ width: "40px" }}>
              <ButtonCircle size="sm"></ButtonCircle>
            </div>
            <div>Button is smaller</div>
          </StyledDiv>
          <StyledDiv>
            <div style={{ width: "40px" }}>
              <ButtonCircle icon={faGear} color="gray1"></ButtonCircle>
            </div>
            <div>Customize color, icon and label</div>
          </StyledDiv>
        </div>
      </CardInfo>
    </div>
  );
};
