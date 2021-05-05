import { ReactNode, VFC } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle: VFC<Props> = ({ children }: Props) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center">
    {children}
  </h1>
);

PostTitle.defaultProps = {
  children: null,
};

export default PostTitle;
