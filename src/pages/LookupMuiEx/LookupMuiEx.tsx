import {
  GridColDef,
  GridDataSource,
  GridGetRowsResponse,
  GridSlotsComponent,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import {
  InputDataGridLookup,
  MuiMultiFilterOptionsType,
  MultiFilterType,
  MuiDataGridCustomPagination,
  ApiConfig,
  RCLResponseModel,
  PageHeader,
  CardInfo,
} from "rcl-shared-components";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";

// Type for Terminal Code lookup
type TerminalCodeType = {
  ROWNUM: number;
  TERMINAL_DEPOT_CODE: string;
  POINT_OR_PORT_CODE: string;
  SERVICE: string;
  VESSEL: string;
  CALCULATED_BY_CODE: string;
  CALCULATED_BY: string;
  AGREEMENT_NO: string;
  AGREEMENT_STATUS: string;
  LAST_BILLED_DATE: string;
  CALC_TYPE: string;
  CALCULATION_TYPE_CODE: string;
  TEU_CALC_BASIS: string;
  VENDOR_CODE: string;
  VENDOR_CURRENCY: string;
  DEPOT_FSC: string;
  TERMINAL_DEPOT_FLAG: string;
};

// Column definitions for Terminal Code
const terminalCodeColumns: GridColDef<TerminalCodeType>[] = [
  {
    field: "TERMINAL_DEPOT_CODE",
    headerName: "Terminal/Depot Code",
    align: "center",
    width: 170,
  },
  {
    field: "SERVICE",
    headerName: "Service",
    align: "center",
    width: 90,
  },
  {
    field: "VESSEL",
    headerName: "Vessel",
    align: "center",
    width: 90,
  },
  {
    field: "CALCULATED_BY",
    headerName: "Calculated by",
    align: "center",
    width: 125,
  },
  {
    field: "POINT_OR_PORT_CODE",
    headerName: "Port/Point",
    align: "center",
    width: 110,
  },
  {
    field: "AGREEMENT_NO",
    headerName: "Agreement No",
    align: "center",
    width: 150,
  },
  {
    field: "AGREEMENT_STATUS",
    headerName: "Agreement Status",
    align: "center",
    width: 150,
  },
  {
    field: "LAST_BILLED_DATE",
    headerName: "Last Bill Date",
    align: "center",
  },
  {
    field: "CALC_TYPE",
    headerName: "Calc Type",
    align: "center",
  },
  {
    field: "VENDOR_CODE",
    headerName: "Vendor",
    align: "center",
  },
  {
    field: "VENDOR_CURRENCY",
    headerName: "Currency",
    align: "center",
  },
];

// Code snippets for examples
const CODE_EXAMPLE_1 = `import { useState, useMemo } from "react";
import { GridColDef, GridDataSource, GridGetRowsResponse } from "@mui/x-data-grid";
import {
  InputDataGridLookup,
  MuiMultiFilterOptionsType,
  MultiFilterType,
  ApiConfig,
  RCLResponseModel,
} from "rcl-shared-components";

// Define your type
type TerminalCodeType = {
  ROWNUM: number;
  TERMINAL_DEPOT_CODE: string;
  SERVICE: string;
  VENDOR_CURRENCY: string;
  AGREEMENT_STATUS: string;
  // ... other fields
};

// Define columns
const columns: GridColDef<TerminalCodeType>[] = [
  { field: "TERMINAL_DEPOT_CODE", headerName: "Terminal/Depot Code", width: 170 },
  { field: "SERVICE", headerName: "Service", width: 90 },
  { field: "VENDOR_CURRENCY", headerName: "Currency", width: 100 },
  { field: "AGREEMENT_STATUS", headerName: "Agreement Status", width: 150 },
];

function MyComponent() {
  const [terminalCode, setTerminalCode] = useState("");
  const [activeFilters, setActiveFilters] = useState<MultiFilterType[]>([]);

  // Define filterOptions for MuiMultiFilter
  const filterOptions: MuiMultiFilterOptionsType[] = useMemo(() => [
    {
      field: "TERMINAL_DEPOT_CODE",
      fieldLabel: "Terminal/Depot Code",
      operator: [
        { value: "contains", label: "Contains", valueConfig: { type: "text" } },
        { value: "equals", label: "Equals", valueConfig: { type: "text" } },
      ],
    },
    {
      field: "SERVICE",
      fieldLabel: "Service",
      operator: [
        { value: "contains", label: "Contains", valueConfig: { type: "text" } },
      ],
    },
    {
      field: "VENDOR_CURRENCY",
      fieldLabel: "Currency",
      operator: [
        {
          value: "equals",
          label: "Equals",
          valueConfig: {
            type: "select",
            options: [
              { label: "USD", value: "USD" },
              { label: "THB", value: "THB" },
              { label: "SGD", value: "SGD" },
            ],
          },
        },
      ],
    },
    {
      field: "AGREEMENT_STATUS",
      fieldLabel: "Agreement Status",
      operator: [
        {
          value: "equals",
          label: "Is",
          valueConfig: {
            type: "select",
            options: [
              { label: "Approved", value: "Approved" },
              { label: "Modifying", value: "Modifying" },
              { label: "Waiting for approval", value: "Waiting for approval" },
              { label: "Rejected", value: "Rejected" },
            ],
          },
        },
      ],
    },
  ], []);

  // Server-side dataSource
  const dataSource: GridDataSource = useMemo(() => ({
    getRows: async (params) => {
      try {
        const response = await ApiConfig.getAxiosInstance("Default")
          .post<RCLResponseModel<GridGetRowsResponse>>(
            \`/api/lookup/terminal-code\`,
            {
              filterModel: params.filterModel,
              activeFilters: activeFilters,
              page: params.paginationModel?.page,
              pageSize: params.paginationModel?.pageSize,
              sortBy: params.sortModel[0]?.field,
              sortDir: params.sortModel[0]?.sort,
            }
          );
        return response.data.resultContent;
      } catch (e) {
        console.error("API Error:", e);
        return { rows: [], rowCount: 0 };
      }
    },
  }), [activeFilters]);

  return (
    <InputDataGridLookup
      label="Terminal Code"
      title="Terminal/Depot Lookup"
      value={terminalCode}
      dataSource={dataSource}
      columns={columns}
      getRowId={(row) => row.ROWNUM}
      onSelect={(row) => setTerminalCode(row.TERMINAL_DEPOT_CODE)}
      // MuiMultiFilter configuration
      filterOptions={filterOptions}
      activeFilters={activeFilters}
      onFiltersChange={setActiveFilters}
      // Options
      pageSize={10}
      pageSizeOptions={[10, 25, 50, 100]}
      showToolbar
      hideExport
      hideDensity
    />
  );
}`;

const CODE_EXAMPLE_2 = `import { useState, useMemo } from "react";
import { GridColDef, GridDataSource, GridGetRowsResponse } from "@mui/x-data-grid";
import {
  InputDataGridLookup,
  ApiConfig,
  RCLResponseModel,
} from "rcl-shared-components";

type TerminalCodeType = {
  ROWNUM: number;
  TERMINAL_DEPOT_CODE: string;
  SERVICE: string;
  // ... other fields
};

const columns: GridColDef<TerminalCodeType>[] = [
  { field: "TERMINAL_DEPOT_CODE", headerName: "Terminal/Depot Code", width: 170 },
  { field: "SERVICE", headerName: "Service", width: 90 },
];

function MyComponent() {
  const [terminalCode, setTerminalCode] = useState("");

  const dataSource: GridDataSource = useMemo(() => ({
    getRows: async (params) => {
      try {
        const response = await ApiConfig.getAxiosInstance("Default")
          .post<RCLResponseModel<GridGetRowsResponse>>(
            \`/api/lookup/terminal-code\`,
            {
              filterModel: params.filterModel,
              page: params.paginationModel?.page,
              pageSize: params.paginationModel?.pageSize,
              sortBy: params.sortModel[0]?.field,
              sortDir: params.sortModel[0]?.sort,
            }
          );
        return response.data.resultContent;
      } catch (e) {
        console.error("API Error:", e);
        return { rows: [], rowCount: 0 };
      }
    },
  }), []);

  return (
    <InputDataGridLookup
      label="Terminal Code"
      title="Terminal/Depot Lookup"
      value={terminalCode}
      dataSource={dataSource}
      columns={columns}
      getRowId={(row) => row.ROWNUM}
      onSelect={(row) => setTerminalCode(row.TERMINAL_DEPOT_CODE)}
      // Custom page size options with labels
      pageSize={10}
      pageSizeOptions={[
        { value: 5, label: "5 rows" },
        { value: 10, label: "10 rows" },
        { value: 25, label: "25 rows" },
        { value: 50, label: "50 rows" },
      ]}
      // Toolbar options
      showToolbar
      hideExport
      hideDensity
      hideColumnSelector
    />
  );
}`;

const CODE_EXAMPLE_3 = `import { useState, useMemo } from "react";
import { GridColDef, GridDataSource, GridGetRowsResponse, GridSlotsComponent } from "@mui/x-data-grid";
import {
  InputDataGridLookup,
  MuiDataGridCustomPagination,
  ApiConfig,
  RCLResponseModel,
} from "rcl-shared-components";

type TerminalCodeType = {
  ROWNUM: number;
  TERMINAL_DEPOT_CODE: string;
  SERVICE: string;
  // ... other fields
};

const columns: GridColDef<TerminalCodeType>[] = [
  { field: "TERMINAL_DEPOT_CODE", headerName: "Terminal/Depot Code", width: 170 },
  { field: "SERVICE", headerName: "Service", width: 90 },
];

function MyComponent() {
  const [terminalCode, setTerminalCode] = useState("");

  const dataSource: GridDataSource = useMemo(() => ({
    getRows: async (params) => {
      try {
        const response = await ApiConfig.getAxiosInstance("Default")
          .post<RCLResponseModel<GridGetRowsResponse>>(
            \`/api/lookup/terminal-code\`,
            {
              filterModel: params.filterModel,
              page: params.paginationModel?.page,
              pageSize: params.paginationModel?.pageSize,
              sortBy: params.sortModel[0]?.field,
              sortDir: params.sortModel[0]?.sort,
            }
          );
        return response.data.resultContent;
      } catch (e) {
        console.error("API Error:", e);
        return { rows: [], rowCount: 0 };
      }
    },
  }), []);

  // Custom slots with MuiDataGridCustomPagination
  const customSlots: Partial<GridSlotsComponent> = useMemo(() => ({
    pagination: () => (
      <MuiDataGridCustomPagination
        hideCounter={false}
        onPageChange={(page) => {
          console.log("Page changed to:", page);
          // Return false to prevent default page change
          return true;
        }}
      />
    ),
  }), []);

  return (
    <InputDataGridLookup
      label="Terminal Code"
      title="Terminal/Depot Lookup (Custom Pagination)"
      value={terminalCode}
      dataSource={dataSource}
      columns={columns}
      getRowId={(row) => row.ROWNUM}
      onSelect={(row) => setTerminalCode(row.TERMINAL_DEPOT_CODE)}
      pageSize={10}
      pageSizeOptions={[10, 25, 50]}
      slots={customSlots}
      showToolbar
      hideExport
      hideDensity
    />
  );
}`;

// Example 1: InputDataGridLookup + MuiMultiFilter (filterOptions)

function ExampleWithMuiMultiFilter() {
  const [terminalCode, setTerminalCode] = useState("");
  const [activeFilters, setActiveFilters] = useState<MultiFilterType[]>([]);

  // Define filterOptions for MuiMultiFilter
  const filterOptions: MuiMultiFilterOptionsType[] = useMemo(
    () => [
      {
        field: "TERMINAL_DEPOT_CODE",
        fieldLabel: "Terminal/Depot Code",
        operator: [
          {
            value: "contains",
            label: "Contains",
            valueConfig: { type: "text" },
          },
          {
            value: "equals",
            label: "Equals",
            valueConfig: { type: "text" },
          },
        ],
      },
      {
        field: "SERVICE",
        fieldLabel: "Service",
        operator: [
          {
            value: "contains",
            label: "Contains",
            valueConfig: { type: "text" },
          },
        ],
      },
      {
        field: "VENDOR_CURRENCY",
        fieldLabel: "Currency",
        operator: [
          {
            value: "equals",
            label: "Equals",
            valueConfig: {
              type: "select",
              options: [
                { label: "USD", value: "USD" },
                { label: "THB", value: "THB" },
                { label: "SGD", value: "SGD" },
              ],
            },
          },
        ],
      },
      {
        field: "AGREEMENT_STATUS",
        fieldLabel: "Agreement Status",
        operator: [
          {
            value: "equals",
            label: "Is",
            valueConfig: {
              type: "select",
              options: [
                { label: "Approved", value: "Approved" },
                { label: "Modifying", value: "Modifying" },
                {
                  label: "Waiting for approval",
                  value: "Waiting for approval",
                },
                { label: "Rejected", value: "Rejected" },
              ],
            },
          },
        ],
      },
    ],
    [],
  );

  // Server-side dataSource with activeFilters
  const dataSource: GridDataSource = useMemo(() => {
    return {
      getRows: async (params) => {
        try {
          const response = await ApiConfig.getAxiosInstance("Default").post<
            RCLResponseModel<GridGetRowsResponse>
          >(`https://marlin.rclgroup.com/DTBWSWebApp/lookup/example-api-lookup`, {
            filterModel: params.filterModel,
            activeFilters: activeFilters,
            page: params.paginationModel?.page,
            pageSize: params.paginationModel?.pageSize,
            sortBy: params.sortModel[0]?.field,
            sortDir: params.sortModel[0]?.sort,
          });
          return response.data.resultContent;
        } catch (e) {
          console.error("API Error:", e);
        }
        return { rows: [], rowCount: 0 };
      },
    };
  }, [activeFilters]);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Use filterOptions to display MuiMultiFilter component above the DataGrid
      </Typography>

      <InputDataGridLookup
        label="Terminal Code"
        title="Terminal/Depot Lookup"
        value={terminalCode}
        dataSource={dataSource}
        columns={terminalCodeColumns}
        getRowId={(row) => row.ROWNUM}
        onSelect={(row) => {
          setTerminalCode(row.TERMINAL_DEPOT_CODE);
        }}
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        onFiltersChange={setActiveFilters}
        pageSize={10}
        pageSizeOptions={[10, 25, 50, 100]}
        showToolbar
        hideExport
        hideDensity
      />

      {activeFilters.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Active Filters: {JSON.stringify(activeFilters)}
          </Typography>
        </Box>
      )}

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE_1} title="Example Code" />
      </Box>
    </Box>
  );
}

// Example 2: InputDataGridLookup + Toolbar Filter (without MuiMultiFilter)

function ExampleWithToolbarFilter() {
  const [terminalCode, setTerminalCode] = useState("");

  const dataSource: GridDataSource = useMemo(() => {
    return {
      getRows: async (params) => {
        try {
          const response = await ApiConfig.getAxiosInstance("Default").post<
            RCLResponseModel<GridGetRowsResponse>
          >(`https://marlin.rclgroup.com/DTBWSWebApp/lookup/example-api-lookup`, {
            filterModel: params.filterModel,
            page: params.paginationModel?.page,
            pageSize: params.paginationModel?.pageSize,
            sortBy: params.sortModel[0]?.field,
            sortDir: params.sortModel[0]?.sort,
          });
          return response.data.resultContent;
        } catch (e) {
          console.error("API Error:", e);
        }
        return { rows: [], rowCount: 0 };
      },
    };
  }, []);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Use MUI Toolbar with filter icon that shows badge with filter count
      </Typography>

      <InputDataGridLookup
        label="Terminal Code"
        title="Terminal/Depot Lookup"
        value={terminalCode}
        dataSource={dataSource}
        columns={terminalCodeColumns}
        getRowId={(row) => row.ROWNUM}
        onSelect={(row) => {
          setTerminalCode(row.TERMINAL_DEPOT_CODE);
        }}
        pageSize={10}
        pageSizeOptions={[
          { value: 5, label: "5 rows" },
          { value: 10, label: "10 rows" },
          { value: 25, label: "25 rows" },
          { value: 50, label: "50 rows" },
        ]}
        showToolbar
        hideExport
        hideDensity
        hideColumnSelector
      />

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE_2} title="Example Code" />
      </Box>
    </Box>
  );
}

// Example 3: Custom Pagination (MuiDataGridCustomPagination)

function ExampleWithCustomPagination() {
  const [terminalCode, setTerminalCode] = useState("");

  const dataSource: GridDataSource = useMemo(() => {
    return {
      getRows: async (params) => {
        try {
          const response = await ApiConfig.getAxiosInstance("Default").post<
            RCLResponseModel<GridGetRowsResponse>
          >(`https://marlin.rclgroup.com/DTBWSWebApp/lookup/example-api-lookup`, {
            filterModel: params.filterModel,
            page: params.paginationModel?.page,
            pageSize: params.paginationModel?.pageSize,
            sortBy: params.sortModel[0]?.field,
            sortDir: params.sortModel[0]?.sort,
          });
          return response.data.resultContent;
        } catch (e) {
          console.error("API Error:", e);
        }
        return { rows: [], rowCount: 0 };
      },
    };
  }, []);

  const customSlots: Partial<GridSlotsComponent> = useMemo(
    () => ({
      pagination: () => (
        <MuiDataGridCustomPagination
          hideCounter={false}
          onPageChange={(page) => {
            console.log("Page changed to:", page);
            return true;
          }}
        />
      ),
    }),
    [],
  );

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Use MuiDataGridCustomPagination component for custom pagination UI
        <br />
      </Typography>

      <InputDataGridLookup
        label="Terminal Code"
        title="Terminal/Depot Lookup (Custom Pagination)"
        value={terminalCode}
        dataSource={dataSource}
        columns={terminalCodeColumns}
        getRowId={(row) => row.ROWNUM}
        onSelect={(row) => {
          setTerminalCode(row.TERMINAL_DEPOT_CODE);
        }}
        pageSize={10}
        pageSizeOptions={[10, 25, 50]}
        slots={customSlots}
        showToolbar
        hideExport
        hideDensity
      />

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE_3} title="Example Code" />
      </Box>
    </Box>
  );
}

const CODE_EXAMPLE_CHECKBOX = `import { useState, useMemo } from "react";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { InputDataGridLookup } from "rcl-shared-components";

type ProductType = {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
};

const columns: GridColDef<ProductType>[] = [
  { field: "code", headerName: "Code", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "price", headerName: "Price", width: 100, align: "right" },
];

const sampleRows: ProductType[] = [
  { id: 1, code: "P001", name: "Product A", category: "Electronics", price: 1200 },
  { id: 2, code: "P002", name: "Product B", category: "Furniture", price: 3500 },
  { id: 3, code: "P003", name: "Product C", category: "Electronics", price: 850 },
];

function MyComponent() {
  const [label, setLabel] = useState("(none selected)");
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>({
    type: "include",
    ids: new Set(),
  });

  const handleMultiSelect = (rows: ProductType[]) => {
    setLabel(rows.map((r) => r.code).join(", ") || "(none selected)");
    // persist selection model so checkboxes restore state on reopen
    setSelectionModel({
      type: "include",
      ids: new Set(rows.map((r) => r.id)),
    });
  };

  return (
    <InputDataGridLookup
      label="Selected Products"
      title="Product Lookup (Multi-select)"
      value={label}
      disableInput
      rows={sampleRows}
      columns={columns}
      getRowId={(row) => row.id}
      checkboxSelection
      rowSelectionModel={selectionModel}
      onMultiSelect={handleMultiSelect}
      autosizeOnMount
    />
  );
}`;

// Example 4: Checkbox (multi-select) with client-side rows

type ProductType = {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
};

const productColumns: GridColDef<ProductType>[] = [
  { field: "code", headerName: "Code", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "price", headerName: "Price", width: 100, align: "right" },
];

const sampleProducts: ProductType[] = [
  { id: 1, code: "P001", name: "Product Alpha", category: "Electronics", price: 1200 },
  { id: 2, code: "P002", name: "Product Beta", category: "Furniture", price: 3500 },
  { id: 3, code: "P003", name: "Product Gamma", category: "Electronics", price: 850 },
  { id: 4, code: "P004", name: "Product Delta", category: "Clothing", price: 450 },
  { id: 5, code: "P005", name: "Product Epsilon", category: "Furniture", price: 2800 },
];

function ExampleWithCheckbox() {
  const [label, setLabel] = useState("(none selected)");
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>({
    type: "include",
    ids: new Set(),
  });

  const handleMultiSelect = (rows: ProductType[]) => {
    setLabel(rows.map((r) => r.code).join(", ") || "(none selected)");
    setSelectionModel({
      type: "include",
      ids: new Set(rows.map((r) => r.id)),
    });
  };

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Use <code>checkboxSelection</code> + <code>onMultiSelect</code> for multi-row selection.
        Pass <code>rowSelectionModel</code> back to restore checked state when reopened.
        <br />
        <code>autosizeOnMount</code> adjusts column widths automatically.
      </Typography>

      <InputDataGridLookup
        label="Selected Products"
        title="Product Lookup (Multi-select)"
        value={label}
        disableInput
        rows={sampleProducts}
        columns={productColumns}
        getRowId={(row) => row.id}
        checkboxSelection
        rowSelectionModel={selectionModel}
        onMultiSelect={handleMultiSelect}
        autosizeOnMount
        showToolbar
      />

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE_CHECKBOX} title="Example Code" />
      </Box>
    </Box>
  );
}
type CountryType = {
  CODE: string;
  NAME: string;
  CURRENCY: string;
  WEEKEND_DAY1: string;
  WEEKEND_DAY2: string;
};

const countryColumns: GridColDef<CountryType>[] = [
  { field: "CODE",         headerName: "Code",          width: 80 },
  { field: "NAME",         headerName: "Country Name",  flex: 1 },
  { field: "CURRENCY",     headerName: "Currency",      width: 100 },
  { field: "WEEKEND_DAY1", headerName: "Weekend Day 1", width: 120 },
  { field: "WEEKEND_DAY2", headerName: "Weekend Day 2", width: 120 },
];

const CODE_EXAMPLE_AUTOCOMPLETE = `type CountryType = { CODE: string; NAME: string; CURRENCY: string };

const countryDataSource: GridDataSource = {
  getRows: async (params) => {
    const search = (params.filterModel?.items ?? [])
      .filter((item) => item.value !== undefined && item.value !== "")
      .map((item) => ({
        column: item.field,
        value: String(item.value),
        exact: item.operator === "equals",
      }));
    const result = await getLookupData({
      view: "VRL_COUNTRY",
      page: (params.paginationModel?.page ?? 0) + 1,
      size: params.paginationModel?.pageSize ?? 10,
      sort: params.sortModel?.[0]?.field ?? "NAME",
      sort_direction: (params.sortModel?.[0]?.sort ?? "asc") as "asc" | "desc",
      ...(search.length > 0 && { search }),
    });
    return {
      rows: (result?.data ?? []).map((row, i) => ({ ...row, id: i })),
      rowCount: result?.total ?? 0,
    };
  },
};

function MyComponent() {
  const [countryName, setCountryName] = useState("");
  const [selected, setSelected] = useState<CountryType | null>(null);

  return (
    <InputDataGridLookup<CountryType>
      label="Country Name"
      title="Country Lookup"
      value={countryName}
      isUseAutoComplete //show suggestion
      customization={{ name: "NAME", view: "VRL_COUNTRY" }}
      minLength={2}
      onChangeAutoComplete={(val) => setCountryName(val)}
      // Popup
      columns={countryColumns}
      dataSource={countryDataSource}
      getRowId={(row) => row.CODE}
      showToolbar
      filterCriteria={{ field: "NAME" }}  // when open popup show criteria filter by NAME field
      pageSize={10}
      onSelect={(row) => {
        setCountryName(row.NAME);
        setSelected(row);
      }}
    />
  );
}`;

function ExampleWithAutocomplete() {
  const [countryName, setCountryName] = useState("");
  const [selected, setSelected] = useState<CountryType | null>(null);

  const countryDataSource = useMemo((): GridDataSource => ({
    getRows: async (params) => {
      const search = (params.filterModel?.items ?? [])
        .filter((item) => item.value !== undefined && item.value !== "")
        .map((item) => ({
          column: item.field,
          value: String(item.value),
          exact: item.operator === "equals",
        }));
      const response = await ApiConfig.getAxiosInstance("Lookup")
        .get<RCLResponseModel<any>>("/DTBWSWebApp/lookup/viewLookup/", {
          params: {
            view: "VRL_COUNTRY",
            page: (params.paginationModel?.page ?? 0) + 1,
            size: params.paginationModel?.pageSize ?? 10,
            sort: params.sortModel?.[0]?.field ?? "NAME",
            sort_direction: params.sortModel?.[0]?.sort ?? "asc",
            ...(search.length > 0 && { search: JSON.stringify(search) }),
          },
        });
      const result = response.data.resultContent as any;
      return {
        rows: (result?.data ?? []).map((row: CountryType, i: number) => ({ ...row, id: i })),
        rowCount: result?.total ?? 0,
      } as GridGetRowsResponse;
    },
  }), []);

  return (
    <Box>
      <InputDataGridLookup<CountryType>
        label="Country Name"
        title="Country Lookup"
        value={countryName}
        isUseAutoComplete
        customization={{ name: "NAME", view: "VRL_COUNTRY" }}
        minLength={2}
        onChangeAutoComplete={(val) => setCountryName(val)}
        columns={countryColumns}
        dataSource={countryDataSource}
        getRowId={(row) => row.CODE}
        showToolbar
        filterCriteria={{ field: "NAME" }}
        pageSize={10}
        pageSizeOptions={[10, 25, 50]}
        onSelect={(row) => {
          setCountryName(row.NAME);
          setSelected(row);
        }}
      />

      {selected && (
        <Box sx={{ mt: 2, p: 2, bgcolor: "grey.50", borderRadius: 1, fontSize: "0.85rem" }}>
          <strong>Code:</strong> {selected.CODE} &nbsp;|&nbsp;
          <strong>Name:</strong> {selected.NAME} &nbsp;|&nbsp;
          <strong>Currency:</strong> {selected.CURRENCY}
        </Box>
      )}

      <Box sx={{ mt: 3 }}>
        <CodeBlock code={CODE_EXAMPLE_AUTOCOMPLETE} title="Example Code" />
      </Box>
    </Box>
  );
}

// Main Example Component

export const LookupMuiEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title="Lookup(Mui) Example" />

      <CardInfo title="InputDataGridLookup + MuiMultiFilter (filterOptions)">
        <ExampleWithMuiMultiFilter />
      </CardInfo>

      <CardInfo title="InputDataGridLookup + Toolbar Filter">
        <ExampleWithToolbarFilter />
      </CardInfo>

      <CardInfo title="Custom Pagination (MuiDataGridCustomPagination)">
        <ExampleWithCustomPagination />
      </CardInfo>

      <CardInfo title="Checkbox Multi-select (checkboxSelection + autosizeOnMount)">
        <ExampleWithCheckbox />
      </CardInfo>

      <CardInfo title="Autocomplete + filterCriteria (server-side pre-filter)">
        <ExampleWithAutocomplete />
      </CardInfo>
    </div>
  );
};

export default LookupMuiEx;
