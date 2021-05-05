import { VFC } from "react";

type Props = {
  name: string;
  picture: string;
};

const Avatar: VFC<Props> = ({ name, picture }: Props) => (
  <div className="flex items-center mb-16">
    <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
    <div className="flex flex-col">
      <div className="text-xl">{name} : メーカー勤務のWebエンジニア</div>
      <div className="text-xl">
        <a
          className="underline text-blue-600"
          href="https://twitter.com/tarokov"
        >
          twitter
        </a>
      </div>
    </div>
  </div>
);

export default Avatar;
