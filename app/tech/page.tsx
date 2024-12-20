import computers from "@/app/tech/computers";
import {
  desktopAccessories,
  wearables,
  devices,
  headphones,
} from "@/app/tech/devices";
import { devSoftware, cliSoftware, genSoftware } from "@/app/tech/software";
import Computer from "@/components/tech/computer";
import Device from "@/components/tech/devices";
import { Software } from "@/components/tech/software";

export default function TechPage() {
  return (
    <div className="mx-auto flex w-11/12 flex-col justify-center space-y-4 lg:w-8/12">
      {/* Computers Section */}
      <div>
        <p className="text-xl">Computers</p>
        <ul className="flex flex-col space-y-2">
          {Object.entries(computers).map(([key, value]) => (
            <li key={key}>
              <Computer computer={value} />
            </li>
          ))}
        </ul>
      </div>

      {/* Devices Section */}
      <div className="space-y-2">
        <p className="text-xl">Gadgets</p>

        {/* Desktop Accessories */}
        <div>
          <p className="text-lg">Desktop Accessories</p>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {Object.entries(desktopAccessories).map(([key, value]) => (
              <li key={key}>
                <Device device={value} />
              </li>
            ))}
          </ul>
        </div>

        {/* Devices */}
        <div>
          <p className="text-lg">Devices</p>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {Object.entries(devices).map(([key, value]) => (
              <li key={key}>
                <Device device={value} />
              </li>
            ))}
          </ul>
        </div>

        {/* Wearables */}
        <div>
          <p className="text-lg">Wearables</p>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {Object.entries(wearables).map(([key, value]) => (
              <li key={key}>
                <Device device={value} />
              </li>
            ))}
          </ul>
        </div>

        {/* Headphones */}
        <div>
          <p className="text-lg">Headphones</p>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {Object.entries(headphones).map(([key, value]) => (
              <li key={key}>
                <Device device={value} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Development Section */}
      <div>
        <p className="text-xl">Development</p>
        <ul className="flex flex-col md:flex-row md:space-x-8">
          {Object.entries(devSoftware).map(([key, value]) => (
            <li key={key}>
              <Software software={value} />
            </li>
          ))}
        </ul>
      </div>

      {/* CLI Development Section */}
      <div>
        <p className="text-xl">CLI</p>
        <ul className="flex flex-col md:flex-row md:space-x-8">
          {Object.entries(cliSoftware).map(([key, value]) => (
            <li key={key}>
              <Software software={value} />
            </li>
          ))}
        </ul>
      </div>

      {/* General Software */}
      <div>
        <p className="text-xl">General</p>
        <ul className="flex flex-col md:flex-row md:space-x-8">
          {Object.entries(genSoftware).map(([key, value]) => (
            <li key={key}>
              <Software software={value} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
