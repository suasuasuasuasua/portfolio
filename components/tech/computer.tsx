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
      <div>
        {/* Specs */}
        <div className="flex flex-col">
          {/* Operating System */}
          <div className="inline-flex">
            <Icon className="mr-1 mt-1" />
            {osName}
          </div>
          {/* CPU */}
          <div className="inline-flex">
            <GoCpu className="mr-1 mt-1" />
            {cpu}
          </div>
          {/* GPU */}
          <div className="inline-flex">
            <BsGpuCard className="mr-1 mt-1" />
            {gpu}
          </div>
          {/* RAM */}
          <div className="inline-flex">
            <FaMemory className="mr-1 mt-1" />
            {ram}
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
