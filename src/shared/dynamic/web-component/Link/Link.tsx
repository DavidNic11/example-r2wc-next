import type { FC } from "react";
import type { CommonLinkProps } from "../../common/Link";

const Link: FC<CommonLinkProps> = (props) => {
  return <a {...props} />;
};

export default Link;
