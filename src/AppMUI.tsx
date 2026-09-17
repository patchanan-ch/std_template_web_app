import { ApiConfig, DefaultMUITemplate } from "rcl-shared-components";
import "rcl-shared-components/dist/assets/css/rcl-shared-components.css";

// API Config
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

export default function AppMUI() {
  return (
    <DefaultMUITemplate
      routeGroups={[
        {
          groupName: "Service Management",
          routes: [
            {
              name: "Service Forecast",
              path: "/manage/forecast",
              element: <div>Service Forecast Page</div>,
              menuId: "IS_ADM",
            },
            {
              name: "Service Monitor",
              path: "/manage/monitor",
              element: <div>Service Monitor Page</div>,
              menuId: "IS_ADM",
            },
            {
              name: "Service Report",
              path: "/manage/report",
              element: <div>Service Report Page</div>,
              menuId: "IS_ADM",
            },
          ],
        },
        {
          isRoute: true,
          groupName: "Dashboard",
          routes: [
            {
              name: "Main Dashboard",
              path: "/dashboard",
              element: <div>Dashboard Page</div>,
              menuId: "IS_ADM",
            },
          ],
        },
        {
          isRoute: false,
          groupName: "Settings",
          routes: [
            {
              name: "User Settings",
              path: "/settings/user",
              element: <div>User Settings Page</div>,
              menuId: "IS_ADM",
            },
            {
              name: "System Settings",
              path: "/settings/system",
              element: <div>System Settings Page</div>,
              menuId: "IS_ADM",
            },
          ],
        },
      ]}
      appVersion={"1.0.0"}
      baseUrl={`${import.meta.env.BASE_URL}`}
      devValue={import.meta.env.MODE === "development" ? {} : undefined}
    />
  );
}