import { ReactNode, VFC } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle: VFC<Props> = ({ children }: Props) => (
  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    {children}
  </h1>
);

PostTitle.defaultProps = {
  children: null,
};

export default PostTitle;
