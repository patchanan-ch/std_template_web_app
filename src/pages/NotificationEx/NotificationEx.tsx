import { useState } from "react";
import { Button, CardInfo, PageHeader } from "rcl-shared-components";
import { Alert, AlertTitle, IconButton, Snackbar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";
import "./style.scss";

type AlertVariant = "success" | "warning" | "error" | "info";

const ALERT_ICONS = {
  success: <FontAwesomeIcon icon={faCircleCheck} />,
  warning: <FontAwesomeIcon icon={faTriangleExclamation} />,
  error: <FontAwesomeIcon icon={faCircleXmark} />,
  info: <FontAwesomeIcon icon={faCircleInfo} />,
};

const ALERTS = [
  {
    variant: "success" as const,
    status: "SUCCESS" as const,
    heading: "Success Alert",
    usage:
      "Used to confirm that an action was completed successfully, such as data saved, account created, or form submitted.",
    title: "Action Successful",
    description: "Your changes have been saved successfully.",
  },
  {
    variant: "warning" as const,
    status: "WARNING" as const,
    heading: "Warning Alert",
    usage:
      "Used to warn users before taking certain actions, such as missing required fields, potential data loss, or irreversible operations.",
    title: "Security Warning",
    description: "Your password will expire in 3 days.",
  },
  {
    variant: "error" as const,
    status: "ERROR" as const,
    heading: "Error Alert",
    usage:
      "Used to notify users of system errors, such as failed data submissions, connection failures, or invalid input.",
    title: "Error occurred",
    description: "Unable to connect to the database. Please try again.",
  },
  {
    variant: "info" as const,
    status: "INFO" as const,
    heading: "Info Alert",
    usage:
      "Used to provide additional information or general guidance, such as usage instructions, helpful tips, or system updates.",
    title: "General Information",
    description: "The system has been updated to the latest version.",
  },
];

const AlertPreview = ({ variant }: { variant: AlertVariant }) => {
  const alert = ALERTS.find((item) => item.variant === variant)!;
  const [visible, setVisible] = useState(true);

  return visible ? (
    <Alert
      className={`notification-preview notification-preview--${variant}`}
      severity={variant}
      iconMapping={ALERT_ICONS}
      action={
        <IconButton
          aria-label={`Dismiss ${alert.heading}`}
          color="inherit"
          size="small"
          onClick={() => setVisible(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      }
    >
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.description}
    </Alert>
  ) : null;
};

const alertCode = (variant: AlertVariant) => {
  const alert = ALERTS.find((item) => item.variant === variant)!;

  return `import { Alert, AlertTitle } from "@mui/material";

<Alert severity="${variant}" onClose={handleClose}>
  <AlertTitle>${alert.title}</AlertTitle>
  ${alert.description}
</Alert>`;
};

export const NotificationEx = () => {
  const [liveAlert, setLiveAlert] = useState<{
    variant: AlertVariant;
    duration: number | null;
    key: number;
  } | null>(null);

  const showAlert = (variant: AlertVariant, duration: number | null = 2500) => {
    setLiveAlert({
      variant,
      duration,
      key: Date.now(),
    });
  };

  return (
    <div className="container-fluid notification-example-page">
      <PageHeader title="Alert Notification Example" />

      <CardInfo>
        <div className="notification-trigger-list">
          {ALERTS.slice(0, 3).map((alert) => (
            <div className="notification-trigger" key={alert.variant}>
              <Button
                label="Click"
                disableIcon
                onClick={() => showAlert(alert.variant)}
              />
              <span>To add a {alert.variant} alert notification</span>
            </div>
          ))}
        </div>
      </CardInfo>

      <CardInfo>
        <div className="notification-trigger-list">
          <div className="notification-trigger">
            <Button
              label="Click"
              disableIcon
              onClick={() => showAlert("success", 1000)}
            />
            <span>To add an alert notification with custom duration</span>
          </div>
          <div className="notification-trigger">
            <Button
              label="Click"
              disableIcon
              onClick={() =>
                showAlert("success", null)
              }
            />
            <span>To add an alert notification without timeout</span>
          </div>
        </div>
      </CardInfo>

      <CardInfo>
        <div className="notification-showcase">
          {ALERTS.map((alert) => (
            <section className="notification-section" key={alert.variant}>
              <h2>{alert.heading}</h2>
              <p className="notification-section__usage">{alert.usage}</p>
              <AlertPreview variant={alert.variant} />
              <CodeBlock
                className="notification-code-block"
                code={alertCode(alert.variant)}
                title={`Example: Notification Alert (${alert.heading.replace(" Alert", "")})`}
              />
            </section>
          ))}

          <section className="notification-section notification-best-practices">
            <h2>Best Practices</h2>
            <ul>
              <li>Keep messages concise, clear, and easy to understand</li>
              <li>
                Always provide a resolution or next step in the Description (for
                Error and Warning)
              </li>
              <li>
                Avoid displaying multiple Alerts simultaneously on a single page
              </li>
              <li>Users can dismiss the Alert using the X button</li>
            </ul>
          </section>
        </div>
      </CardInfo>

      <Snackbar
        key={liveAlert?.key}
        open={Boolean(liveAlert)}
        autoHideDuration={liveAlert?.duration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={(_, reason) => {
          if (reason !== "clickaway") setLiveAlert(null);
        }}
      >
        {liveAlert ? (
          <Alert
            className={`notification-preview notification-live-alert notification-preview--${liveAlert.variant}`}
            severity={liveAlert.variant}
            iconMapping={ALERT_ICONS}
            action={
              <IconButton
                aria-label="Dismiss notification"
                color="inherit"
                size="small"
                onClick={() => setLiveAlert(null)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </IconButton>
            }
          >
            <AlertTitle>
              {ALERTS.find((item) => item.variant === liveAlert.variant)!.title}
            </AlertTitle>
            {
              ALERTS.find((item) => item.variant === liveAlert.variant)!
                .description
            }
          </Alert>
        ) : undefined}
      </Snackbar>
    </div>
  );
};
