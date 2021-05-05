import { ReactNode, VFC } from "react";

type Props = {
  children?: ReactNode;
};

const Container: VFC<Props> = ({ children }: Props) => (
  <div className="container mx-auto md:w-1/2 px-10">{children}</div>
);

Container.defaultProps = {
  children: null,
};

export default Container;
