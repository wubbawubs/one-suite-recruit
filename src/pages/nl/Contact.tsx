import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Telefoon", value: "+31 6 17 22 61 86", href: "tel:+31617226186" },
  { icon: Mail, label: "E-mail", value: "info@onetimerecruit.nl", href: "mailto:info@onetimerecruit.nl" },
  { icon: MapPin, label: "Locatie", value: "Amsterdam, Nederland", href: "#" },
  { icon: Clock, label: "Bereikbaar", value: "Ma-Vr 08:30-18:00", href: "#" },
];

const NLContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Vul alle verplichte velden in.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Vul een geldig e-mailadres in.");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.");
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <PageMeta
        title="Contact, OneTime Recruit"
        description="Neem contact op met OneTime Recruit voor een vrijblijvend gesprek over executive search. Bereikbaar op werkdagen van 08:30 tot 18:00."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact OneTime Recruit",
          description: "Neem contact op met OneTime Recruit.",
          mainEntity: {
            "@type": "Organization",
            name: "OneTime Recruit",
            telephone: "+31617226186",
            email: "info@onetimerecruit.nl",
            address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
          },
        }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Laten we <span className="text-accent">kennismaken</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Benieuwd wat OneTime Recruit voor uw organisatie kan betekenen? Neem contact op voor een vrijblijvend gesprek.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Form */}
              <ScrollReveal variant="slide-left" className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-card-foreground">Stuur ons een bericht</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Vul het formulier in en wij nemen binnen 24 uur contact met u op.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          placeholder="Uw volledige naam"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          maxLength={100}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="uw@email.nl"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          maxLength={255}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrijf</Label>
                        <Input
                          id="company"
                          placeholder="Uw organisatie"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+31 6 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          maxLength={20}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp</Label>
                      <Input
                        id="subject"
                        placeholder="Waar kunnen wij u mee helpen?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        maxLength={200}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        placeholder="Vertel ons meer over uw wensen..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        maxLength={2000}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-13 w-full rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all duration-300 md:w-auto"
                    >
                      {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <StaggerContainer className="space-y-5" stagger={0.1}>
                  {contactInfo.map((c) => (
                    <StaggerItem key={c.label} variant="fade-up">
                      <a
                        href={c.href}
                        className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/25 hover:shadow-md"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                          <p className="mt-1 text-[15px] font-medium text-card-foreground">{c.value}</p>
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <ScrollReveal variant="fade-up" delay={0.4}>
                  <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-8">
                    <h3 className="font-display text-lg font-bold text-foreground">Volg ons</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Blijf op de hoogte van de laatste inzichten en vacatures.</p>
                    <div className="mt-5 flex gap-3">
                      <a href="https://www.linkedin.com/company/onetimerecruit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="border-t border-border bg-muted/40 py-16">
          <div className="container">
            <ScrollReveal className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Liever direct bellen?</h3>
                <p className="mt-1 text-muted-foreground">Wij zijn bereikbaar op werkdagen van 08:30 tot 18:00.</p>
              </div>
              <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                <a href="tel:+31617226186">
                  <Phone className="mr-2 h-4 w-4" />
                  +31 6 17 22 61 86
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NLContact;
