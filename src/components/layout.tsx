import { VFC } from "react";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout: VFC<Props> = ({ preview, children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.defaultProps = {
  preview: undefined,
};

export default Layout;
