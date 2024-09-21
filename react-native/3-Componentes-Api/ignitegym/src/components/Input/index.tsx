import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import React, { type ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <GlueStackInput
      $focus={{
        borderColor: "$green500",
        borderWidth: 1,
      }}
      h="$14"
      borderWidth="$0"
      borderRadius="$md"
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
    >
      <InputField px="$4" bg="$gray700" color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...rest} />
    </GlueStackInput>
  );
}
