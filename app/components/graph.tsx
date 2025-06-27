"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { github } from "../components/data/contribution-gragh-theme";
import { useState, useEffect } from "react";
import { getGitHubYears } from "../lib/calculate-year";
import YearButton from "./shared/year-button";
import EmptyState from "./shared/empty-state";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const today = new Date().getFullYear();
  const username = "AvhiMaz";
  const joinYear = Number(2022);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-4">
        <div className="dark:bg-primary-bg bg-secondary-bg lowercase dark:border-zinc-800 border-zinc-200 p-1 rounded-lg max-w-fit max-h-fit">
          <GitHubCalendar
            username={username}
            theme={github}
            colorScheme={serverTheme}
            blockSize={8}
            year={calendarYear}
          />
        </div>
      </div>
      <div className="flex justify-center flex-row flex-wrap gap-2 mt-6">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </>
  );
}
