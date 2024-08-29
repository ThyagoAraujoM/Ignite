import type { defaultTheme } from "@theme/default";

import "styled-components/native";

declare module "styled-components/native" {
  type ThemeType = typeof defaultTheme;
  export interface DefaultTheme extends ThemeType {}
}
