import r2wc from "@r2wc/react-to-web-component";

import PostDetails from "./PostDetails";

customElements.define(
  "r2wc-post-detail",
  r2wc(PostDetails, { props: { description: "string", postHref: "string" } })
);
