import deepFeelLogo from "@/assets/deep-feel-logo.png";
import workshopHero from "@/assets/workshop-hero.jpg";
import VotingPanel from "@/components/VotingPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="border-b border-foreground/15 px-4 md:px-8 py-4 flex items-center justify-between">
        <img src={deepFeelLogo} alt="Deep Feel Logo" className="h-16 md:h-20" />
        <div className="hidden md:flex gap-6 font-body text-sm">
          <a href="#workshop" className="hover:text-primary transition-colors">Workshop</a>
          <a href="#fragen" className="hover:text-primary transition-colors">Fragen</a>
          <a href="#ergebnisse" className="hover:text-primary transition-colors">Ergebnisse</a>
          <a href="#voting" className="hover:text-primary transition-colors">Abstimmung</a>
        </div>
      </nav>

      {/* HERO - Split Layout */}
      <header className="grid grid-cols-1 md:grid-cols-2 border-b border-foreground/15">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Was macht KI<br />mit unseren<br />Gefühlen?
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Eine digitale Ausstellung über Nähe, Einsamkeit und emotionale Verbindung
            im Zeitalter der Technologie. Ergebnisse aus dem Workshop „Deep Feel".
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[500px] border-l border-foreground/15">
          <img
            src={workshopHero}
            alt="Workshop-Teilnehmer*innen bei Deep Feel"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </header>

      {/* TAGLINE BAR */}
      <div className="border-b border-foreground/15 px-4 md:px-8 py-3 flex items-center gap-3 font-body text-sm text-muted-foreground">
        <span>Gefühle</span>
        <span>·</span>
        <span>Technologie</span>
        <span>·</span>
        <span>Verbindung</span>
        <span>·</span>
        <span>Jugend</span>
      </div>

      {/* INTRO + LOGO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b border-foreground/15">
        <div className="grid-panel md:col-span-2 flex flex-col justify-center">
          <p className="font-body text-base md:text-lg leading-relaxed max-w-lg">
            Im Rahmen des Workshops „Deep Feel" haben sich junge Menschen mit der Frage
            auseinandergesetzt, wie digitale Technologien unsere Gefühle und Beziehungen
            verändern. Diese Seite zeigt ihre Perspektiven, Fragen und Erkenntnisse.
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-teal">
          <img src={deepFeelLogo} alt="Deep Feel" className="w-32 md:w-40 invert brightness-0 invert" />
        </div>
        <div className="grid-panel flex items-center justify-center">
          <p className="font-display text-2xl md:text-3xl text-center leading-snug">
            Fühlen.<br />Fragen.<br />Verstehen.
          </p>
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section id="fragen" className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground/15">
        <div className="grid-panel md:col-span-3 pb-4">
          <h2 className="font-display text-2xl md:text-3xl">Unsere Fragen</h2>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-pink min-h-[200px]">
          <p className="font-display text-lg md:text-xl text-center leading-snug px-4">
            „Fühlt sich Online-Kontakt genauso an wie echte Begegnung?"
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center min-h-[200px]">
          <p className="font-display text-lg md:text-xl text-center leading-snug px-4">
            „Können KI oder digitale Räume Nähe ersetzen?"
          </p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-blue min-h-[200px]">
          <p className="font-display text-lg md:text-xl text-center leading-snug px-4">
            „Warum fühlen sich manche Menschen trotz vieler Kontakte einsam?"
          </p>
        </div>
      </section>

      {/* QUOTE BREAKOUT */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="breakout max-w-4xl mx-auto">
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-center">
            „Einsamkeit ist nicht das Gegenteil von Alleinsein – 
            es ist das Gefühl, nicht gesehen zu werden."
          </blockquote>
          <p className="font-body text-sm text-muted-foreground text-center mt-6">
            — Workshop-Teilnehmer*in, 17 Jahre
          </p>
        </div>
      </section>

      {/* FACTS GRID */}
      <section id="ergebnisse" className="grid grid-cols-2 md:grid-cols-4 border-t border-foreground/15">
        <div className="grid-panel md:col-span-4 pb-4">
          <h2 className="font-display text-2xl md:text-3xl">Fakten über Einsamkeit</h2>
        </div>
        <div className="grid-panel grid-panel--accent-yellow">
          <p className="font-display text-3xl md:text-4xl mb-2">36%</p>
          <p className="font-body text-sm">der 16- bis 30-Jährigen in Deutschland fühlen sich häufig einsam.</p>
        </div>
        <div className="grid-panel">
          <p className="font-display text-3xl md:text-4xl mb-2">70%</p>
          <p className="font-body text-sm">der Jugendlichen nutzen soziale Medien täglich – trotzdem steigt die Einsamkeit.</p>
        </div>
        <div className="grid-panel grid-panel--accent-orange">
          <p className="font-display text-3xl md:text-4xl mb-2">5h</p>
          <p className="font-body text-sm">verbringen junge Menschen durchschnittlich pro Tag am Smartphone.</p>
        </div>
        <div className="grid-panel">
          <p className="font-display text-3xl md:text-4xl mb-2">1 von 4</p>
          <p className="font-body text-sm">jungen Menschen hat niemanden, mit dem sie über persönliche Probleme sprechen können.</p>
        </div>
      </section>

      {/* WORKSHOP PANELS */}
      <section id="workshop" className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
        <div className="grid-panel md:col-span-3 pb-4">
          <h2 className="font-display text-2xl md:text-3xl">Aus dem Workshop</h2>
        </div>
        <div className="grid-panel md:col-span-2 md:row-span-2 p-0 relative overflow-hidden min-h-[300px]">
          <img
            src={workshopHero}
            alt="Workshop-Szene"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
        <div className="grid-panel flex items-center">
          <p className="font-body text-sm leading-relaxed">
            In der ersten Session ging es um die Frage: Was bedeutet emotionale Nähe
            in einer digitalisierten Welt? Die Teilnehmer*innen sammelten persönliche
            Erfahrungen und diskutierten in Kleingruppen.
          </p>
        </div>
        <div className="grid-panel grid-panel--accent-teal flex items-center">
          <p className="font-display text-lg leading-snug">
            „Ich chatte mit 100 Leuten, aber fühle mich trotzdem allein."
          </p>
        </div>
      </section>

      {/* QUESTION PILLS */}
      <section className="border-t border-foreground/15 px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {[
            "Wie fühlt sich Einsamkeit an?",
            "Kann Technologie Nähe schaffen?",
            "Was macht uns wirklich verbunden?",
            "Ist KI ein Freund?",
            "Wann fühlst du dich gesehen?",
            "Was fehlt im digitalen Raum?",
            "Hilft Social Media gegen Einsamkeit?",
            "Was bedeutet echte Begegnung?",
          ].map((q) => (
            <span key={q} className="question-pill">{q}</span>
          ))}
        </div>
      </section>

      {/* VIDEO + QUOTE ROW */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground/15">
        <div className="grid-panel min-h-[300px] flex items-center justify-center bg-foreground/5">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-foreground/30 flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="ml-1">
                <path d="M2 2L18 12L2 22V2Z" fill="currentColor" />
              </svg>
            </div>
            <p className="font-body text-sm text-muted-foreground">360° Workshop-Dokumentation</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Video kommt bald</p>
          </div>
        </div>
        <div className="grid-panel grid-panel--accent-pink flex items-center justify-center min-h-[300px]">
          <blockquote className="font-display text-2xl md:text-3xl text-center leading-snug max-w-sm">
            „Gefühle sind nicht digital – aber der Raum, in dem wir sie teilen, ist es."
          </blockquote>
        </div>
      </section>

      {/* SECOND QUOTE BREAKOUT - breaks the grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 border-t border-foreground/15">
        <div className="breakout-right max-w-3xl ml-auto mr-8">
          <blockquote className="font-display text-2xl md:text-4xl leading-tight text-right">
            „Wir haben gelernt, dass Zuhören manchmal wichtiger ist als Antworten."
          </blockquote>
          <p className="font-body text-sm text-muted-foreground text-right mt-4">
            — Workshop-Teilnehmer*in, 15 Jahre
          </p>
        </div>
      </section>

      {/* VOTING PANEL */}
      <section id="voting" className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
        <div className="grid-panel md:col-span-1 grid-panel--accent-yellow flex items-center justify-center">
          <p className="font-display text-2xl md:text-3xl leading-snug text-center">
            Deine<br />Stimme<br />zählt.
          </p>
        </div>
        <div className="grid-panel md:col-span-2">
          <VotingPanel />
        </div>
      </section>

      {/* MORE WORKSHOP CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-t border-foreground/15">
        <div className="grid-panel flex items-center justify-center">
          <p className="font-display text-lg text-center">Session 1<br /><span className="font-body text-sm text-muted-foreground">Gefühle erkennen</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-blue">
          <p className="font-display text-lg text-center">Session 2<br /><span className="font-body text-sm opacity-80">Digitale Räume</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center">
          <p className="font-display text-lg text-center">Session 3<br /><span className="font-body text-sm text-muted-foreground">KI & Empathie</span></p>
        </div>
        <div className="grid-panel flex items-center justify-center grid-panel--accent-teal">
          <p className="font-display text-lg text-center">Session 4<br /><span className="font-body text-sm opacity-80">Gemeinsam fühlen</span></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/15 px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={deepFeelLogo} alt="Deep Feel" className="h-12 mb-4" />
            <p className="font-body text-sm text-muted-foreground">
              Ein Workshop-Projekt über Gefühle,<br />Technologie und menschliche Verbindung.
            </p>
          </div>
          <div>
            <p className="font-display text-sm mb-3">Projekt</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Deep Feel ist ein einmaliges Workshop-Projekt, das junge Menschen einlädt,
              über die Auswirkungen digitaler Technologien auf ihre Gefühle nachzudenken.
            </p>
          </div>
          <div>
            <p className="font-display text-sm mb-3">Kontakt</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Bei Fragen zum Projekt oder den Ergebnissen freuen wir uns über eine Nachricht.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">© 2026 Deep Feel. Alle Rechte vorbehalten.</p>
          <p className="font-body text-xs text-muted-foreground">Eine digitale Ausstellung</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
