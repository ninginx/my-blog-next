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
            className="w-10 "
            alt="twitter-link"
          />
        </a>
        <a
          className="underline text-blue-600"
          href="https://github.com/ninginx"
        >
          <img
            src="/assets/blog/logo/github-logo.png"
            className="w-10 "
            alt="twitter-link"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Avatar;
