import { VFC } from "react";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = ({ children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
