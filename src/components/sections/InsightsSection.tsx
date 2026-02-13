import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "De toekomst van executive search in Nederland",
    excerpt: "Hoe veranderende markten en technologie de manier waarop we leiderschap vinden fundamenteel transformeren.",
    readTime: "5 min",
    href: "#",
  },
  {
    title: "5 signalen dat uw organisatie een nieuw C-level nodig heeft",
    excerpt: "Wanneer is het tijd om te investeren in nieuw leiderschap? Deze indicatoren helpen u de juiste beslissing te nemen.",
    readTime: "4 min",
    href: "#",
  },
  {
    title: "Waarom cultuurfit belangrijker is dan CV",
    excerpt: "Onderzoek toont aan dat culturele aansluiting een betere voorspeller is van succes dan ervaring alleen.",
    readTime: "6 min",
    href: "#",
  },
];

export function InsightsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Inzichten
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Kennis en perspectief over leiderschap en executive search.
            </p>
          </div>
          <Link
            to="/nl/inzichten"
            className="hidden items-center text-sm font-medium text-accent hover:underline md:inline-flex"
          >
            Alle artikelen <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.title}
              to={a.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {a.readTime} leestijd
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-card-foreground group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/nl/inzichten"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            Alle artikelen <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}