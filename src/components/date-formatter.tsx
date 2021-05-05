import { parseISO, format } from "date-fns";
import { VFC } from "react";

type Props = {
  dateString: string;
};

const DateFormatter: VFC<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "yyyy年MM月dd日")}</time>;
};

export default DateFormatter;
