import { PageHeader } from "rcl-shared-components";
import { DataGridMuiFilter } from "./DataGridMuiFilter";
import { DataGridMuiEdit } from "./DataGridMuiEdit";
import { DataGridMuiOrdering } from "./DataGridMuiOrdering";
import { DataGridMuiSelectedState } from "./DataGridMuiSelectedState";
import { DataGridMuiEditMode } from "./DataGridMuiEditMode";
import { DataGridMuiCollapse } from "./DataGridMuiCollapse";

export const DataGridMuiEx = () => {
  return (
    <>

      <div className="container-fluid">
        <PageHeader title={"Data Grid Mui Example"} />
        <DataGridMuiFilter></DataGridMuiFilter>
      </div>

      <div className="container-fluid mt-5">
        <PageHeader title={"Data Grid Mui Edit Mode Example"} />
        <DataGridMuiEdit></DataGridMuiEdit>
      </div>

      <div className="container-fluid mt-5">
        <PageHeader title={"Data Grid Mui Edit Mode With Pin bar & Column-Row Ordering"} />
        <DataGridMuiOrdering></DataGridMuiOrdering>
      </div>

      <div className="container-fluid mt-5">
        <PageHeader title={"Data Grid Mui Selected State Table"} />
        <DataGridMuiSelectedState />
      </div>

      <div className="container-fluid mt-5">
        <PageHeader title={"Data Grid Mui Edit Mode Table"} />
        <DataGridMuiEditMode />
      </div>

      <div className="container-fluid mt-5">
        <PageHeader title={"Data Grid Mui Expand / Collapse Detail Panel"} />
        <DataGridMuiCollapse />
      </div>

    </>
  );
};
