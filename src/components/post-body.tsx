import { VFC } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody: VFC<Props> = ({ content }: Props) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={markdownStyles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
