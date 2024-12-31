import React, { JSX, memo } from "react";

import Layout from "./Layout";

export const LayoutContainer = ({ children }: { children: JSX.Element }) => {
  return <Layout>{children}</Layout>;
};

export default memo(LayoutContainer);
