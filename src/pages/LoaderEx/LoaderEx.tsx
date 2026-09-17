import { Button, CardInfo, PageHeader, RCLLoader } from "rcl-shared-components";
import { Col, Row } from "react-bootstrap";

export const LoaderEx = () => {
  const { addLoadingTask, removeLoadingTask, setLoading } =
    RCLLoader.useContext();

  return (
    <div className="container-fluid">
      <PageHeader title={"Loader Example"} />
      <CardInfo>
        <Row className="mb-3">
          <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              label="Click"
              disableIcon
              onClick={() => {
                const call = async () => {
                  setLoading(true);
                  await new Promise((resolve) => setTimeout(resolve, 5000));
                  setLoading(false);
                };
                call();
              }}
            ></Button>
            <div>To make loader appear for 5 seconds (using setLoading)</div>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              label="Click"
              disableIcon
              onClick={() => {
                const call = async () => {
                  // Recommended the task to be an object to avoid collision (Objects are compared by their reference)
                  const task = {};
                  addLoadingTask(task);
                  await new Promise((resolve) => setTimeout(resolve, 5000));
                  removeLoadingTask(task);
                };
                const call2 = async () => {
                  const task = {};
                  addLoadingTask(task);
                  await new Promise((resolve) => setTimeout(resolve, 3000));
                  removeLoadingTask(task);
                };
                call();
                call2();
              }}
            ></Button>
            <div>
              To make loader appear for 5 seconds (using
              addLoadingTask/removeLoadingTask)
            </div>
          </Col>
        </Row>
      </CardInfo>
    </div>
  );
};
