import { FormControlError } from "@gluestack-ui/themed";
import { FormControlErrorText } from "@gluestack-ui/themed";
import { FormControl, Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import React, { type ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, isInvalid, errorMessage, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} w="$full" mb="$4">
      <GlueStackInput
        isInvalid={isInvalid}
        $focus={{
          borderColor: invalid ? "$red500" : "$green500",
          borderWidth: 1,
        }}
        h="$14"
        borderWidth="$0"
        borderRadius="$md"
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{ borderColor: "$red500", borderWidth: 1 }}
      >
        <InputField px="$4" bg="$gray700" color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...rest} />
      </GlueStackInput>
      <FormControlError>
        <FormControlErrorText>{errorMessage}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
