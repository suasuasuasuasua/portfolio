import Image from "next/image";
import Link from "next/link";
import { CiWarning } from "react-icons/ci";

const height = 200;
const width = 200;

export default function Placeholder() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* construction notice */}
      <div className="flex flex-row font-bold lg-max-w-xl max-w-sm">
        <CiWarning className="mt-1 mx-1" />
        This page is under construction!
        <CiWarning className="mt-1 mx-1" />
      </div>

      {/* plink :) */}
      <Image
        src="/plink-wide-cat.gif"
        alt="plink"
        width={width}
        height={height}
        layout={"responsive"}
        unoptimized={true}
        priority
        className="lg:max-w-xl md:max-w-lg max-w-xs"
      />

      {/* note and links :) */}
      <div className="lg:max-w-xl max-w-sm">
        Check out the
        <span className="mx-1 font-bold">
          <Link
            href="https://github.com/suasuasuasuasua/personal-website/tree/staging"
            className="text-blue-500 underline underline-offset-4"
          >
            staging branch
          </Link>
        </span>
        or
        <span className="mx-1 font-bold">
          <Link
            href="https://github.com/suasuasuasuasua/personal-website/issues"
            className="text-blue-500 underline underline-offset-4"
          >
            issue list
          </Link>
        </span>
        to see when it will be ready!
      </div>
    </div>
  );
}