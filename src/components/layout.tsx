import { VFC } from "react";
// import Alert from "./alert";
import Footer from "./footer";
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
    <Footer />
  </>
);

export default Layout;
