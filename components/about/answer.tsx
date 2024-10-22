type Props = {
  answer: string;
};

export default function Anwern({ answer }: Props) {
  return <div className="font-thin italic">{answer}</div>;
}
