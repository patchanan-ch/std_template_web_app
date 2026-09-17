import { PageHeader } from "rcl-shared-components";
import { DataGridCard } from "./DataGridCard";

export const DataGridEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title={"Data Grid Example"} />
      <DataGridCard></DataGridCard>
    </div>
  );
};
