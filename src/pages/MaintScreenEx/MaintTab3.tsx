import {
  Button,
  ButtonCircle,
  CardCollapsable,
  DataGridAuto,
  DataGridColumns,
  InputText,
} from "rcl-shared-components";
import { useMemo } from "react";
import { MaintDataType, MaintTableData } from "./MaintScreenEx";

/**
 * This Tab will show how to make a table that can be edited
 */
export function MaintTab3({
  data,
  setData,
}: {
  data: MaintDataType;
  setData: React.Dispatch<React.SetStateAction<MaintDataType>>;
}) {
  function onTableChange(changedData: MaintTableData) {
    setData((prev) => {
      return {
        ...prev,
        tableData: prev.tableData.map((eData) => {
          if (eData.id === changedData.id) {
            return changedData;
          } else {
            return eData;
          }
        }),
      };
    });
  }

  function deleteRow(deletedRow: MaintTableData) {
    setData((prev) => {
      return {
        ...prev,
        tableData: prev.tableData.filter((eData) => {
          return eData.id !== deletedRow.id;
        }),
      };
    });
  }

  function generateId() {
    let gen = 0;
    while (true) {
      if (
        !data.tableData.find((sData) => {
          return sData.id === `N_${gen}`;
        })
      ) {
        return `N_${gen}`;
      } else {
        gen = gen + 1;
      }
    }
  }

  const datagridExtra = {
    onTableChange,
    deleteRow,
  };

  const DatagridColDef = useMemo<
    DataGridColumns<MaintTableData, typeof datagridExtra>[]
  >(() => {
    return [
      {
        id: "Seq",
        header: "Seq",
        renderCell: (_row, index) => {
          return index + 1;
        },
        width: "10%",
      },
      {
        id: "Detail",
        header: "Detail",
        renderCell: (row, _index, extra) => {
          return (
            <InputText
              value={row.detail}
              onChange={(e) => {
                extra?.onTableChange({
                  ...row,
                  detail: e.target.value,
                });
              }}
            ></InputText>
          );
        },
        width: "90%",
      },
      {
        id: "Action",
        header: "Action",
        renderCell: (row, _index, extra) => {
          return (
            <ButtonCircle
              variant="delete"
              onClick={() => {
                console.log(extra);
                extra?.deleteRow(row);
              }}
            ></ButtonCircle>
          );
        },
        width: "0%",
      },
    ];
  }, []);

  return (
    <div className="px-3 py-3">
      <CardCollapsable
        initialExpanded
        title="Table"
        actionChildren={
          <div style={{ display: "flex" }}>
            <Button
              variant="add"
              onClick={() => {
                setData((prev) => {
                  return {
                    ...prev,
                    tableData: [
                      ...prev.tableData,
                      {
                        detail: "",
                        id: generateId(),
                      },
                    ],
                  };
                });
              }}
            ></Button>
          </div>
        }
      >
        <DataGridAuto
          columns={DatagridColDef}
          data={data.tableData}
          disablePagination
          disableSearch
          extraData={datagridExtra}
          keyField="id"
        ></DataGridAuto>
      </CardCollapsable>
    </div>
  );
}
