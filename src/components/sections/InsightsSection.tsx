import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "De toekomst van executive search in Nederland",
    excerpt: "Hoe veranderende markten en technologie de manier waarop we leiderschap vinden fundamenteel transformeren.",
    readTime: "5 min",
    category: "Trends",
  },
  {
    title: "5 signalen dat uw organisatie een nieuw C-level nodig heeft",
    excerpt: "Wanneer is het tijd om te investeren in nieuw leiderschap? Deze indicatoren helpen u de juiste beslissing te nemen.",
    readTime: "4 min",
    category: "Leiderschap",
  },
  {
    title: "Waarom cultuurfit belangrijker is dan CV",
    excerpt: "Onderzoek toont aan dat culturele aansluiting een betere voorspeller is van succes dan ervaring alleen.",
    readTime: "6 min",
    category: "Assessment",
  },
];

export function InsightsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Kennisbank
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
              Inzichten
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Kennis en perspectief over leiderschap en executive search.
            </p>
          </div>
          <Link
            to="/nl/inzichten"
            className="hidden items-center gap-2 text-sm font-semibold text-accent hover:underline md:inline-flex"
          >
            Alle artikelen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.title}
              to="#"
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                  {a.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {a.readTime}
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/nl/inzichten"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Alle artikelen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}