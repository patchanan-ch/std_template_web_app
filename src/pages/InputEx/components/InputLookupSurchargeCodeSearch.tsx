import {
  InputLookup,
  InputLookupPropType,
  LookupUtils,
} from "rcl-shared-components";

export type LookupSurchargeCodeType = {
  SURCHARGE_CODE: string;
  DESCRIPTION: string;
  RECORD_STATUS: string;
};

type InputLookupSurchargeCodePropType = Pick<
  InputLookupPropType<LookupSurchargeCodeType>,
  | "label"
  | "criteria"
  | "value"
  | "onLookupToggle"
  | "checkIsSelected"
  | "style"
  | "required"
  | "disabled"
  | "onBlur"
  | "maxLength"
  | "className"
  | "size"
  | "isUpperCase"
  | "onSave"
  | "onCancel"
>;

export const InputLookupSurchargeCodeSearch = ({
  label = "Search Schg. Code",
  ...props
}: InputLookupSurchargeCodePropType) => {
  return (
    <InputLookup<LookupSurchargeCodeType>
      label={label}
      customization={{
        name: "SurchargeCode",
        title: "Search Surcharge Code Lookup",
        view: "VRL_CTF_SURCHARGE_CODE",
        fields: [
          {
            accessor: "SURCHARGE_CODE",
            label: "Surcharge Code",
          },
          {
            accessor: "DESCRIPTION",
            label: "Description",
          },
          {
            accessor: "RECORD_STATUS",
            label: "Status",
          },
        ],
        dataMapping: (data) => {
          return data.map((eData) => {
            return {
              ...eData,
              RECORD_STATUS: LookupUtils.mapRecordStatus(eData.RECORD_STATUS),
            };
          });
        },
      }}
      searchSelect
      isCloseWhenEscape
      {...props}
    ></InputLookup>
  );
};
