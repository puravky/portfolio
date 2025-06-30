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
      className={`rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200  dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-white/25 ${year === currentYear ? "  " : " "
        }`}
    >
      {year}
    </button>
  );
}
