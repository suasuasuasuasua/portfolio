import HighlightedLink from "../link";
import { ComputerProps } from "@/types/computer";
import { BsGpuCard } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { GoCpu } from "react-icons/go";

export default function Computer({ computer: { specs, meta } }: ComputerProps) {
  return (
    <div>
      {/* Name of the computer */}
      <HighlightedLink
        link={meta.link}
        highlight="text-blue-400 font-bold text-lg"
      >
        {meta.name}
      </HighlightedLink>

      {/* Stick the data into a grid */}
      {/* <div className="grid gap-4 md:grid-cols-2"> */}
      <div>
        {/* Specs */}
        <div>
          {/* Operating System */}
          <div className="flex flex-row">
            <specs.os.icon className="mr-1 mt-1" />
            <span>{specs.os.name}</span>
          </div>
          {/* CPU */}
          <div className="flex flex-row">
            <GoCpu className="mr-1 mt-1" />
            <span>{specs.cpu}</span>
          </div>
          {/* GPU */}
          <div className="flex flex-row">
            <BsGpuCard className="mr-1 mt-1" />
            <span>{specs.gpu}</span>
          </div>
          {/* RAM */}
          <div className="flex flex-row">
            <FaMemory className="mr-1 mt-1" />
            <span>{specs.ram}</span>
          </div>
        </div>

        {/* Meta */}
        <div>
          {/* Usage */}
          <div>
            <span className="italic">Usage: </span>
            {meta.usage}
          </div>
          {/* Release */}
          <div>
            <span className="italic">Release: </span>
            {meta.releaseYear}
          </div>
          {/* Acquired */}
          <div>
            <span className="italic">Acquired: </span>
            {meta.acquireYear}
          </div>
          {/* Description */}
          {/* TODO: figure out how to make this prettier, maybe disclosure? */}
          <div>
            <span className="italic">Description:</span>
            {meta.description}
          </div>
        </div>
      </div>
    </div>
  );
}
