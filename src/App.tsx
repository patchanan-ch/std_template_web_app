import { ApiConfig, DefaultMUITemplate } from "rcl-shared-components";
import { MENUS } from "./consts/Menus";
import { SearchScreenEx } from "./pages/SearchScreenEx/SearchScreenEx";

import "rcl-shared-components/dist/assets/css/rcl-shared-components.css";
import { ButtonCircleEx } from "./pages/ButtonCircleEx/ButtonCircleEx";
import { ButtonEx } from "./pages/ButtonEx/ButtonEx";
import { DataGridEx } from "./pages/DataGridEx/DataGridEx";
import { DataGridMuiEx } from "./pages/DataGridMuiEx/DataGridMuiEx";
import { LookupMuiEx } from "./pages/LookupMuiEx/LookupMuiEx";
import { InputEx } from "./pages/InputEx/InputEx";
import { LoaderEx } from "./pages/LoaderEx/LoaderEx";
import { MaintScreenEx } from "./pages/MaintScreenEx/MaintScreenEx";
import { NotificationEx } from "./pages/NotificationEx/NotificationEx";
import { TextEditorEx } from "./pages/TextEditorEx/TextEditorEx";
import { ChartEx } from "./pages/ChartEx/ChartEx";
import { CalendarEx } from "./pages/CalendarEx/CalendarEx";
import { UtilBtnEx } from "./pages/UtilBtnEx/UtilBtnEx";
import { DropzoneEx } from "./pages/Dropzone/Dropzone";
import { TemplateMUI } from "./pages/Template/TemplateMUI";
import { StepperEx } from "./pages/Stepper/Stepper";
import { SpeedDialEx } from "./pages/SpeedDialEx/SpeedDialEx";
import { DialogEx } from "./pages/DialogEx/DialogEx";

// This code is used for initializing config for the API endpoint
// By default, the endpoint is set to the same host the site was deployed (window.location.origin)
// Usually in local, Authentication is disabled, APIs are called to the local web services and Lookups are called to marlin

// Since 3.0.0 ApiService is removed and now replace with ApiConfig to improve readability
if (import.meta.env.MODE === "development") {
  ApiConfig.setUrlEndpoint("Lookup", "http://marlin.rclgroup.com");
  ApiConfig.setUrlEndpoint("Default", "http://localhost:8081", {
    headers: {
      "RCL-token": "BypassToken",
      "RCL-user": "local",
      "RCL-fsc": "R",
    },
  });
}

function App() {
  return (
    <>
      {
        <DefaultMUITemplate
          appVersion="3.1.5"
          routeGroups={[
            {
              groupName: "Components",
              routes: [
                {
                  name: "Loader",
                  path: MENUS.LoaderEx.url,
                  element: <LoaderEx></LoaderEx>,
                },
                {
                  name: "Notification",
                  path: MENUS.NotificationEx.url,
                  element: <NotificationEx></NotificationEx>,
                },
                {
                  name: "Buttons",
                  path: MENUS.ButtonEx.url,
                  element: <ButtonEx></ButtonEx>,
                },
                {
                  name: "Buttons (Circle)",
                  path: MENUS.ButtonCircleEx.url,
                  element: <ButtonCircleEx></ButtonCircleEx>,
                },
                {
                  name: "Utility Buttons",
                  path: MENUS.UtilBtnEx.url,
                  element: <UtilBtnEx></UtilBtnEx>,
                },
                {
                  name: "Inputs",
                  path: MENUS.InputEx.url,
                  element: <InputEx></InputEx>,
                },
                {
                  name: "Datagrid",
                  path: MENUS.DatagridEx.url,
                  element: <DataGridEx></DataGridEx>,
                },
                {
                  name: "Datagrid(Mui)",
                  path: MENUS.DatagridMuiEx.url,
                  element: <DataGridMuiEx></DataGridMuiEx>,
                },
                {
                  name: "Lookup(Mui)",
                  path: MENUS.LookupMuiEx.url,
                  element: <LookupMuiEx></LookupMuiEx>,
                },

                {
                  name: "Text Editor",
                  path: MENUS.TextEditorEx.url,
                  element: <TextEditorEx></TextEditorEx>,
                },
                {
                  name: "Chart",
                  path: MENUS.ChartEx.url,
                  element: <ChartEx></ChartEx>,
                },
                {
                  name: "Calendar",
                  path: MENUS.CalendarEx.url,
                  element: <CalendarEx></CalendarEx>,
                },
                {
                  name: "Dropzone",
                  path: MENUS.Dropzone.url,
                  element: <DropzoneEx></DropzoneEx>,
                },
                {
                  name: "Stepper",
                  path: MENUS.Stepper.url,
                  element: <StepperEx></StepperEx>,
                },
                {
                  name: "Speed Dial",
                  path: MENUS.SpeedDialEx.url,
                  element: <SpeedDialEx></SpeedDialEx>,
                },
                {
                  name: "Dialog",
                  path: MENUS.DialogEx.url,
                  element: <DialogEx></DialogEx>,
                },

              ],
            },
            {
              groupName: "Forms",
              routes: [
                {
                  name: "Search Card",
                  path: MENUS.SearchScreenEx.url,
                  element: <SearchScreenEx></SearchScreenEx>,
                },
                {
                  name: "Maint Screen",
                  path: MENUS.MaintScreenEx.url,
                  element: <MaintScreenEx></MaintScreenEx>,
                },
              ],
            },

            {
              groupName: "Template",
              routes: [
                {
                  name: "Template MUI",
                  path: MENUS.Template.url,
                  element: <TemplateMUI></TemplateMUI>,
                },
              ],
            },
          ]}
          baseUrl={`${import.meta.env.BASE_URL}`}
          devValue={import.meta.env.MODE === "development" ? {} : undefined}
        />
      }
    </>
  );
}

export default App;
