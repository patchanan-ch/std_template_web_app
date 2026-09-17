import {
  CardInfo,
  InputLookup,
  InputLookupDataGrid,
  InputLookupDepotTerminal,
  InputLookupDepotTerminalSearch,
} from "rcl-shared-components";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  InputLookupSurchargeCode,
  LookupSurchargeCodeType,
} from "./components/InputLookupSurchargeCode";
import { InputLookupSurchargeCodeSearch } from "./components/InputLookupSurchargeCodeSearch";
import moment from "moment";

export type LookupChargeCode = {
  CHARGE_CODE: string;
  DESCRIPTION: string;
  RECOVERY_FLAG: string;
  RECOVERY_CHARGE_CODE: string;
  RECORD_STATUS: string;
};

export function LookupEx() {
  const [prevState, setPrevState] = useState<LookupSurchargeCodeType[]>([]);
  const [state, setState] = useState({
    lookup: "",
    searchLookupTerminal: "",
    multiLookup: [] as LookupSurchargeCodeType[],
    searchLookup: [] as LookupSurchargeCodeType[],
    cacheSearchLookup: "",
    searchLookupDataGrid: "",
    isSaved: false,
  });

  const handleSave = () => {
    updateState("isSaved", true);
    setPrevState(state.searchLookup);
  };

  const handleCancel = () => {
    updateState("isSaved", false);
    updateState("searchLookup", prevState);
  };

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

  const InputLookupPortPointDataGrid = ({
    id = "portPointDataGrid",
    name = "portPointDataGrid",
    title = "Port/Point Lookup (DataGrid)",
    height = 700,
    showToolbar = true,
    hideSearch = false,
    ...props
  }: any) => {
    return (
      <InputLookupDataGrid<LookupChargeCode>
        id={id}
        name={name}
        isCloseWhenEscape={true}
        isUpperCase
        height={height}
        showToolbar={showToolbar}
        hideSearch={hideSearch}
        hideExport
        hideColumnSelector={false}
        hideDensity={false}
        hideFooter={false}
        pageSizeOptions={[10, 25, 50, 100]}
        customization={{
          name,
          title,
          view: "VRL_DTB_CHARGE_CODE",
          fields: [
            {
              label: "Charge Code",
              accessor: "CHARGE_CODE",
            },
            {
              label: "Description",
              accessor: "DESCRIPTION",
            },
            {
              label: "Recovery Flag",
              accessor: "RECOVERY_FLAG",
            },
            {
              label: "Recovery Charge Code",
              accessor: "RECOVERY_CHARGE_CODE",
            },
            {
              label: "Status",
              accessor: "RECORD_STATUS",
            },
          ],
        }}
        {...props}
      />
    );
  };

  return (
    <CardInfo title="InputLookup">
      <Row>
        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookupDepotTerminal
              value={state.lookup}
              onChange={(e) => updateState("lookup", e.target.value)}
              onLookupSelect={(selected) =>
                updateState("lookup", selected.TERMINAL_CODE)
              }
              isCloseWhenEscape
            ></InputLookupDepotTerminal>
          </div>
          <div>
            InputLookup is an InputButton with built-in API calls and Dialog
            when button is clicked
          </div>
        </Col>
        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookupSurchargeCode
              value={state.multiLookup
                .map((e) => `${e.SURCHARGE_CODE}`)
                .join(", ")}
              onLookupToggle={(v, isOn) => {
                if (isOn) {
                  updateState("multiLookup", [...state.multiLookup, v]);
                } else {
                  updateState(
                    "multiLookup",
                    state.multiLookup.filter(
                      (e) => e.SURCHARGE_CODE !== v.SURCHARGE_CODE
                    )
                  );
                }
              }}
              checkIsSelected={(value) => {
                return !!state.multiLookup.find(
                  (e) => e.SURCHARGE_CODE === value.SURCHARGE_CODE
                );
              }}
            ></InputLookupSurchargeCode>
          </div>
          <div>
            Lookup can be configured to be able to select multiple record. If
            you do, some other props may be required.
          </div>
        </Col>
        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookupSurchargeCodeSearch
              value={
                state.isSaved
                  ? state.searchLookup
                      .map((e) => `${e.SURCHARGE_CODE}`)
                      .join(", ")
                  : prevState.map((e: any) => `${e.SURCHARGE_CODE}`).join(", ")
              }
              onLookupToggle={(v, isOn) => {
                if (isOn) {
                  updateState("searchLookup", [...state.searchLookup, v]);
                } else {
                  updateState(
                    "searchLookup",
                    state.searchLookup.filter(
                      (e) => e.SURCHARGE_CODE !== v.SURCHARGE_CODE
                    )
                  );
                }
              }}
              checkIsSelected={(value) => {
                return !!state.searchLookup.find(
                  (e) => e.SURCHARGE_CODE === value.SURCHARGE_CODE
                );
              }}
              onSave={handleSave}
              onCancel={handleCancel}
            ></InputLookupSurchargeCodeSearch>
          </div>
          <div>
            Search Lookup can be configured to be able to select multiple
            record. If you do, some other props may be required.
          </div>
        </Col>
        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookupDepotTerminalSearch
              value={state.searchLookupTerminal}
              onChange={(e) =>
                updateState("searchLookupTerminal", e.target.value)
              }
              onLookupSelect={(selected) =>
                updateState("searchLookupTerminal", selected.TERMINAL_CODE)
              }
              isCloseWhenEscape
            ></InputLookupDepotTerminalSearch>
          </div>
          <div>
            Search InputLookup is an InputButton with built-in API calls and
            Dialog when button is clicked
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookup
              isLookupCacheSearch // key property
              size="sm"
              isUpperCase
              exportCsv
              label={"DG Approval ID"}
              disabled={false}
              criteria={[
                {
                  column: "FK_POL",
                  exact: false,
                  value: "THLCH",
                },
              ]}
              customization={{
                name: "DGS_APPROVAL_ID",
                title: "Qtn DG Approval Id Lookup",
                view: "VRL_QTN_DG_APPROVAL_ID",
                fields: [
                  { accessor: "DGS_REQUEST_ID", label: "Dgs Request Id" },
                  { accessor: "REQUEST_DATE", label: "Request Date" },
                  { accessor: "DGS_APPROVAL_ID", label: "Dgs Approval Id" },
                  { accessor: "COC_SOC", label: "Coc Soc" },
                  {
                    accessor: "CONTRACT_PARTY_CODE",
                    label: "Contract Party Code",
                  },
                  { accessor: "FK_POL", label: "Fk POL" },
                  { accessor: "FK_POT1", label: "Fk Pot1" },
                  { accessor: "FK_POT2", label: "Fk Pot2" },
                  { accessor: "FK_POD", label: "Fk POD" },
                  { accessor: "FK_DEL", label: "Fk DEL" },
                ],
                dataMapping: (data: any) => {
                  return data.map((el: any) => ({
                    ...el,
                    REQUEST_DATE: el.REQUEST_DATE
                      ? moment(el.REQUEST_DATE).format("YYYY-MM-DD hh:mm:ss")
                      : "",
                  }));
                },
              }}
              value={state.cacheSearchLookup}
              onChange={({ target }) => {
                setState({
                  ...state,
                  cacheSearchLookup: target.value,
                });
              }}
              onLookupSelect={(selected: any) => {
                setState({
                  ...state,
                  cacheSearchLookup: selected.DGS_APPROVAL_ID,
                });
              }}
            />
          </div>
          <div>
            Basically an input lookup that call API when popup was opened. The
            API parameter must be predetermined in the code. User can filter
            data in every columns by enter the criteria and click Find.
          </div>
        </Col>

        <Col md={3}>
          <div style={{ width: "100%", paddingBottom: "0.5rem" }}>
            <InputLookupPortPointDataGrid
              id="searchChargeCode"
              name="chargeCode"
              label="chargeCode"
              value={state.searchLookupDataGrid}
              onChange={(evt: any) => {
                updateState("searchLookupDataGrid", evt.target.value);
              }}
              onLookupSelect={(e: any) =>
                updateState("searchLookupDataGrid", e.CHARGE_CODE)
              }
              maxLength={10}
              required={true}
            />
          </div>
          <div>
            InputLookup with Datagrid is an InputButton with built-in API calls
            and Dialog when button is clicked.
          </div>
        </Col>
      </Row>
    </CardInfo>
  );
}
