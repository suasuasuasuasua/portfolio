import { ComputerProps } from "@/types/computer";

export default function Computer({ computer }: ComputerProps) {
  return <p>{computer.meta.name}</p>;
}
