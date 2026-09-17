import {
  CardInfo,
  DataGridColumns,
  DataGridHeaderRow,
  DataGridState,
  DataGridTableElement,
  DataGridUtils,
  DataGridWrapper,
} from "rcl-shared-components";
import { useMemo, useState } from "react";
import { ADataType, DataGridData } from "../../consts/DatagridData";

import "./style.scss";

const columnDef: DataGridColumns<ADataType>[] = [
  {
    id: "seq",
    header: "Seq",
    keyName: "seq",
    sortable: true,
  },
  {
    id: "first",
    header: "First",
    keyName: "first",
    sortable: true,
  },
  {
    id: "last",
    header: "Last",
    keyName: "last",
  },
  {
    id: "age",
    header: "Age",
    keyName: "age",
    sortable: true,
  },
];

export const DataGridCard = () => {
  const [tableState, setTableState] = useState<DataGridState<ADataType>>({
    currentPage: 1,
    searchCriteria: "",
    sizePerPage: 10,
  });

  const reducedData = useMemo(() => {
    return DataGridUtils.DefaultCalcDisplayedData(DataGridData, tableState);
  }, [tableState]);

  return (
    <>
      <CardInfo title="Example">
        <DataGridWrapper
          dataCount={reducedData.filteredData.length}
          state={tableState}
          onStateChange={setTableState}
        >
          <DataGridTableElement
            className="example-table"
            style={{ fontSize: "0.85rem" }}
          >
            <DataGridHeaderRow
              columns={columnDef}
              state={tableState}
              onStateChange={setTableState}
            ></DataGridHeaderRow>
            <tbody>
              {reducedData.paginatedData.map((sData) => {
                return (
                  <tr>
                    <td>{sData.seq}</td>
                    <td>{sData.first}</td>
                    <td>{sData.last}</td>
                    <td>{sData.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </DataGridTableElement>
        </DataGridWrapper>
      </CardInfo>
    </>
  );
};
