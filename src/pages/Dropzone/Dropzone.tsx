import { CardInfo, PageHeader, Dropzone } from "rcl-shared-components";

export const DropzoneEx = () => {
  const handleDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      console.log(`File: ${file.name}, Size: ${file.size}, Type: ${file.type}`);
    });
  };
  const handleSave = (allFiles: File[]) => {


    allFiles.forEach((file, index) => {
      console.log(`File ${index + 1}: ${file.name} (${file.size} bytes)`);
    });

    console.log('Saving all files:', allFiles);
  }
  return (
    <div className="container-fluid">
      <PageHeader title={"Drop zone Example"} />
      <CardInfo>
        <Dropzone
          onDrop={handleDrop}
          onSave={handleSave}
          maxSize={5000000}
          maxTotalSize={5000000}
          maxFiles={10}
          accept={{
            'image/*': ['.png', '.jpg'],
            'text/*': ['.txt', '.md'],
            'application/pdf': ['.pdf'],
            'application/vnd.ms-excel': ['.xls', '.xlsx'],
            'application/msword': ['.doc', '.docx'],

          }}
        />
      </CardInfo>
    </div>
  );
};
