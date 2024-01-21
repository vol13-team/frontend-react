import { Box, FormLabel, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import styled from "styled-components";

type TextFieldProps = {
  name: string;
  label: string;
  validationRules?: RegisterOptions<FieldValues, string>;
};

const TextFieldComponent: React.FC<TextFieldProps> = ({
  name,
  label,
  validationRules,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <Textarea {...register(name, validationRules)} />
      <SText>{errorMessage?.toString()}</SText>
    </Box>
  );
};

const SText = styled(Text)`
  color: red;
  font-size: 0.8rem;
`;

export default TextFieldComponent;
