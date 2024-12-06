import computers from "@/app/tech/computers";
import { devSoftware, cliSoftware, genSoftware } from "@/app/tech/software";
import Computer from "@/components/tech/computer";
import { Software, CLISoftware } from "@/components/tech/software";

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
