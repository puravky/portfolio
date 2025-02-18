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
      className={`rounded-lg text-center px-4 py-2 border border-transparent hover:border-zinc-200  dark:hover:border-zinc-700 duration-100 text-sm font-medium ${
        year === currentYear ? "  " : " "
      }`}
    >
      {year}
    </button>
  );
}
