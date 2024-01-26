import { Select, Option } from "@material-tailwind/react";
 
export function SelectColors() {
  return (
    <div className="flex w-86 flex-col gap-6">
      <Select color="green" label="Select Type">
        <Option>Mono Crystalline</Option>
        <Option>Crystalline</Option>
      </Select>
    </div>
  );
}