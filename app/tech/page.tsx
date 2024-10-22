import computers from "@/app/tech/computers";
import { devSoftware, cliSoftware, genSoftware } from "@/app/tech/software";
import Computer from "@/components/tech/computer";
import { Software, CLISoftware } from "@/components/tech/software";

export default function TechPage() {
  return (
    <div className="mx-auto flex w-11/12 flex-row justify-center space-x-8 md:w-9/12 md:space-x-16 lg:w-7/12 lg:space-x-24">
      {/* Computers Section */}
      <div>
        <p className="text-xl font-bold">Computers</p>

        <ul>
          {Object.entries(computers).map(([key, value]) => (
            <li key={key} className="mb-4">
              <Computer computer={value} />
            </li>
          ))}
        </ul>
      </div>
      {/* Software Section */}
      <div className="space-y-4">
        {/* Development Section */}
        <div>
          <p className="text-lg font-bold">Development</p>
          <ul className="space-y-2">
            {Object.entries(devSoftware).map(([key, value]) => (
              <li key={key}>
                <Software software={value} />
              </li>
            ))}
          </ul>
        </div>

        {/* CLI Development Section */}
        <div>
          <p className="text-lg font-bold">CLI</p>
          <ul className="space-y-2">
            {Object.entries(cliSoftware).map(([key, value]) => (
              <li key={key}>
                <CLISoftware software={value} />
              </li>
            ))}
          </ul>
        </div>

        {/* General Software */}
        <div>
          <p className="text-lg font-bold">General</p>
          <ul className="space-y-2">
            {Object.entries(genSoftware).map(([key, value]) => (
              <li key={key}>
                <Software software={value} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
