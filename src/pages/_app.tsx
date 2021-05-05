import { AppProps } from "next/app";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  // 人様のパッケージだから安全
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
