import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates } from "@/lib/seo";
import { useState } from "react";

const vacancies = [
  { title: "Chief Technology Officer", company: "TechNova", location: "Amsterdam", type: "Full-time", level: "C-level", industry: "Tech / SaaS", posted: "2 days ago", urgent: true },
  { title: "VP Operations", company: "MAAS Aviation", location: "Schiphol", type: "Full-time", level: "VP", industry: "Aviation", posted: "5 days ago", urgent: false },
  { title: "Chief Financial Officer", company: "Confidential", location: "Rotterdam", type: "Full-time", level: "C-level", industry: "Finance", posted: "1 week ago", urgent: true },
  { title: "Head of People & Culture", company: "Confidential", location: "Utrecht", type: "Full-time", level: "Director", industry: "Retail", posted: "3 days ago", urgent: false },
  { title: "Managing Director DACH", company: "Confidential", location: "Amsterdam / Munich", type: "Full-time", level: "C-level", industry: "Industrial", posted: "1 day ago", urgent: true },
  { title: "Director of Engineering", company: "ScaleUp B.V.", location: "Eindhoven", type: "Full-time", level: "Director", industry: "Tech / SaaS", posted: "4 days ago", urgent: false },
  { title: "Interim CFO", company: "Confidential", location: "The Hague", type: "Interim", level: "C-level", industry: "Public Sector", posted: "6 days ago", urgent: false },
  { title: "Commercial Director Benelux", company: "Confidential", location: "Amsterdam", type: "Full-time", level: "Director", industry: "FMCG", posted: "2 days ago", urgent: false },
];

const industries = ["All sectors", "Tech / SaaS", "Finance", "Aviation", "Retail", "Industrial", "FMCG", "Public Sector"];
const levels = ["All levels", "C-level", "VP", "Director"];

const ENJobs = () => {
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All sectors");
  const [selectedLevel, setSelectedLevel] = useState("All levels");

  const filtered = vacancies.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.company.toLowerCase().includes(search.toLowerCase()) || v.location.toLowerCase().includes(search.toLowerCase());
    const matchesIndustry = selectedIndustry === "All sectors" || v.industry === selectedIndustry;
    const matchesLevel = selectedLevel === "All levels" || v.level === selectedLevel;
    return matchesSearch && matchesIndustry && matchesLevel;
  });

  return (
    <div className="min-h-screen">
      <PageMeta
        title="Jobs — Executive Positions | OneTime Recruit"
        description="View exclusive executive vacancies at leading organisations. C-level, VP and Director positions."
        locale="en_US"
        alternates={getAlternates("vacatures", ["nl", "de", "en"])}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Executive Jobs",
          description: "Exclusive executive positions at leading organisations.",
          numberOfItems: vacancies.length,
          itemListElement: vacancies.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "JobPosting", title: v.title, hiringOrganization: { "@type": "Organization", name: v.company }, jobLocation: { "@type": "Place", address: v.location }, employmentType: v.type === "Interim" ? "TEMPORARY" : "FULL_TIME" },
          })),
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Jobs" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Jobs</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Your next <span className="text-accent">leadership role</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Exclusive executive positions at leading organisations. Many assignments are confidential — contact us for the full overview.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search by role, company or location..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" maxLength={100} />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                    <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {industries.map((ind) => (
                      <button key={ind} onClick={() => setSelectedIndustry(ind)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${selectedIndustry === ind ? "bg-accent text-accent-foreground" : "border border-border bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground"}`}>{ind}</button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 md:border-l md:border-border md:pl-3">
                    {levels.map((lvl) => (
                      <button key={lvl} onClick={() => setSelectedLevel(lvl)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${selectedLevel === lvl ? "bg-primary text-primary-foreground" : "border border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}>{lvl}</button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-4 text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "position" : "positions"} found
            </div>

            <StaggerContainer className="mt-8 space-y-4" stagger={0.06}>
              {filtered.map((v, i) => (
                <StaggerItem key={`${v.title}-${i}`} variant="fade-up">
                  <Link to="/en/contact" className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-lg md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-card-foreground transition-colors group-hover:text-accent">{v.title}</h3>
                        {v.urgent && <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Urgent</span>}
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{v.company}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{v.location}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{v.type} · {v.level}</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{v.posted}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">{v.industry}</span>
                      <ArrowRight className="h-4 w-4 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filtered.length === 0 && (
              <div className="mt-16 text-center">
                <p className="text-lg text-muted-foreground">No positions found with these filters.</p>
                <Button variant="outline" className="mt-4 rounded-full" onClick={() => { setSearch(""); setSelectedIndustry("All sectors"); setSelectedLevel("All levels"); }}>Reset filters</Button>
              </div>
            )}
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Didn't find what you're looking for?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Many of our assignments are confidential. Get in touch and we'll match you with the right position.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/en/contact">Open application <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ENJobs;
