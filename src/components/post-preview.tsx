import Link from "next/link";
import { VFC } from "react";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview: VFC<Props> = ({ title, date, excerpt, slug }: Props) => (
  <div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="hover:underline">{title}</div>
      </Link>
    </h3>
    <div className="text-lg mb-4">
      <DateFormatter dateString={date} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </div>
);

export default PostPreview;
