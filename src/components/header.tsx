import Link from "next/link";
import { VFC } from "react";

const Header: VFC = () => (
  <h3 className="text-1xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/">
      <div className="hover:underline">HOMEに戻る</div>
    </Link>
  </h3>
);

export default Header;
