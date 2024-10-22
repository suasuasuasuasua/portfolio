import computers from "@/app/tech/computers";
import { devSoftware, cliSoftware, genSoftware } from "@/app/tech/software";
import Computer from "@/components/tech/computer";
import { Software, CLISoftware } from "@/components/tech/software";

export default function TechPage() {
  return (
    <div className="mx-auto flex flex-row space-x-10">
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
      <div>
        {/* Group the Development and CLi */}
        <div>
          {/* Development Section */}
          <div>
            <p className="text-lg font-bold">Development</p>
            <ul>
              {Object.entries(devSoftware).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <Software software={value} />
                </li>
              ))}
            </ul>
          </div>
          {/* CLI Development Section */}
          <div>
            <p className="text-lg font-bold">CLI</p>
            <ul>
              {Object.entries(cliSoftware).map(([key, value]) => (
                <li key={key} className="mb-4">
                  <CLISoftware software={value} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* General Software */}
        <div>
          <p className="text-lg font-bold">General</p>
          <ul>
            {Object.entries(genSoftware).map(([key, value]) => (
              <li key={key} className="mb-4">
                <Software software={value} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
