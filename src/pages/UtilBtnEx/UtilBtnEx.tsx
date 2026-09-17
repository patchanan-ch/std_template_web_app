import { ButtonUpload, CardInfo, PageHeader } from "rcl-shared-components";

function UtilBtnEx() {
  return (
    <div className="container-fluid">
      <PageHeader title={"Utility Buttons"} />
      <CardInfo title="Button Upload">
        <div style={{ marginBottom: 10 }}>
          This is a button with fixed onClick logic to allow user to select 1 or
          more file
        </div>
        <ButtonUpload
          onFileSelected={(files) => {
            alert(`You have selected
${files.map((file) => file.name).join("\n")}`);
          }}
          multipleFile
        ></ButtonUpload>
        <div style={{ marginTop: 10 }}>
          You can customize the button the same way as <b>Button</b> component
          and configure accepted file with props <b>"acceptFile"</b>
          <br />
          For syntax for the props, visit{" "}
          <a
            href="https://www.w3schools.com/tags/att_input_accept.asp"
            target="_blank"
          >
            https://www.w3schools.com/tags/att_input_accept.asp
          </a>
        </div>
      </CardInfo>
    </div>
  );
}

export { UtilBtnEx };
