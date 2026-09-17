import {
  ButtonCircle,
  CardInfo,
  DataGridBody,
  DataGridColumns,
  DataGridHeaderRow,
  DataGridState,
  DataGridTableElement,
  DataGridUtils,
  DataGridWrapper,
  RCLAlertNotification,
  SelectUtils,
} from "rcl-shared-components";
import { useMemo, useState } from "react";
import { SearchTypeEx } from "../../../types/SearchTypeEx";
import { SearchSelectOptionsEx } from "./SearchForm";

export const ResultCard = ({ data }: { data: SearchTypeEx[] }) => {
  const { addAlertNotification } = RCLAlertNotification.useContext();

  const [tableState, setTableState] = useState<DataGridState<SearchTypeEx>>({
    currentPage: 1,
    searchCriteria: "",
    sizePerPage: 10,
  });

  const reducedData = useMemo(() => {
    return DataGridUtils.DefaultCalcDisplayedData(data, tableState);
  }, [data, tableState]);

  type ExtraDataType = {
    addAlertNotification: typeof addAlertNotification;
  };

  const columnDef: DataGridColumns<SearchTypeEx, ExtraDataType>[] =
    useMemo(() => {
      return [
        {
          id: "id",
          header: "Id",
          keyName: "id",
          sortable: true,
          width: "7%",
        },
        {
          id: "first",
          header: "First Name",
          keyName: "first",
          sortable: true,
          width: "30%",
        },
        {
          id: "last",
          header: "Last Name",
          keyName: "last",
          sortable: true,
          width: "30%",
        },
        {
          id: "gender",
          header: "Gender",
          keyName: "gender",
          width: "20%",
          renderCell: (data) =>
            SelectUtils.mapValueToLabel(SearchSelectOptionsEx, data.gender),
        },
        {
          id: "age",
          header: "Age",
          keyName: "age",
          sortable: true,
          width: "8%",
        },
        {
          id: "action",
          header: "Action",
          width: "5%",
          renderCell: (data, _index, extraData) => {
            return (
              <ButtonCircle
                variant="edit"
                size="sm"
                onClick={() => {
                  extraData?.addAlertNotification({
                    message: `You've clicked action button of id ${data.id}`,
                    status: "INFO",
                  });
                }}
              ></ButtonCircle>
            );
          },
        },
      ];
    }, []);

  return (
    <CardInfo title="Search Result">
      <DataGridWrapper
        dataCount={reducedData.filteredData.length}
        state={tableState}
        onStateChange={setTableState}
      >
        <DataGridTableElement fontSize="SMALL">
          <DataGridHeaderRow
            columns={columnDef}
            state={tableState}
            onStateChange={setTableState}
          ></DataGridHeaderRow>
          <DataGridBody
            columnDef={columnDef}
            displayedData={reducedData.paginatedData}
            keyField="id"
            extraData={{ addAlertNotification: addAlertNotification }}
          ></DataGridBody>
        </DataGridTableElement>
      </DataGridWrapper>
    </CardInfo>
  );
};
