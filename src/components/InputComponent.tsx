import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  validationRules?: RegisterOptions<FieldValues>;
};

const TextFieldComponent: React.FC<InputProps> = ({
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
      <Input type='text' {...register(name, validationRules)} />
      <SText>{errorMessage?.toString()}</SText>
    </Box>
  );
};

const SText = styled(Text)`
  color: red;
  font-size: 0.8rem;
`;

export default TextFieldComponent;
