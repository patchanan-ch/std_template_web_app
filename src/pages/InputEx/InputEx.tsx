import { PageHeader } from "rcl-shared-components";

import "./style.scss";
import { InputTextEx } from "./InputTextEx";
import { SelectEx } from "./SelectEx";
import { CheckboxEx } from "./CheckboxEx";
import { LookupEx } from "./LookupEx";
import { InputDateEx } from "./InputDateEx";
import { AutocompleteEx } from "./AutocompleteEx";
import { InputNumberEx } from "./InputNumberEx";
import { InputButtonEx } from "./InputButtonEx";
import { SwitchEx } from "./SwitchEx";

export function InputEx() {
  return (
    <div className="container-fluid page-input-ex">
      <PageHeader title={"Inputs Example"} />
      <InputTextEx></InputTextEx>
      <SelectEx></SelectEx>
      <CheckboxEx></CheckboxEx>
      <SwitchEx></SwitchEx>
      <InputButtonEx></InputButtonEx>
      <LookupEx></LookupEx>
      <InputDateEx></InputDateEx>
      <AutocompleteEx></AutocompleteEx>
      <InputNumberEx></InputNumberEx>
    </div>
  );
}
