import { useState } from "react";
import {
  Button,
  CardInfo,
  PageHeader,
  RCLDialogButton,
  RCLEmailDialog,
  RCLViewDataDialog,
} from "rcl-shared-components";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";
import "./style.scss";

const VIEW_DATA = [
  { label: "Request ID", value: "REQ-2024-001" },
  { label: "Date", value: "27/02/2026" },
  { label: "Type", value: "Standard Request" },
  { label: "Priority", value: "High" },
];

const DESC =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const INFO_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley";

const YES_NO_CODE = `import { RCLDialogButton, Button } from "rcl-shared-components";

<RCLDialogButton
  trigger={(open) => (
    <Button label="Info" color="blue2" onClick={open} />
  )}
  status="info"
  title="Info Confirmation"
  description="Lorem Ipsum is simply dummy text..."
  onCancel={() => console.log("cancelled")}
  onConfirm={() => console.log("confirmed")}
/>`;

const CLOSE_CODE = `<RCLDialogButton
  trigger={(open) => (
    <Button label="Warning" color="yellow1" onClick={open} />
  )}
  status="warning"
  title="Warning"
  description="Lorem Ipsum is simply dummy text..."
  onClose={() => console.log("closed")}
/>`;

const NEXT_CODE = `<RCLDialogButton
  trigger={(open) => (
    <Button label="Approve " color="green1" onClick={open} />
  )}
  status="approve"
  title="Approve"
  description="Lorem Ipsum is simply dummy text..."
  onNext={() => console.log("next")}
/>`;

const CUSTOM_TRIGGER_CODE = `import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

// icon prop on Button controls the trigger button's icon.
// The dialog body icon is always determined by the status prop.
<RCLDialogButton
  trigger={(open) => (
    <Button label="Save" color="blue1" icon={faFloppyDisk} onClick={open} />
  )}
  status="approve"
  title="Save Confirmation"
  bodyTitle="Ready to Save?"
  description="Are you sure you want to save this record?"
  onCancel={() => console.log("cancelled")}
  onConfirm={() => console.log("confirmed")}
/>`;

const EMAIL_DIALOG_CODE = `import { RCLEmailDialog } from "rcl-shared-components";
import { useState } from "react";

const [open, setOpen] = useState(false);

<RCLEmailDialog
  open={open}
  title="Email Notification"
  createdBy="QAHQ04" // required by the API, not user-editable
  initialValues={{
    subject: "RCL OOG TERMINAL ACCEPTANCE -[THBKK]-[SGSIN]-1x20PC",
    fromEmail: "noreply@rclgroup.com",
    toEmail: "kathawut.m@rclgroup.com",
    ccEmails: "kathawut.m@rclgroup.com,manocha@rclgroup.com",
    moduleCode: "OOG",
  }}
  onClose={() => setOpen(false)}
  onCancel={() => setOpen(false)}
  onSend={(data) => {
    // data matches the send-email API payload:
    // { toEmail, subject, body, createdBy, fromEmail, aliasName,
    //   ccEmails, bccEmails, replyTo, moduleCode, attachments }
    console.log("email send", data);
    setOpen(false);
  }}
/>`;

const VIEW_DATA_PLAIN_CODE = `import { RCLViewDataDialog } from "rcl-shared-components";

<RCLViewDataDialog
  open={open}
  variant="plain"
  title="Popup Name"
  bodyTitle="Title Action"
  description="Description - Lorem Ipsum is simply dummy text..."
  data={[
    { label: "Request ID", value: "REQ-2024-001" },
    { label: "Date", value: "27/02/2026" },
    { label: "Type", value: "Standard Request" },
    { label: "Priority", value: "High" },
  ]}
  onClose={() => setOpen(false)}
  onCancel={() => setOpen(false)}
  onSave={() => setOpen(false)}
/>`;

const VIEW_DATA_ICON_CODE = `<RCLViewDataDialog
  open={open}
  variant="icon"
  title="Popup Name"
  bodyTitle="Title Action"
  description="Description - Lorem Ipsum is simply dummy text..."
  data={[
    { label: "Request ID", value: "REQ-2024-001" },
    { label: "Date", value: "27/02/2026" },
    { label: "Type", value: "Standard Request" },
    { label: "Priority", value: "High" },
  ]}
  onClose={() => setOpen(false)}
  onCancel={() => setOpen(false)}
  onSave={() => setOpen(false)}
/>`;

export const DialogEx = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [viewDataPlainOpen, setViewDataPlainOpen] = useState(false);
  const [viewDataIconOpen, setViewDataIconOpen] = useState(false);

  return (
    <div className="container-fluid">
      <PageHeader title="Dialog Example" />

      <CardInfo title="Confirmation Dialog">
        <p>
          Use <code>onConfirm</code> and/or <code>onCancel</code> to show
          Yes/Cancel buttons.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Info" color="blue2" disableIcon onClick={open} />
            )}
            status="info"
            title="Information confirmation"
            description={INFO_DESCRIPTION}
            onCancel={() => console.log("info cancelled")}
            onConfirm={() => console.log("info confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Warning"
                color="yellow1"
                disableIcon
                onClick={open}
              />
            )}
            status="warning"
            title="Warning Confirmation"
            description={DESC}
            onCancel={() => console.log("warning cancelled")}
            onConfirm={() => console.log("warning confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Approve"
                color="green1"
                disableIcon
                onClick={open}
              />
            )}
            status="approve"
            title="Approve Confirmation"
            description={DESC}
            onCancel={() => console.log("approve cancelled")}
            onConfirm={() => console.log("approve confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="System" color="gray1" disableIcon onClick={open} />
            )}
            status="system"
            title="System Confirmation"
            description={DESC}
            onCancel={() => console.log("system cancelled")}
            onConfirm={() => console.log("system confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Critical"
                color="red1"
                disableIcon
                onClick={open}
              />
            )}
            status="critical"
            title="Critical Confirmation"
            description={DESC}
            onCancel={() => console.log("critical cancelled")}
            onConfirm={() => console.log("critical confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Delete" color="red1" disableIcon onClick={open} />
            )}
            status="delete"
            title="Delete Confirmation"
            description={DESC}
            onCancel={() => console.log("delete cancelled")}
            onConfirm={() => console.log("delete confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Reject" color="red1" disableIcon onClick={open} />
            )}
            status="reject"
            title="Reject Confirmation"
            description={DESC}
            onCancel={() => console.log("reject cancelled")}
            onConfirm={() => console.log("reject confirmed")}
          />
        </div>
        <CodeBlock code={YES_NO_CODE} title="Example: Yes/Cancel" />
      </CardInfo>

      <CardInfo title="Close Dialog">
        <p>
          Use <code>onClose</code> alone to show a single Close button.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Info" color="blue2" disableIcon onClick={open} />
            )}
            status="info"
            title="Info"
            description={DESC}
            onClose={() => console.log("info closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Warning"
                color="yellow1"
                disableIcon
                onClick={open}
              />
            )}
            status="warning"
            title="Warning"
            description={DESC}
            onClose={() => console.log("warning closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Approve"
                color="green1"
                disableIcon
                onClick={open}
              />
            )}
            status="approve"
            title="Approve"
            description={DESC}
            onClose={() => console.log("approve closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="System" color="gray1" disableIcon onClick={open} />
            )}
            status="system"
            title="System"
            description={DESC}
            onClose={() => console.log("system closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Critical"
                color="red1"
                disableIcon
                onClick={open}
              />
            )}
            status="critical"
            title="Critical"
            description={DESC}
            onClose={() => console.log("critical closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Delete" color="red1" disableIcon onClick={open} />
            )}
            status="delete"
            title="Delete"
            description={DESC}
            onClose={() => console.log("delete closed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Reject" color="red1" disableIcon onClick={open} />
            )}
            status="reject"
            title="Reject"
            description={DESC}
            onClose={() => console.log("reject closed")}
          />
        </div>
        <CodeBlock code={CLOSE_CODE} title="Example: Close" />
      </CardInfo>

      <CardInfo title="Next Dialog">
        <p>
          Use <code>onNext</code> alone to show a single Next button.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Info " color="blue2" disableIcon onClick={open} />
            )}
            status="info"
            title="Info"
            description={DESC}
            onNext={() => console.log("info next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Warning "
                color="yellow1"
                disableIcon
                onClick={open}
              />
            )}
            status="warning"
            title="Warning"
            description={DESC}
            onNext={() => console.log("warning next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Approve "
                color="green1"
                disableIcon
                onClick={open}
              />
            )}
            status="approve"
            title="Approve"
            description={DESC}
            onNext={() => console.log("approve next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="System "
                color="gray1"
                disableIcon
                onClick={open}
              />
            )}
            status="system"
            title="System"
            description={DESC}
            onNext={() => console.log("system next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Critical "
                color="red1"
                disableIcon
                onClick={open}
              />
            )}
            status="critical"
            title="Critical"
            description={DESC}
            onNext={() => console.log("critical next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Delete " color="red1" disableIcon onClick={open} />
            )}
            status="delete"
            title="Delete"
            description={DESC}
            onNext={() => console.log("delete next")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button label="Reject " color="red1" disableIcon onClick={open} />
            )}
            status="reject"
            title="Reject"
            description={DESC}
            onNext={() => console.log("reject next")}
          />
        </div>
        <CodeBlock code={NEXT_CODE} title="Example: Next" />
      </CardInfo>

      <CardInfo title="Custom Dialog Trigger Icon">
        <p>
          The <code>icon</code> prop on <code>&lt;Button&gt;</code> inside{" "}
          <code>trigger</code> controls the button's icon only. The dialog body
          icon always follows the <code>status</code> prop.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Save"
                color="blue1"
                icon={faFloppyDisk}
                onClick={open}
              />
            )}
            status="approve"
            title="Save Confirmation"
            bodyTitle="Ready to Save?"
            description="Are you sure you want to save this record?"
            onCancel={() => console.log("save cancelled")}
            onConfirm={() => console.log("save confirmed")}
          />
          <RCLDialogButton
            trigger={(open) => (
              <Button
                label="Save"
                color="blue1"
                icon={faFloppyDisk}
                onClick={open}
              />
            )}
            status="approve"
            title="Save"
            bodyTitle="Saved!"
            description="Your record has been saved successfully."
            onClose={() => console.log("save closed")}
          />
        </div>
        <CodeBlock
          code={CUSTOM_TRIGGER_CODE}
          title="Example: Custom Trigger Icon"
        />
      </CardInfo>

      <CardInfo title="Email Dialog">
        <p>
          A form dialog for sending email notifications. Field names match
          the send-email API (<code>toEmail</code>, <code>subject</code>,{" "}
          <code>body</code> are required). <code>createdBy</code> is a
          required prop supplied by the caller (e.g. the logged-in user),
          not a visible field.
        </p>
        <div style={{ marginBottom: 16 }}>
          <Button
            label="Open Email Dialog"
            color="blue2"
            disableIcon
            onClick={() => setEmailOpen(true)}
          />
        </div>
        <RCLEmailDialog
          open={emailOpen}
          title="Email Notification"
          createdBy="QAHQ04"
          initialValues={{
            subject:
              "RCL OOG TERMINAL ACCEPTANCE -[THBKK]-[SGSIN]-1x20PC / THBKKOOG26002591",
            fromEmail: "noreply@rclgroup.com",
            toEmail: "kathawut.m@rclgroup.com",
            ccEmails: "kathawut.m@rclgroup.com,manocha@rclgroup.com",
            moduleCode: "OOG",
          }}
          onClose={() => setEmailOpen(false)}
          onCancel={() => setEmailOpen(false)}
          onSend={(data) => {
            console.log("email send", data);
            setEmailOpen(false);
          }}
        />
        <CodeBlock code={EMAIL_DIALOG_CODE} title="Example: Email Dialog" />
      </CardInfo>

      <CardInfo title="View Data Dialog">
        <p>
          Shows a read-only data grid inside a dialog. Use{" "}
          <code>variant="plain"</code> for a left-aligned header, or{" "}
          <code>variant="icon"</code> to show a centered status icon above
          the title.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <Button
            label="Open Plain ViewData"
            color="blue2"
            disableIcon
            onClick={() => setViewDataPlainOpen(true)}
          />
          <Button
            label="Open Icon ViewData"
            color="blue2"
            disableIcon
            onClick={() => setViewDataIconOpen(true)}
          />
        </div>
        <RCLViewDataDialog
          open={viewDataPlainOpen}
          variant="plain"
          title="Popup Name"
          bodyTitle="Title Action"
          description="Description - Lorem Ipsum is simply dummy text of the printing and typesetting."
          data={VIEW_DATA}
          onClose={() => setViewDataPlainOpen(false)}
          onCancel={() => setViewDataPlainOpen(false)}
          onSave={() => setViewDataPlainOpen(false)}
        />
        <RCLViewDataDialog
          open={viewDataIconOpen}
          variant="icon"
          title="Popup Name"
          bodyTitle="Title Action"
          description="Description - Lorem Ipsum is simply dummy text of the printing and typesetting."
          data={VIEW_DATA}
          onClose={() => setViewDataIconOpen(false)}
          onCancel={() => setViewDataIconOpen(false)}
          onSave={() => setViewDataIconOpen(false)}
        />
        <CodeBlock code={VIEW_DATA_PLAIN_CODE} title="Example: Plain Variant" />
        <CodeBlock code={VIEW_DATA_ICON_CODE} title="Example: Icon Variant" />
      </CardInfo>
    </div>
  );
};
