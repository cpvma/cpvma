import type { Newsletter } from "@/data/newsletters";
import { newsletters } from "@/data/newsletters";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
] as const;

type CalendarMap = Record<string, Partial<Record<(typeof MONTHS)[number], Newsletter>>>;

const buildCalendar = (): CalendarMap => {
  return newsletters.reduce<CalendarMap>((acc, issue) => {
    const [monthName, year] = issue.date.split(" ");

    if (!MONTHS.includes(monthName as (typeof MONTHS)[number]) || !year) {
      return acc;
    }

    if (!acc[year]) {
      acc[year] = {};
    }

    acc[year][monthName as (typeof MONTHS)[number]] = issue;
    return acc;
  }, {});
};

const calendar = buildCalendar();
const sortedYears = Object.keys(calendar).sort((a, b) => Number(b) - Number(a));

export default function NewsletterCalendar() {
  return (
    <div className="space-y-10">
      {sortedYears.map((year) => {
        const yearMap = calendar[year];
        const publishedCount = Object.values(yearMap).filter(Boolean).length;

        return (
          <section
            key={year}
            className="rounded-3xl border border-forest/10 bg-white/90 p-6 shadow-[0_16px_36px_rgba(0,0,0,0.07)]"
          >
            <div className="flex flex-col gap-2 border-b border-forest/10 pb-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Calendar</p>
                <h2 className="text-2xl font-serif text-forest">{year}</h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
                {publishedCount} {publishedCount === 1 ? "issue" : "issues"}
              </span>
            </div>

            <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {MONTHS.filter((month) => yearMap[month]).map((month) => {
                const issue = yearMap[month]!;

                return (
                  <a
                    key={`${year}-${month}`}
                    href={issue.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full flex-col rounded-2xl border border-forest/10 bg-roseCream/85 p-4 text-left shadow-[0_10px_24px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:border-herbalGreen hover:shadow-[0_16px_30px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-herbalGreen/50"
                    aria-label={`Download ${issue.title}`}
                  >
                    <>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">{month}</p>
                      <p className="mt-3 font-serif text-lg text-forest">{issue.title}</p>
                    </>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
