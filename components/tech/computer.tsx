import HighlightedLink from "@/components/link";
import { ComputerProps } from "@/types/computer";
import { BsGpuCard } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { GoCpu } from "react-icons/go";

export default function Computer({
  computer: {
    specs: {
      os: { icon: Icon, name: osName },
      cpu,
      gpu,
      ram,
    },
    meta: {
      name: deviceName,
      link,
      usage,
      // description,
      releaseYear,
      acquireYear,
    },
  },
}: ComputerProps) {
  return (
    <div>
      {/* Name of the computer */}
      <HighlightedLink link={link} highlight="text-blue-400 font-bold text-lg">
        {deviceName}
      </HighlightedLink>

      {/* Stick the data into a grid */}
      {/* <div className="grid gap-4 md:grid-cols-2"> */}
      <div>
        {/* Specs */}
        <div>
          {/* Operating System */}
          <div className="flex flex-row">
            <Icon className="mr-1 mt-1" />
            <span>{osName}</span>
          </div>
          {/* CPU */}
          <div className="flex flex-row">
            <GoCpu className="mr-1 mt-1" />
            <span>{cpu}</span>
          </div>
          {/* GPU */}
          <div className="flex flex-row">
            <BsGpuCard className="mr-1 mt-1" />
            <span>{gpu}</span>
          </div>
          {/* RAM */}
          <div className="flex flex-row">
            <FaMemory className="mr-1 mt-1" />
            <span>{ram}</span>
          </div>
        </div>

        {/* Meta */}
        <div>
          {/* Usage */}
          <div>
            <span className="italic">Usage: </span>
            {usage}
          </div>
          {/* Release */}
          <div>
            <span className="italic">Release: </span>
            {releaseYear}
          </div>
          {/* Acquired */}
          <div>
            <span className="italic">Acquired: </span>
            {acquireYear}
          </div>
          {/* Description */}
          {/* TODO: figure out how to make this prettier, maybe disclosure? */}
          {/* <div> */}
          {/*   <span className="italic">Description:</span> */}
          {/*   {description} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
