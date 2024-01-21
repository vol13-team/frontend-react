import { Box, Select, FormLabel } from "@chakra-ui/react";
import * as React from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  validationRules?: RegisterOptions<FieldValues, string>;
  options: string[];
};
const SingleSelectionField = (pros: Props) => {
  const { name, label, options } = pros;
  const { register, watch, setValue } = useFormContext();

  const watchValue = watch(name, "") as string;

  React.useEffect(() => {
    setValue(name, watchValue);
  }, [watchValue, setValue, register, name]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setValue(name, value);
  };

  return (
    <Box>
      <FormLabel>{label}</FormLabel>

      <Select id='demo-single-chip' value={watchValue} onChange={handleChange}>
        {options &&
          options.map((value: string) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </Select>
    </Box>
  );
};

export default SingleSelectionField;
