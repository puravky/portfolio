import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 duration-100 text-sm font-medium ${
        year === currentYear ? "  " : " "
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
