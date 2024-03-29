import type { FC } from "react";

import Link from "@dynamic/Link";

interface PostDetailsProps {
  postHref: string;
  description: string;
}

const PostDetails: FC<PostDetailsProps> = ({ postHref, description }) => {
  return (
    <div>
      <p>{description}</p>
      <Link href={postHref}>See Full Post</Link>
    </div>
  );
};

export default PostDetails;
