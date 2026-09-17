import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Chip, Box, Typography, Divider } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { DataGridFilter, CardInfo } from "rcl-shared-components";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";

// ─── Types ────────────────────────────────────────────────────────────────────

type ContainerSummary = {
  sizeType: string;
  specialHandling: string[];
  handling: number;
  totalLaden: number;
  totalEmpty: number;
  availableLaden: number;
  availableEmpty: number;
  inIOLaden: number;
  inIOEmpty: number;
};

type BookingRow = {
  id: string;
  bookingBL: string;
  bookingType: string;
  pickupLocation: string;
  pickupSub: string;
  dropoffLocation: string;
  dropoffSub: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  effectiveDate: string;
  expiryDate: string;
  service: string;
  vessel: string;
  voyage: string;
  direction: string;
  laden: number;
  empty: number;
  contractNo: string;
  priority: number;
  fromLocation: string;
  fromSub: string;
  toLocation: string;
  toSub: string;
  containers: ContainerSummary[];
};

// ─── Mock Data ────────────────────────────────────────────────────────────────

const bookingRows: BookingRow[] = [
  {
    id: "BLCHC2600185-1",
    bookingBL: "BLCHC2600185",
    bookingType: "Booking",
    pickupLocation: "THLKR",
    pickupSub: "Depot: Thna-P",
    dropoffLocation: "THLCH",
    dropoffSub: "Terminal THHLT",
    status: "Confirmed",
    effectiveDate: "12/02/2026",
    expiryDate: "13/02/2026",
    service: "RGA4",
    vessel: "HEL",
    voyage: "02606W",
    direction: "W",
    laden: 20,
    empty: 1,
    contractNo: "NHPRIZ5001124",
    priority: 1,
    fromLocation: "THLKR",
    fromSub: "Depot: Thna-P",
    toLocation: "THLCH",
    toSub: "Terminal THHLT",
    containers: [
      {
        sizeType: "20 / GP",
        specialHandling: ["Normal: 10", "COC"],
        handling: 25,
        totalLaden: 25,
        totalEmpty: 0,
        availableLaden: 6,
        availableEmpty: 0,
        inIOLaden: 19,
        inIOEmpty: 0,
      },
    ],
  },
  {
    id: "BLCHC2600185-2",
    bookingBL: "BLCHC2600185",
    bookingType: "Booking",
    pickupLocation: "THLKR",
    pickupSub: "Depot: Thna-P",
    dropoffLocation: "THLCH",
    dropoffSub: "Terminal THHLT",
    status: "Confirmed",
    effectiveDate: "12/02/2026",
    expiryDate: "13/02/2026",
    service: "RGA4",
    vessel: "HEL",
    voyage: "02606W",
    direction: "W",
    laden: 20,
    empty: 1,
    contractNo: "NHPRIZ5001124",
    priority: 1,
    fromLocation: "THLKR",
    fromSub: "Depot: Thna-P",
    toLocation: "THLCH",
    toSub: "Terminal THHLT",
    containers: [
      {
        sizeType: "20 / GP",
        specialHandling: ["Normal: 10", "COC"],
        handling: 25,
        totalLaden: 25,
        totalEmpty: 0,
        availableLaden: 6,
        availableEmpty: 0,
        inIOLaden: 19,
        inIOEmpty: 0,
      },
    ],
  },
  {
    id: "BLCHC2600185-3",
    bookingBL: "BLCHC2600185",
    bookingType: "Booking",
    pickupLocation: "THLKR",
    pickupSub: "Depot: Thna-P",
    dropoffLocation: "THLCH",
    dropoffSub: "Terminal THHLT",
    status: "Pending",
    effectiveDate: "12/02/2026",
    expiryDate: "13/02/2026",
    service: "RGA4",
    vessel: "HEL",
    voyage: "02606W",
    direction: "W",
    laden: 20,
    empty: 1,
    contractNo: "NHPRIZ5001124",
    priority: 1,
    fromLocation: "THLKR",
    fromSub: "Depot: Thna-P",
    toLocation: "THLCH",
    toSub: "Terminal THHLT",
    containers: [
      {
        sizeType: "20 / GP",
        specialHandling: ["Normal: 8"],
        handling: 10,
        totalLaden: 10,
        totalEmpty: 2,
        availableLaden: 3,
        availableEmpty: 1,
        inIOLaden: 7,
        inIOEmpty: 1,
      },
    ],
  },
  {
    id: "BLCHC2600185-4",
    bookingBL: "BLCHC2600185",
    bookingType: "Booking",
    pickupLocation: "THLKR",
    pickupSub: "Depot: Thna-P",
    dropoffLocation: "THLCH",
    dropoffSub: "Terminal THHLT",
    status: "Confirmed",
    effectiveDate: "12/02/2026",
    expiryDate: "13/02/2026",
    service: "RGA4",
    vessel: "HEL",
    voyage: "02606W",
    direction: "W",
    laden: 20,
    empty: 1,
    contractNo: "NHPRIZ5001124",
    priority: 1,
    fromLocation: "THLKR",
    fromSub: "Depot: Thna-P",
    toLocation: "THLCH",
    toSub: "Terminal THHLT",
    containers: [
      {
        sizeType: "20 / GP",
        specialHandling: ["Normal: 10", "COC"],
        handling: 25,
        totalLaden: 25,
        totalEmpty: 0,
        availableLaden: 6,
        availableEmpty: 0,
        inIOLaden: 19,
        inIOEmpty: 0,
      },
    ],
  },
];

// ─── Status Badge ─────────────────────────────────────────────────────────────

const StatusChip = ({ status }: { status: BookingRow["status"] }) => {
  const colorMap: Record<BookingRow["status"], "success" | "warning" | "error"> = {
    Confirmed: "success",
    Pending: "warning",
    Cancelled: "error",
  };
  return (
    <Chip
      label={status}
      color={colorMap[status]}
      size="small"
      sx={{ fontWeight: 600, fontSize: 11, fontFamily: "'Nunito', sans-serif" }}
    />
  );
};

// ─── Detail Panel ─────────────────────────────────────────────────────────────

const BookingDetailPanel = ({ row }: { row: BookingRow }) => (
  <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", minHeight: 140 }}>
    {/* Left: booking info + route */}
    <Box sx={{ flex: 1 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
          {row.bookingBL}
        </Typography>
        <Chip
          label={row.bookingType}
          size="small"
          sx={{ fontSize: 10, height: 18, bgcolor: "#EBF0FB", color: "#4E73DF", fontWeight: 600 }}
        />
        <StatusChip status={row.status} />
      </Box>

      {/* Contract / date */}
      <Typography sx={{ fontSize: 11, color: "#4E73DF", mb: 1.5, fontFamily: "'Nunito', sans-serif" }}>
        {row.contractNo} &nbsp;|&nbsp; {row.effectiveDate} - {row.expiryDate}
      </Typography>

      {/* Route */}
      <Box sx={{ mb: 0.5 }}>
        <Typography sx={{ fontSize: 10, color: "#8896A5", textTransform: "uppercase", letterSpacing: 0.5, mb: 0.5, fontFamily: "'Nunito', sans-serif" }}>
          Route
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "#F0F4FF",
            border: "1px solid #D0D9F5",
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
          }}
        >
          {/* FROM */}
          <Box>
            <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>Location</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
              {row.fromLocation}
            </Typography>
            <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>{row.fromSub}</Typography>
          </Box>

          {/* Arrow + transport */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
            <Box sx={{ flex: 1, borderTop: "2px dashed #B0BEC5" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, bgcolor: "#fff", px: 1, py: 0.25, borderRadius: 1, border: "1px solid #E3E6F0" }}>
              <LocalShippingIcon sx={{ fontSize: 14, color: "#4E73DF" }} />
              <Typography sx={{ fontSize: 10, color: "#4E73DF", fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>Truck</Typography>
            </Box>
            <Box sx={{ flex: 1, borderTop: "2px dashed #B0BEC5" }} />
          </Box>

          {/* TO */}
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>Location</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
              {row.toLocation}
            </Typography>
            <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>{row.toSub}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Service details */}
      <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
        {[
          { label: "Service", value: row.service },
          { label: "Vessel", value: row.vessel },
          { label: "Voyage", value: row.voyage },
          { label: "Direction", value: row.direction },
          { label: "Priority", value: String(row.priority) },
          { label: "Contract", value: row.contractNo },
        ].map(({ label, value }) => (
          <Box key={label}>
            <Typography sx={{ fontSize: 9, color: "#8896A5", textTransform: "uppercase", fontFamily: "'Nunito', sans-serif" }}>{label}</Typography>
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>{value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>

    {/* Right: Container Summary */}
    <Box
      sx={{
        minWidth: 210,
        bgcolor: "#fff",
        border: "1px solid #E3E6F0",
        borderRadius: 2,
        p: 1.5,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 11, color: "#4E73DF", mb: 1, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "'Nunito', sans-serif" }}>
        Container Summary
      </Typography>

      {row.containers.map((c, i) => (
        <Box key={i}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.75 }}>
            <Box>
              <Typography sx={{ fontSize: 9, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>Size / Type</Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 800, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>{c.sizeType}</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 9, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>Special Handling</Typography>
              <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.25 }}>
                {c.specialHandling.map((sh) => (
                  <Chip key={sh} label={sh} size="small" sx={{ fontSize: 9, height: 16, bgcolor: "#EBF0FB", color: "#4E73DF", fontWeight: 600 }} />
                ))}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ mb: 0.75 }} />

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0.5, mb: 0.5 }}>
            {[
              { label: "Handling", value: c.handling, color: "#4E73DF" },
              { label: "Total Laden", value: c.totalLaden, color: "#1CC88A" },
              { label: "Total Empty", value: c.totalEmpty, color: "#E74A3B" },
            ].map(({ label, value, color }) => (
              <Box key={label} sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 9, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>{label}</Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 800, color, fontFamily: "'Nunito', sans-serif" }}>{value}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.5 }}>
            {[
              { label: "Available", value: c.availableLaden },
              { label: "Available", value: c.availableEmpty },
              { label: "In IO", value: c.inIOLaden },
              { label: "In IO", value: c.inIOEmpty },
            ].map(({ label, value }, idx) => (
              <Box key={idx}>
                <Typography sx={{ fontSize: 9, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>{label}</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

// ─── Column Definitions ───────────────────────────────────────────────────────

const columns: GridColDef<BookingRow>[] = [
  {
    field: "bookingBL",
    headerName: "Booking/BL",
    width: 140,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.bookingBL}
        </Typography>
        <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.bookingType}
        </Typography>
      </Box>
    ),
  },
  {
    field: "pickupLocation",
    headerName: "Pick up",
    width: 110,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.pickupLocation}
        </Typography>
        <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.pickupSub}
        </Typography>
      </Box>
    ),
  },
  {
    field: "dropoffLocation",
    headerName: "Drop off",
    width: 110,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#2F3C53", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.dropoffLocation}
        </Typography>
        <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>
          {params.row.dropoffSub}
        </Typography>
      </Box>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    renderCell: (params) => <StatusChip status={params.row.status} />,
  },
  {
    field: "effectiveDate",
    headerName: "Effective Date - Expiry Date",
    width: 200,
    renderCell: (params) => (
      <Typography sx={{ fontSize: 12, fontFamily: "'Nunito', sans-serif" }}>
        {params.row.effectiveDate} – {params.row.expiryDate}
      </Typography>
    ),
  },
  { field: "service", headerName: "Service", width: 80 },
  { field: "vessel", headerName: "Vessel", width: 80 },
  {
    field: "voyage",
    headerName: "Voyage",
    width: 100,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: 12, fontFamily: "'Nunito', sans-serif" }}>{params.row.voyage}</Typography>
        <Typography sx={{ fontSize: 10, color: "#8896A5", fontFamily: "'Nunito', sans-serif" }}>
          Direction: {params.row.direction}
        </Typography>
      </Box>
    ),
  },
  { field: "laden", headerName: "Laden", width: 70, type: "number" },
  { field: "empty", headerName: "Empty", width: 70, type: "number" },
];

// ─── Example Code ─────────────────────────────────────────────────────────────

const CODE_EXAMPLE = `import { DataGridFilter } from "rcl-shared-components";
import { GridColDef } from "@mui/x-data-grid";

type MyRow = { id: string; /* ...other fields */ };

const columns: GridColDef<MyRow>[] = [
  { field: "id", headerName: "ID", width: 140 },
  // ...other columns
];

const MyDetailPanel = ({ row }: { row: MyRow }) => (
  <Box sx={{ p: 2 }}>
    {/* render expanded detail content here */}
  </Box>
);

export const MyComponent = () => (
  <DataGridFilter
    rows={rows}
    columns={columns}
    getRowId={(row) => row.id}
    checkboxSelection
    height={520}
    showToolbar
    hideExport
    hideDensity
    getDetailPanelContent={(row) => <MyDetailPanel row={row as MyRow} />}
    getDetailPanelHeight={() => 220}
  />
);`;

// ─── Example Component ────────────────────────────────────────────────────────

export const DataGridMuiCollapse = () => {
  const [rows, setRows] = useState<BookingRow[]>(bookingRows);

  return (
    <CardInfo title="Expand / Collapse Detail Panel — getDetailPanelContent + getDetailPanelHeight">
      <DataGridFilter
        autosizeColumns
        editMode
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        checkboxSelection
        height={520}
        showToolbar
        hideExport
        hideDensity
        getDetailPanelContent={(row) => <BookingDetailPanel row={row as BookingRow} />}
        getDetailPanelHeight={() => 220}
        onRowUpdate={(newRow, _oldRow) => {
          setRows((prev) => prev.map((r) => (r.id === newRow.id ? newRow : r)));
          return newRow;
        }}
        onRowDelete={(row) => {
          setRows((prev) => prev.filter((r) => r.id !== row.id));
        }}
      />

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE} title="Example Code" />
      </Box>
    </CardInfo>
  );
};
