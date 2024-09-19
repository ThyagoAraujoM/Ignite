import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import React, { type ComponentProps } from "react";

type Props = ComponentProps<typeof InputField>;

export function Input({ ...rest }: Props) {
  return (
    <GlueStackInput
      $focus={{
        borderColor: "$green500",
        borderWidth: 1,
      }}
      bg="$gray700"
      h="$14"
      px="$4"
      borderWidth="$0"
      borderRadius="$md"
    >
      <InputField color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...rest} />
    </GlueStackInput>
  );
}
