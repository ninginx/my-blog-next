import cn from "classnames";
import Link from "next/link";
import { VFC } from "react";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage: VFC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

CoverImage.defaultProps = {
  slug: undefined,
};

export default CoverImage;
