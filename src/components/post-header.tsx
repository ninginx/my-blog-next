import { VFC } from "react";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
};

const PostHeader: VFC<Props> = ({ title, date }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-lg">
        投稿日：
        <DateFormatter dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
