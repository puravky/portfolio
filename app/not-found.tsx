import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "error 404",
};

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - page not found
      </h1>
      <p className="mb-4">
        oops! the page you're looking for doesn't seem to exist.
      </p>
    </section>
  );
}
