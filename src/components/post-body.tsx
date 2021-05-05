import { VFC } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

type markdownStyles = {
  markdown: string;
};

const PostBody: VFC<Props> = ({ content }: Props) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={(markdownStyles as markdownStyles).markdown}
      // packageで提供されてるので多分安全w
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
