import { VFC } from "react";

type Props = {
  name: string;
  picture: string;
};

const Avatar: VFC<Props> = ({ name, picture }: Props) => (
  <div className="flex items-center mb-16">
    <img src={picture} className="w-24 h-24 rounded-full mr-4" alt={name} />
    <div className="flex flex-col">
      <div className="text-xl mb-4">
        {name} : メーカー勤務のWebエンジニア。人生がエモい。
      </div>
      <div className="text-xl flex">
        <a
          className="underline text-blue-600 mr-4"
          href="https://twitter.com/tarokov"
        >
          <img
            src="/assets/blog/logo/twitter-logo.png"
            className="h-10"
            alt="twitter-link"
          />
        </a>
        <a
          className="underline text-blue-600 mr-4"
          href="https://github.com/ninginx"
        >
          <img
            src="/assets/blog/logo/github-logo.png"
            className="h-10"
            alt="github-link"
          />
        </a>
        <a
          className="underline text-blue-600 mr-4"
          href="https://scrapbox.io/t4r0kov-scrap-scrap/"
        >
          <img
            src="/assets/blog/logo/scrapbox-logo.svg"
            className="h-10"
            alt="scrap-link"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Avatar;
