import type { FC } from "react";
import type { CommonLinkProps } from "../../common/Link";

import NextLink from "next/link";

const Link: FC<CommonLinkProps> = (props) => {
  return <NextLink {...props} />;
};

export default Link;
