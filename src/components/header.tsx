import Link from "next/link";
import { VFC } from "react";

const Header: VFC = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/">
      <div className="hover:underline">Blog</div>
    </Link>
    .
  </h2>
);

export default Header;
