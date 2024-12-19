type Props = {
  question: string;
};

export default function Question({ question }: Props) {
  return <div className="font-bold">{question}</div>;
}
