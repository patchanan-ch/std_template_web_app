import { useState } from "react";
import { Box } from "@mui/material";
import { DataGridFilter, CardInfo } from "rcl-shared-components";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";

type SampleRow = {
  id: number;
  vessel: string;
  voyage: string;
  flag: number;
  bsaTeu: number;
  bsaEta: string;
  bookingTeu: number;
  bookingEta: string;
  gp20: number;
  gp40: number;
  pod: string;
  pot1: string;
};

const COLUMNS: GridColDef<SampleRow>[] = [
  { field: "vessel",      headerName: "Vessel",      width: 120 },
  { field: "voyage",      headerName: "Voyage",      width: 100 },
  { field: "flag",        headerName: "Flag",        width: 80,  type: "number" },
  { field: "bsaTeu",     headerName: "BSA TEU",     width: 110, type: "number" },
  { field: "bsaEta",     headerName: "BSA ETA",     width: 120 },
  { field: "bookingTeu", headerName: "Booking TEU", width: 130, type: "number" },
  { field: "bookingEta", headerName: "Booking ETA", width: 130 },
  { field: "gp20",       headerName: "20GP",        width: 90,  type: "number" },
  { field: "gp40",       headerName: "40GP",        width: 90,  type: "number" },
  { field: "pod",        headerName: "POD",         width: 100 },
  { field: "pot1",       headerName: "POT1",        width: 100 },
];

const ROWS: SampleRow[] = [
  { id: 1, vessel: "CAN",   voyage: "016W", flag: 0, bsaTeu: 100, bsaEta: "2026-06-01", bookingTeu: 100, bookingEta: "2026-06-01", gp20: 0, gp40: 0, pod: "THLKR", pot1: "" },
  { id: 2, vessel: "CAN",   voyage: "016W", flag: 0, bsaTeu: 100, bsaEta: "2026-06-01", bookingTeu: 100, bookingEta: "2026-06-01", gp20: 0, gp40: 0, pod: "THLKR", pot1: "" },
  { id: 3, vessel: "MSK",   voyage: "078E", flag: 1, bsaTeu: 180, bsaEta: "2026-06-05", bookingTeu: 150, bookingEta: "2026-06-05", gp20: 4, gp40: 3, pod: "CNSHA", pot1: "HKHKG" },
  { id: 4, vessel: "ONE",   voyage: "045W", flag: 0, bsaTeu: 150, bsaEta: "2026-06-08", bookingTeu: 120, bookingEta: "2026-06-08", gp20: 3, gp40: 2, pod: "SGSIN", pot1: "" },
  { id: 5, vessel: "COSCO", voyage: "112S", flag: 1, bsaTeu: 110, bsaEta: "2026-06-10", bookingTeu: 90,  bookingEta: "2026-06-10", gp20: 2, gp40: 2, pod: "MYPKG", pot1: "" },
  { id: 6, vessel: "EVER",  voyage: "089E", flag: 0, bsaTeu: 250, bsaEta: "2026-06-12", bookingTeu: 220, bookingEta: "2026-06-12", gp20: 5, gp40: 4, pod: "JPYOK", pot1: "" },
  { id: 7, vessel: "APL",   voyage: "056S", flag: 1, bsaTeu: 290, bsaEta: "2026-06-15", bookingTeu: 270, bookingEta: "2026-06-15", gp20: 6, gp40: 5, pod: "TWKHH", pot1: "" },
];

const CODE_EXAMPLE = `import { useState } from "react";
import { DataGridFilter } from "rcl-shared-components";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

type SampleRow = {
  id: number;
  vessel: string;
  voyage: string;
  // ... other fields
};

const columns: GridColDef<SampleRow>[] = [
  { field: "vessel", headerName: "Vessel", width: 120 },
  { field: "voyage", headerName: "Voyage", width: 100 },
  // ... other columns
];

function MyComponent() {
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  return (
    <DataGridFilter
      showToolbar
      autosizeColumns
      checkboxSelection        // checkbox all row
      rowSelectionOnClick      // show all row select )
      rows={rows}
      columns={columns}
      height={400}
      onRowSelectionModelChange={(model) => setSelectedIds(model)}
    />
  );
}`;

export const DataGridMuiSelectedState = () => {
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>({ type: "include", ids: new Set() });

  return (
    <CardInfo title="Selected State Table — checkboxSelection + rowSelectionOnClick">
      <DataGridFilter
        showToolbar
        autosizeColumns
        checkboxSelection
        rowSelectionOnClick
        rows={ROWS}
        columns={COLUMNS}
        height={400}
        onRowSelectionModelChange={(model) => setSelectedIds(model)}
      />

      {selectedIds.ids.size > 0 && (
        <Box sx={{ mt: 1, fontSize: 13, color: "#4E73DF" }}>
          Selected IDs: {[...selectedIds.ids].join(", ")}
        </Box>
      )}

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE} title="Example Code" />
      </Box>
    </CardInfo>
  );
};
