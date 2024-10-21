import computers from "@/app/tech/computers";
import Computer from "@/components/tech/computer";

export default function TechPage() {
  return (
    <div className="mx-4 flex flex-col">
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
    </div>
  );
}
