import {
  Button,
  InputCheckbox,
  InputNumber2,
  InputText,
  SearchCard,
  Select,
  SelectOption,
} from "rcl-shared-components";
import { Col, Row } from "react-bootstrap";
import { SearchCriteriaType } from "../SearchScreenEx";

export const SearchSelectOptionsEx: SelectOption[] = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Male",
    value: "M",
  },
  {
    label: "Female",
    value: "F",
  },
];

export const SearchForm = ({
  form,
  onSearch,
  onReset,
  setForm,
}: {
  form: SearchCriteriaType;
  onReset: () => void;
  onSearch: () => void;
  setForm: React.Dispatch<React.SetStateAction<SearchCriteriaType>>;
}) => {
  /**
   * There are currently no standard for controling states in React apps
   *
   * Author's way utilize Typescript for code suggestions and validations
   */
  function setDataField<K extends keyof SearchCriteriaType>(
    key: K,
    value: SearchCriteriaType[K]
  ) {
    setForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <SearchCard title="Search">
      <Row className="mb-2">
        <Col>
          <InputNumber2
            label="Id"
            value={form.id}
            onValueChange={(v) => {
              setDataField("id", v.floatValue);
            }}
            decimalScale={0}
          ></InputNumber2>
        </Col>
        <Col>
          <InputText
            label="First Name"
            value={form.first}
            onChange={(e) => {
              setDataField("first", e.target.value);
            }}
          ></InputText>
        </Col>
        <Col>
          <InputText
            label="Last Name"
            value={form.last}
            onChange={(e) => {
              setDataField("last", e.target.value);
            }}
          ></InputText>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Select
            options={SearchSelectOptionsEx}
            label="Gender"
            value={form.gender}
            onChange={(e) => setDataField("gender", e.target.value)}
          ></Select>
        </Col>
        <Col>
          <InputNumber2
            label="Age"
            value={form.age}
            onValueChange={(v) => {
              setDataField("age", v.floatValue);
            }}
            decimalScale={0}
            isAllowed={(v) => v.floatValue === undefined || v.floatValue < 100}
          ></InputNumber2>
        </Col>
        <Col>
          <InputCheckbox
            checked={form.success}
            label="Success?"
            onChange={(e) => setDataField("success", e.target.checked)}
          ></InputCheckbox>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "1rem",
            }}
            className="mt-3"
          >
            <Button variant="find" onClick={onSearch}></Button>
            <Button variant="reset" onClick={onReset}></Button>
          </div>
        </Col>
      </Row>
    </SearchCard>
  );
};
