import { CardInfo, PageHeader, RCLTextEditorOld } from "rcl-shared-components";
import { useState } from "react";

export const TextEditorEx = () => {
  const [data, setData] = useState("");

  return (
    <div className="container-fluid">
      <PageHeader title={"Text Editor Example"} />
      <CardInfo>
        <RCLTextEditorOld
          oldImgSrc={[]}
          value={data}
          onChange={setData}
          editorStyle={{ height: "500px" }}
        ></RCLTextEditorOld>
      </CardInfo>
    </div>
  );
};
