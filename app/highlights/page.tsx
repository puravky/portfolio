import Link from "next/link";
import { Tweet } from "react-tweet";

export const metadata = {
  title: "highlights",
  description: "highlights",
};

export default function Page() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        highlights tweets
      </h1>

      <div className="mb-4">
        <Tweet id="1873916200180203775" />
        <Link
          href="https://twitter.com/avhidotsol/status/1873916200180203775"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
        </Link>
      </div>

      <div className="mb-4">
        <Tweet id="1852357389170688162" />
        <Link
          href="https://twitter.com/avhidotsol/status/1852357389170688162"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
        </Link>
      </div>

      <div className="mb-4">
        <Tweet id="1852384957630738688" />
        <Link
          href="https://twitter.com/avhidotsol/status/1852384957630738688"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
        </Link>
      </div>

      <div className="mb-4">
        <Tweet id="1845452892800421920" />
        <Link
          href="https://twitter.com/avhidotsol/status/1845452892800421920"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
        </Link>
      </div>

      <div className="mb-4">
        <Tweet id="1823651578739409176" />
        <Link
          href="https://twitter.com/avhidotsol/status/1823651578739409176"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
        </Link>
      </div>
    </>
  );
}
